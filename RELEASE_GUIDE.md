# Release Guide for og-custom-paused-icon

This repository contains a GitHub Actions workflow to automatically release the `og-custom-paused-icon` module for Foundry VTT v13.

## How to Release

1. **Navigate to the Actions tab** in your GitHub repository
2. **Select the "Release og-custom-paused-icon Module" workflow**
3. **Click "Run workflow"**
4. **Choose the version bump type:**
   - `patch` - for bug fixes (0.1.0 → 0.1.1)
   - `minor` - for new features (0.1.0 → 0.2.0)
   - `major` - for breaking changes (0.1.0 → 1.0.0)
5. **Click "Run workflow"** to start the release process

## What the Workflow Does

1. **Version Management:**
   - Automatically bumps the version in both `module.json` and `package.json`
   - Commits the version changes to the repository
   - Creates a git tag with the format `og-custom-paused-icon-v{version}`

2. **Build Process:**
   - Installs Node.js dependencies
   - Builds the module using Vite
   - Creates a distributable package in the `dist` folder

3. **GitHub Release:**
   - Creates a new GitHub release with the version tag
   - Uploads the built module as a ZIP file
   - Includes the `module.json` file for direct installation
   - Provides installation instructions in the release notes

## Installation in Foundry VTT v13

After a release is created, users can install the module in Foundry VTT using:

**Manifest URL:**
```
https://github.com/{your-username}/{your-repo}/releases/download/og-custom-paused-icon-v{version}/module.json
```

Replace `{your-username}`, `{your-repo}`, and `{version}` with the actual values.

## Module Features

The `og-custom-paused-icon` module:
- Changes the default Foundry VTT paused icon to a custom rotating skull icon
- Requires the `og-corelib` module as a dependency
- Compatible with Foundry VTT v11-v13
- Includes custom CSS animations for the paused state

## File Structure

```
og-custom-paused-icon/
├── dist/                          # Built files (generated)
├── index.ts                       # Main module code
├── module.json                    # Foundry VTT module manifest
├── module.css                     # Custom styles
├── og-paused-icon-128x128.webp   # Custom icon asset
├── package.json                   # Node.js package configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.mjs               # Vite build configuration
```

## Notes

- The workflow does **NOT** publish to NPM (as requested)
- Only creates GitHub releases for direct installation in Foundry VTT
- Automatically handles version bumping and tagging
- Includes proper manifest URLs for easy installation
