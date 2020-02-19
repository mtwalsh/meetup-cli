const chalk = require('chalk');
const logSymbols = require('log-symbols');
const axios = require('axios');
const log = console.log;

exports.command = 'getJoke';
exports.desc = 'Rename the readme title(s)';
exports.handler = function (argv) {

    log(logSymbols.info, 'Get your laughing chops at the ready...');

    const url = 'https://icanhazdadjoke.com/';

    axios.get(url, { headers: { Accept: 'application/json' } })
    .then(res => {
        log(logSymbols.info, 'Joke received and it\'s a good one:');
        log(logSymbols.success, res.data.joke);
    }).catch(err => {
        log(logSymbols.error, chalk.red(`This is not amusing, an error has occurred: ${err.message}`))
    });

};
