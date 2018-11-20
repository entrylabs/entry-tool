process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
// process.env.GENERATE_SOURCEMAP = 'inline-source-map';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const getClientEnvironment = require('../config/env');
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

config.entry = config.entry.filter((entry) => !entry.includes('webpackHotDevClient'));
config.output.path = paths.appBuild;
paths.publicUrl = paths.appBuild + '/';
config.output.publicPath = paths.servedPath;

config.bail = undefined;
config.plugins = [
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
        compress: {
            warnings: false,
            dead_code: true,
            unused: true,
        },
        mangle: false,
        output: {
            beautify: true,
        },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

webpack(config).watch({}, (err, stats) => {
    console.log(
        stats.toString({
            chunks: false,
            colors: true,
        })
    );
});
