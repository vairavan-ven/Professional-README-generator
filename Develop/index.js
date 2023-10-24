// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'What is the User Story:'
    },
    {
        type: 'input',
        name: 'acceptanceCriteria',
        message: 'What is the Acceptance Criteria:'
    },
    {
        type: 'input',
        name: 'deployedLink',
        message: 'What is the deployed link of the prject:'
    }
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
