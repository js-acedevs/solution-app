import { resolve } from 'path';
import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
        manifest: true,
    },
    publicDir: 'public',
    plugins: [
        rollupReplace({
            preventAssignment: true,
            values: {
                __DEV__: JSON.stringify(true),
                'process.env.NODE_ENV': JSON.stringify('development'),
            },
        }),
        react(),
        EnvironmentPlugin([
            'REACT_APP_NAME',
            'REACT_APP_PUBLIC_URL',
            'REACT_APP_GQL_API_URI',
            'REACT_APP_GQL_WS_API_URI',
            'REACT_APP_GQL_ACTIONS_URL',
            'REACT_APP_JWT_STORAGE_KEY',
            'REACT_APP_CRYPTO_SECRET_KEY',
        ]),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            '@atoms': resolve(__dirname, 'src/components/atoms'),
            '@molecules': resolve(__dirname, 'src/components/molecules'),
            '@organisms': resolve(__dirname, 'src/components/organisms'),
            '@templates': resolve(__dirname, 'src/components/templates'),
            '@pages': resolve(__dirname, 'src/pages/index'),
            '@config/*': resolve(__dirname, 'src/config/*'),
            '@hooks/*': resolve(__dirname, 'src/hooks/*'),
            '@enums': resolve(__dirname, 'src/enums'),
            '@interfaces/*': resolve(__dirname, 'src/interfaces/*'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@validators': resolve(__dirname, 'src/validators'),
            '@graphql/*': resolve(__dirname, 'src/graphql/*'),
        },
    },
});
