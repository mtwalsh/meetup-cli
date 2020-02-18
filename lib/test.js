const chalk = require('chalk');
const logSymbols = require('log-symbols');
const figlet = require('figlet');
const log = console.log;

exports.command = 'test <what>';
exports.desc = 'Our first CLI command';
exports.handler = function (argv) {
    log(logSymbols.info, chalk.blue(`Test ${argv.what}`));
    log(chalk.red(figlet.textSync('Hello World!')));
};
