import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'), // Your main TypeScript file as entry point
            formats: ['es'],
            fileName: 'index',
        },
        outDir: 'dist',
        sourcemap: true,
        minify: false,
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                preserveModules: true,
                preserveModulesRoot: __dirname,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.ts', '.jsx', '.json'],
    },
    server: {
        port: 3000,
        open: false, // Not necessary for a module
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
            outputDir: 'dist',
            rollupTypes: true,
        }),
        viteStaticCopy({
            targets: [{ src: 'module.json', dest: '.' }],
        }),
    ],
});
