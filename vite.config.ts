import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import linaria from '@linaria/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-styled-components'],
            },
        }),
        linaria({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
});
