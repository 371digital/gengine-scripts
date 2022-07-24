#!/usr/bin/env node

const { spawnSync } = require("child_process");

const args = process.argv.slice(2);

const scripts = {
    start: require("../scripts/start.js")
};

const scriptName = args.find((arg) => typeof scripts[arg] !== "undefined");

if (typeof scriptName !== "undefined") {
    spawnSync(
        process.execPath,
        scripts[scriptName],
        { stdio: 'inherit' }
    );
}
else {
    console.log("Unknown script.");
    process.exit(1);
};