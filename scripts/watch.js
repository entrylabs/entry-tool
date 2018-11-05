process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '/lib/entryjs/node_modules/entry-tool/dist';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod.js');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const getClientEnvironment = require('../config/env');

const cssFilename = 'static/css/[name].[contenthash:8].css';

// removes react-dev-utils/webpackHotDevClient.js at first in the array
// removes react-dev-utils/webpackHotDevClient.js
config.entry = config.entry.filter((entry) => !entry.includes('webpackHotDevClient'));
config.output.path = paths.appBuild;
paths.publicUrl = paths.appBuild + '/';
config.output.publicPath = paths.servedPath;
const publicUrl = config.output.publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);
config.plugins = [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    }),
    new webpack.DefinePlugin(env.stringified), // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
        filename: cssFilename,
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
        fileName: 'asset-manifest.json',
    }),
];

webpack(config).watch({}, (err, stats) => {
    if (err) {
        console.error(err);
    } else {
        copyPublicFolder();
    }
    console.error(
        stats.toString({
            chunks: false,
            colors: true,
        })
    );
});

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: (file) => file !== paths.appHtml,
    });
}
