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
        rollupOptions: {
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.ts'],
    },
    server: {
        port: 3000,
        open: false, // Not necessary for a module
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'module.json', dest: '.' },
                { src: 'assets', dest: '.' },
                { src: 'styles', dest: '.' },
                { src: 'templates', dest: '.' },
                { src: 'src/**/*.hbs', dest: '.' },
                { src: 'src/**/*.css', dest: '.' },
                { src: 'src/**/*.png', dest: '.' },
            ],
        }),
    ],
});
