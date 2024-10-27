import prompts from 'prompts';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs';
import { writeFile, lstat, readdir, mkdir, copyFile, readFile } from 'fs/promises';

const copyFilesAndDirectories = async (source, destination) => {
    const entries = await readdir(source);

    for (const entry of entries) {
        const sourcePath = path.join(source, entry);
        const destPath = path.join(destination, entry);

        const stat = await lstat(sourcePath);

        if (stat.isDirectory()) {
            // Create the directory in the destination
            await mkdir(destPath);

            // Recursively copy files and subdirectories
            await copyFilesAndDirectories(sourcePath, destPath);
        } else {
            // Copy the file
            await copyFile(sourcePath, destPath);
        }
    }
};

const updatePackageJson = async (targetDir, response) => {
    const packageJsonPath = path.join(targetDir, 'package.json');
    try {
        const packageJsonData = await readFile(packageJsonPath, 'utf8');
        const packageJson = JSON.parse(packageJsonData);
        if (response.projectScope) {
            packageJson.name = `@${response.projectScope}/${response.projectName}`;
        } else {
            packageJson.name = response.projectName;
        }
        packageJson.author = response.authorName;
        packageJson.description = response.projectTitle;
        await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    } catch (error) {
        console.log(error.message);
    }
};

const updateModuleJson = async (targetDir, response) => {
    const moduleJsonPath = path.join(targetDir, 'module.json');
    try {
        const moduleJsonData = await readFile(moduleJsonPath, 'utf8');
        const moduleJson = JSON.parse(moduleJsonData);
        moduleJson.id = response.projectName;
        moduleJson.title = response.projectTitle;
        moduleJson.authors.push({
            name: response.authorName,
            url: response.authorUrl,
            discord: response.authorDiscord,
        });
        await writeFile(moduleJsonPath, JSON.stringify(moduleJson, null, 2), 'utf8');
    } catch (error) {
        console.log(error.message);
    }
};

const updateTsconfigJson = async (targetDir, templateResponse) => {
    const tsconfigJsonPath = path.join(targetDir, 'tsconfig.json');
    try {
        const tsconfigJsonData = await readFile(tsconfigJsonPath, 'utf8');
        const tsconfigJson = JSON.parse(tsconfigJsonData);
        if (!tsconfigJson.include) {
            tsconfigJson.include = [];
        }

        const dtsFile = `@types/foundry-vtt-types-${templateResponse.version}/index.d.mts`;
        if (tsconfigJson.include.indexOf(dtsFile) > -1) {
            console.log(`The definition files '${dtsFile}' is already included.`);
            return;
        }
        tsconfigJson.include.push(dtsFile);
        await writeFile(tsconfigJsonPath, JSON.stringify(tsconfigJson, null, 2), 'utf8');
    } catch (error) {
        console.log(error.message);
    }
};

const updateIndexTs = async (targetDir, templateResponse) => {
    const filePath = path.join(targetDir, 'index.ts');
    try {
        const content = await readFile(filePath, 'utf8');
        const className = camelize(templateResponse.projectName);
        content.replaceAll('OG_MODULE_CLASS_NAME', className);
        content.replaceAll('OG_MODULE_NAME', templateResponse.projectTitle);
        await writeFile(filePath, content, 'utf8');
    } catch (error) {
        console.log(error.message);
    }
};

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase()); // From: https://stackoverflow.com/a/60738940/8339553

