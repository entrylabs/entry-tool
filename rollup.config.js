import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    postcss(),
    resolve({
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
    terser(),
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
        input: 'src/index.js',
        plugins,
        output: {
            file: './component/index2.js',
            format: 'es',
            freeze: false,
            exports: 'named', // "named", "default"
            name: 'EntryTool', // if format is "umd" or "iife"
            interop: false,
            sourcemap: true,
        },
    },
];
