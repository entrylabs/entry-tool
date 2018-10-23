const path = require('path');
const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = require('../config/paths');
const publicPath = paths.servedPath;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldUseRelativeAssetPaths = publicPath === './';
const extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
      { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};
module.exports = {
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     loaders: [
            //         require.resolve('style-loader'),
            //         {
            //             loader: require.resolve('css-loader'),
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //                 localIdentName: '[name]__[local]___[hash:base64:5]',
            //             },
            //         },
            //         require.resolve('sass-loader')
            //     ],
            //     include: path.resolve(__dirname, '../'),
            // },
            {
                test: /\.(css|scss)$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
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
                        },
                    },
                    require.resolve('sass-loader'),
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                include: path.resolve(__dirname, '../'),
            },
        ],
    },
};
