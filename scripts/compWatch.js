process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = '/lib/entryjs/node_modules/entry-tool/dist';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const config = require('../config/webpack.config.component');

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
