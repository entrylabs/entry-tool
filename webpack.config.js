const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const SafeUmdPlugin = require('safe-umd-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
// const postcssPrefixer = require('postcss-prefixer');
const options = {};
if (process.env.NODE_ENV === 'watch') {
    options.watch = true;
}

const BANNER = [
    'ENTRY TOOL by @entrylabs',
    `@version ${pkg.version} | ${new Date().toDateString()}`,
    `@author ${pkg.author}`,
    `@license ${pkg.license}`,
].join('\n');

const config = {
    ...options,
    entry: {
        'entry-tool': './src/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'EntryTool',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$|\.js?$/,
                use: 'babel-loader',
                exclude: [path.resolve('./node_modules/')],
            },

            {
                test: /\.(css|scss)$/,
                include: [path.resolve('./node_modules/')],
                use: [require.resolve('style-loader'), require.resolve('css-loader')],
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                exclude: [path.resolve('./node_modules/')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                    remove: false,
                                }),
                            ],
                            // plugins: [
                            //     postcssPrefixer({
                            //         prefix: 'entry-modal-',
                            //     }),
                            // ],
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
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                use: 'url-loader',
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
        },
    },
    externals: {
        // react: {
        //     commonjs: 'react',
        //     commonjs2: 'react',
        //     amd: 'react',
        //     root: 'React',
        // },
        // 'react-dom': {
        //     commonjs: 'react-dom',
        //     commonjs2: 'react-dom',
        //     amd: 'react-dom',
        //     root: 'ReactDOM',
        // },
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
    plugins: [
        new SafeUmdPlugin(),
        new FixStyleOnlyEntriesPlugin(),
        new webpack.BannerPlugin({
            banner: BANNER,
            entryOnly: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};

module.exports = config;
