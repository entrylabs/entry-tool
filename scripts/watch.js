'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.GENERATE_SOURCEMAP = 'true';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
    throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.watch');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

config.entry = config.entry.filter((entry) => !entry.includes('webpackHotDevClient'));
config.output.path = paths.appBuild;
paths.publicUrl = paths.appBuild + '/';
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
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: (file) => file !== paths.appHtml,
    });
}
