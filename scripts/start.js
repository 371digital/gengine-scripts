const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const createWebPackConfig = require('../config/webpack.config.js');
const paths = require('../config/paths.js');

const webpackConfig = createWebPackConfig(paths);

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
};

(() => {
    compiler.run(() => {
        runServer();
    });
})();