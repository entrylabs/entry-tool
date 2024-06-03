const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const BANNER = [
    'ENTRY TOOL by @entrylabs',
    `@version ${require('./package.json').version} | ${new Date().toDateString()}`,
    `@license ${require('./package.json').license}`,
].join('\n');

module.exports = {
    entry: {
        'entry-tool': './src/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'EntryTool',
        libraryTarget: 'umd',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$|\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules\/(?!(d3-[\w]*|react.*)\/.*)/,
            },
            {
                test: /\.(css|scss)$/,
                oneOf: [
                    {
                        test: /\.(css|scss)$/,
                        include: [
                            path.resolve('./node_modules/'),
                            path.resolve('./src/assets/entry/scss/widget/insight.css'),
                        ],
                        use: [
                            require.resolve('style-loader'),
                            require.resolve('css-loader'),
                            require.resolve('sass-loader'),
                        ],
                    },
                    {
                        test: /\.(css|scss)$/,
                        exclude: [
                            path.resolve('./node_modules/'),
                            path.resolve('./src/assets/entry/scss/widget/insight.css'),
                        ],
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[local]__[hash:base64:5]',
                                        exportLocalsConvention: 'camelCase',
                                        exportOnlyLocals: false, // This should be false to export both classnames and locals
                                    },
                                    sourceMap: true,
                                    importLoaders: 2,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    postcssOptions: {
                                        plugins: [
                                            require('postcss-flexbugs-fixes'),
                                            autoprefixer({
                                                overrideBrowserslist: [
                                                    '>1%',
                                                    'last 4 versions',
                                                    'Firefox ESR',
                                                    'not ie < 9',
                                                ],
                                                flexbox: 'no-2009',
                                                remove: false,
                                            }),
                                        ],
                                    },
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@hoc': path.resolve(__dirname, './src/hoc'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@reducers': path.resolve(__dirname, './src/reducers'),
        },
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: BANNER,
            entryOnly: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        sideEffects: true,
        usedExports: true,
        minimize: true,
    },
    mode: process.env.NODE_ENV || 'development',
};
