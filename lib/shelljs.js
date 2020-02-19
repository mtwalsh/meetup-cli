const chalk = require('chalk');
const logSymbols = require('log-symbols');
const shell = require('shelljs');
const log = console.log;

exports.command = 'renameTo <newName>';
exports.desc = 'Rename the readme title(s)';
exports.handler = function (argv) {
    log(logSymbols.info, chalk.blue(`Thanks, updating the readme title(s) to ${argv.newName}...`));
    shell.sed('-i', /^#(.*)/gim, `# ${argv.newName}`, './README.md');
    log(logSymbols.success, chalk.green(`Readme title(s) updated to ${argv.newName}`));
};
