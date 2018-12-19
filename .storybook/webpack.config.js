const path = require('path');
const autoprefixer = require('autoprefixer');
const paths = require('../config/paths');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: path.resolve('./node_modules/react-custom-scroll/'),
                use: [require.resolve('style-loader'), require.resolve('css-loader')],
            },
            {
                test: /\.(css|scss)$/,
                exclude: path.resolve('./node_modules/react-custom-scroll/'),
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
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
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: require.resolve('url-loader'),
                include: path.resolve(__dirname, '../'),
            },
        ],
    },
};
