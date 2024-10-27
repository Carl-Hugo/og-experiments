const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist'); // Adjusts the path to one level up from /build

if (fs.existsSync(distPath)) {
    fs.readdirSync(distPath).forEach((file) => {
        const currentPath = path.join(distPath, file);
        fs.rmSync(currentPath, { recursive: true, force: true });
    });
    console.log('Dist folder contents cleaned successfully.');
} else {
    console.log('Dist folder does not exist. No cleaning needed.');
}
