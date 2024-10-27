import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
        viteStaticCopy({
            targets: [
                { src: 'module.json', dest: '.' },
                { src: 'module.css', dest: '.' },
                { src: 'og-paused-icon-128x128.webp', dest: '.' },
                // { src: 'src/**/*.webp', dest: '.' },
            ],
        }),
    ],
});
