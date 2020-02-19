const chalk = require('chalk');
const logSymbols = require('log-symbols');
const inquirer = require('inquirer');
const axios = require('axios');
const log = console.log;

exports.command = 'getNames';
exports.desc = 'Get ideas for your new name!';
exports.handler = function (argv) {
    log(logSymbols.info, chalk.blue(`Let\'s get some names...`));

    inquirer.prompt([
        {
            name: 'newName',
            message: 'Select a name',
            type: 'list',
            choices() {

                const url = 'https://uinames.com/api/?amount=12&region=england';

                return axios.get(url, { headers: { Accept: 'application/json' } })
                    .then(res => {
                        const names =  res.data.map((nameObject) => {
                            return nameObject.name;
                        });
                        return names;
                    }).catch(err => {
                        log(logSymbols.error, chalk.red(`Sorry, an error has occurred: ${err.message}`));
                        process.exit(1);
                    });

            }

        }
    ]).then(answers => {

        log(logSymbols.success, chalk.green('Nice, ') +
            chalk.bold.green.underline(answers.newName) +
            chalk.green(' is a strong name'));

    });

};