const projectNamePattern = /^([a-z0-9-]+|\.)$/i;
const TEMPLATES = [
    {
        value: 'og-module',
        title: 'Foundry VTT og-module project',
        description: 'Create an empty og-module project.',
        prompts: [
            {
                type: 'text',
                name: 'projectName',
                message: 'Enter your project name, like `my-awesome-module`. Leaving `.` will use the name of the current directory.',
                initial: '.',
                format: (val) => val.toLowerCase().split(' ').join('-'),
                validate: (val) =>
                    projectNamePattern.test(val) ? true : 'Project name should not contain special characters except hyphen (-)',
            },
            {
                type: 'text',
                name: 'projectScope',
                message: 'Enter your project scope; used for NPM packages. Ex.: `og-modules` for @og-modules packages. Ignore if unsure.',
                format: (val) => val.toLowerCase().split(' ').join('-'),
                validate: (val) =>
                    projectNamePattern.test(val) ? true : 'Project scope should not contain special characters except hyphen (-)',
            },
            //@og-modules/
            {
                type: 'text',
                name: 'projectTitle',
                message: 'Enter the project title (like My Awesome Module)',
            },
            {
                type: 'text',
                name: 'authorName',
                message: 'Enter the author name',
                validate: (value) => (value ? true : 'Author name is required'),
            },
            {
                type: 'text',
                name: 'authorUrl',
                message: 'Enter the author website',
            },
            {
                type: 'text',
                name: 'authorDiscord',
                message: 'Enter the author Discord ID',
            },
        ],
        action: async (template, templateResponse) => {
            let targetDir;
            if (templateResponse.projectName === '.') {
                // Use the current directory
                templateResponse.projectName = path.basename(process.cwd());
                targetDir = process.cwd();
            } else {
                // Use the provided project name to create the directory
                targetDir = path.join(process.cwd(), templateResponse.projectName);

                // Create the directory if it does not exist
                if (fs.existsSync(targetDir)) {
                    console.error('Target directory already exist!');
                    return;
                }
            }

            const sourceDir = path.resolve(fileURLToPath(import.meta.url), '../../templates', template.value);
            await copyTemplateFiles(targetDir, sourceDir);

            console.log('Updating package.json...');
            await updatePackageJson(targetDir, templateResponse);
            console.log('package.json updated.');

            console.log('Updating module.json...');
            await updateModuleJson(targetDir, templateResponse);
            console.log('module.json updated.');

            console.log('Updating index.ts...');
            await updateIndexTs(targetDir, templateResponse);
            console.log('index.ts updated.');

            console.log(`Finished generating your project ${templateResponse.projectName}`);
            console.log(`cd ${templateResponse.projectName}`);
            console.log(`npm install`);
        },
    },
    {
        value: 'foundry-vtt-types',
        title: 'League of foundry developers Foundry VTT types v12.331.0-beta',
        description: 'Copy Foundry VTT types definition files v12.331.0-beta into the project under the `@types` folder.',
        prompts: [
            {
                type: 'select',
                name: 'version',
                message: 'Select template',
                choices: [
                    {
                        value: '12.331.0-beta',
                        title: 'Foundry VTT types v12.331.0-beta',
                    },
                ],
            },
            {
                type: 'toggle',
                name: 'includeLatestFoundryTypes',
                message: 'Include the latest Foundry VTT type definition files in tsconfig.json?',
                initial: true,
            },
        ],
        action: async (template, templateResponse) => {
            const typeFolderName = `${template.value}-${templateResponse.version}`;
            const targetDir = path.join(process.cwd(), '@types', typeFolderName);
            if (fs.existsSync(targetDir)) {
                console.error('Target directory already exist!');
                return;
            }

            const sourceDir = path.resolve(fileURLToPath(import.meta.url), '../../templates', typeFolderName);
            await copyTemplateFiles(targetDir, sourceDir);

            if (templateResponse.includeLatestFoundryTypes) {
                updateTsconfigJson(process.cwd(), templateResponse);
            }
        },
    },
];

(async () => {
    try {
        const response = await prompts([
            {
                type: 'select',
                name: 'template',
                message: 'Select template',
                choices: TEMPLATES,
            },
        ]);
        const template = TEMPLATES.find((x) => x.value === response.template);

        let templateResponse = {};
        if (template?.prompts) {
            templateResponse = await prompts(template.prompts);
        }

        if (!template?.action) {
            console.error("No action detected. Can't proceed.");
        }
        template.action(template, templateResponse);
    } catch (err) {
        console.error(err.message);
    }
})();
async function copyTemplateFiles(targetDir, sourceDir) {
    console.log('Creating target directory...');
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('Directory created.');

    console.log('Copying template files...');
    await copyFilesAndDirectories(sourceDir, targetDir);
    console.log('Template files copied.');
}
