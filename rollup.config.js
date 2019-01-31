import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import url from '@entrylabs/postcss-url';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    clear({
        targets: ['component', 'dist'],
    }),
    postcss({
        modules: true,
        extract: true,
        plugins: [
            url({
                url: 'inline',
                maxSize: 14,
                fallback: 'copy',
                optimizeSvgEncode: true,
                copyPath: './dist/image',
                assetsPath: './image',
                useHash: true,
            }),
        ],
    }),
    json(),
    resolve({
        preferBuiltins: true,
        extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),
    commonjs({
        namedExports: {
            'node_modules/react/index.js': [
                'Children',
                'Component',
                'PropTypes',
                'createElement',
                'createFactory',
            ],
            'node_modules/lodash/lodash.js': ['debounce'],
            'node_modules/chroma-js/chroma.js': ['isValidElementType'],
        },
    }),
    babel({
        babelrc: false,
        runtimeHelpers: true,
        plugins: [
            ['@babel/plugin-transform-runtime', { useESModules: true }],
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-object-assign',
            '@babel/plugin-proposal-class-properties',
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@hoc': './src/hoc',
                        '@actions': './src/actions',
                        '@assets': './src/assets',
                        '@components': './src/components',
                        '@utils': './src/utils',
                        '@constants': './src/constants',
                        '@selectors': './src/selectors',
                    },
                },
            ],
        ],
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    targets: {
                        browsers: ['>0.25%', 'ie >= 11'],
                    },
                },
            ],
        ],
        exclude: 'node_modules/**',
    }),
    // terser(),
];

export default [
    {
        input: 'src/component.js',
        plugins,
        output: {
            file: './component/index.js',
            format: 'es',
            freeze: false,
            exports: 'named', // "named", "default"
            interop: false,
            sourcemap: true,
        },
    },
    {
        input: 'src/index.jsx',
        plugins,
        output: {
            file: './dist/entry-tool.js',
            format: 'es',
            freeze: false,
            exports: 'named', // "named", "default"
            interop: false,
            sourcemap: true,
        },
    },
];
