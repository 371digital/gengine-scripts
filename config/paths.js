const path = require('path');
const fs = require('fs');

const appDirectory = path.join(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const readConfig = relativePath => JSON.parse(fs.readFileSync(relativePath), "utf-8");

module.exports = {
    env: readConfig(resolveApp('.gengine')),
    gamePath: resolveApp('.'),
    gamePublic: resolveApp('public'),
    gameHtml: resolveApp('public/index.html'),
    gameIndexJs: resolveApp('src/index.js'),
    gameSrc: resolveApp('src'),
    build: resolveApp("node_modules/gengine-build")
};