import type { UserConfig } from 'vite';

const config: UserConfig = {
    publicDir: 'public',
    base: '/',
    server: {
        port: 30001,
        open: true,
        proxy: {
            '^(?!/systems/lancer)': 'http://localhost:30000/',
            '/socket.io': {
                target: 'ws://localhost:30000',
                ws: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            name: 'index',
            entry: 'index.ts',
            formats: ['es'],
            fileName: 'index',
        },
    },
};

export default config;
