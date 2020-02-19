const chalk = require('chalk');
const logSymbols = require('log-symbols');
const inquirer = require('inquirer');
const log = console.log;

exports.command = 'calc';
exports.desc = 'Let\'s do some sums!';
exports.handler = function (argv) {
    log(logSymbols.info, chalk.blue(`Let\'s do some sums!`));

    inquirer.prompt([
        {
            name: 'action',
            message: 'Select the action you want to perform',
            default: {name: 'Addition', value: 'plus'},
            type: 'list',
            choices: [
                {name: 'Addition', value: 'plus'},
                {name: 'Subtraction', value: 'minus'},
                {name: 'Division', value: 'divided by'}
            ]

        },
        {
            name: 'firstNumber',
            message: 'Enter a number',
            default: '1',
            type: 'input'
        },
        {
            name: 'secondNumber',
            message: 'Enter a second number',
            default: '10',
            type: 'input'
        }
    ]).then(answers => {
        answers.firstNumber = Number(answers.firstNumber);
        answers.secondNumber = Number(answers.secondNumber);

        log(logSymbols.info, chalk.blue(`Computing ${answers.action} sum...`));
        log(logSymbols.info, chalk.blue(`${answers.firstNumber} ${answers.action} ${answers.secondNumber} equals...`));

        let result;
        switch(answers.action) {
            case('plus'):
                result = answers.firstNumber + answers.secondNumber;
                break;
            case('minus'):
                result = answers.firstNumber - answers.secondNumber;
                break;
            case('divided by'):
                result = answers.firstNumber / answers.secondNumber;
                break;
        }

        log(logSymbols.success, chalk.green(result));
    });

};
