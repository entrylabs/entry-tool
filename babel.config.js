module.exports = function(api) {
    api.cache(true);
    return {
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    useESModules: true,
                },
            ],
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-object-assign',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-private-methods',
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
                        '@contexts': './src/contexts',
                        '@reducers': './src/reducers',
                    },
                },
            ],
        ],
        presets: [
            [
                '@babel/env',
                {
                    targets: {
                        browsers: ['>0.25%', 'ie >= 11'],
                    },
                },
            ],
            ['@babel/react', { runtime: 'automatic' }],
        ],
    };
};
