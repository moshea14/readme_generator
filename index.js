// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will be the usage of your project?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license is your project under?',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'Other'
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are needed to run your project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your GitHub email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
            }
        console.log('README has been generated successfully');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
