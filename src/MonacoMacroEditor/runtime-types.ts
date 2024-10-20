/**
 * Register type definitions with the monaco-macro-editor module.
 *
 * @param filePath The virtual declaration file path (like `{filePath}.d.ts` file). It can be the object namespace like `myModule` or `myNamespace.myModule`. The file does not have to exist.
 * @param code The declaration file content (content of the `.d.ts` file).
 */
export declare function registerTypes(filePath: string, code: string): void;

/**
 * Resolves the given namespace path to retrieve the corresponding value.
 *
 * @param namespacePath - The dot-separated path to the desired value within the namespace.
 * @returns The value located at the specified namespace path; returns undefined if the path is invalid.
 */
function resolveNamespacePath(namespacePath: string): any {
    return namespacePath.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : undefined;
    }, globalThis as any);
}

/**
 * Extracts and returns the argument names of a given function as an array.
 *
 * @param func The function to extract argument names from.
 * @returns An array of argument names extracted from the function.
 */
function getFunctionArguments(func: Function): string[] {
    const funcStr = func.toString();
    const argsMatch = funcStr.match(/\(([^)]*)\)/);
    if (argsMatch) {
        return argsMatch[1]
            .split(',')
            .map((arg) => arg.trim())
            .filter((arg) => arg); // Return argument names as an array
    }
    return [];
}

/**
 * Checks if a given value is an object.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is an object or not.
 */
function isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Generates TypeScript namespace declarations based on the provided module object.
 *
 * @param moduleObject - An object containing the module structure to generate namespace declarations for.
 * @param indentLevel - The level of indentation for the generated namespace declarations. Default is 1.
 * @returns A string representing the TypeScript namespace declarations.
 */
function generateNamespace(moduleObject: Record<string, any>, indentLevel = 1): string {
    let dts = '';
    const indent = '    '.repeat(indentLevel);

    for (const key of Object.keys(moduleObject)) {
        const type = typeof moduleObject[key];
        if (type === 'function') {
            const args = getFunctionArguments(moduleObject[key]);
            const argsStr = args.length > 0 ? args.join(': any, ') + ': any' : '';
            dts += `${indent}function ${key}(${argsStr}): any;\n`;
        } else if (isObject(moduleObject[key])) {
            // Nested namespace for sub-objects (inferred from object structure)
            dts += `${indent}namespace ${key} {\n`;
            dts += generateNamespace(moduleObject[key], indentLevel + 1);
            dts += `${indent}}\n`;
        } else {
            dts += `${indent}const ${key}: ${type};\n`;
        }
    }

    return dts;
}

/**
 * Generates a declaration file (.d.ts) content for a given namespace path.
 *
 * @param namespacePath The path of the namespace to generate the declaration for.
 * @returns The generated declaration file content as a string.
 */
export function generateDTSFromObject(namespacePath: string): string {
    // Resolve the object from the string "myModule" or "myNamespace.myModule"
    const moduleObject = resolveNamespacePath(namespacePath);

    if (!moduleObject) {
        console.error(`Namespace path "${namespacePath}" could not be resolved.`);
        return '';
    }

    // Split the namespace into parts
    const namespaceParts = namespacePath.split('.');
    const rootNamespace = namespaceParts[0];
    const subNamespace = namespaceParts.slice(1).join('.');

    // Handle the case where the resolved object is not an object (e.g., a function)
    if (typeof moduleObject === 'function') {
        const args = getFunctionArguments(moduleObject);
        const argsStr = args.length > 0 ? args.join(': any, ') + ': any' : '';
        return `declare function ${subNamespace}(${argsStr}): any;\n`;
    }

    let dts = `declare namespace ${rootNamespace} {\n`;

    // Generate the sub-namespace, starting at the resolved sub-object level
    if (subNamespace) {
        dts += `    namespace ${subNamespace} {\n`;
        dts += generateNamespace(moduleObject, 2);
        dts += `    }\n`;
    } else {
        dts += generateNamespace(moduleObject, 1);
    }

    dts += `}`;

    return dts;
}
