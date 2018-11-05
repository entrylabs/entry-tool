process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '/lib/entryjs/node_modules/entry-tool/dist';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const config = require('../config/webpack.config.component');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const getClientEnvironment = require('../config/env');

const cssFilename = 'static/css/[name].[contenthash:8].css';

// removes react-dev-utils/webpackHotDevClient.js at first in the array
// removes react-dev-utils/webpackHotDevClient.js
config.entry = config.entry.filter((entry) => !entry.includes('webpackHotDevClient'));
config.output.path = paths.componentBuild;
paths.publicUrl = paths.componentBuild + '/';
config.output.publicPath = paths.servedPath;

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
    fs.copySync(paths.appPublic, paths.componentBuild, {
        dereference: true,
        filter: (file) => file !== paths.appHtml,
    });
}
