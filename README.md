# Og Experiments

This is me hacking stuff together in Foundry VTT.
Some of the stuff in here may end up something someday, but most of it will most likely not.

# Credits

-   The `ActivateScene` enricher is inspired by [Journals Like a Script](https://github.com/claypooj21/journals-like-a-script).

# Getting started

```bash
# Install dependencies
npm i

# Serve in watch mode
npm run start
```

# Notes

```bash
# Create a global link on the current dir
cd og-corelib
npm link
# See `npm help link` for more info

# Install og-corelib locally for dev (using the link create previously --^)
npm link og-corelib

# List the global packages (includes links)
npm list -g
```

# Dev SymLink (Windows)

Ref: https://chatgpt.com/c/671718c9-7b88-8002-88ba-59ff49d3bcb7

> TMP perso notes

```bash
cd "%LOCALAPPDATA%\FoundryVTT\Data\modules"
mklink /D "og-corelib" "E:\Repos\Experiments\FoundryVTT\og-experiments\og-corelib\dist"
mklink /D "og-custom-paused-icon" "E:\Repos\Experiments\FoundryVTT\og-experiments\og-custom-paused-icon\dist"
```

# Deployment

See GitHub Action: https://github.com/marketplace/actions/publish-foundryvtt-package
