// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Please provide a brief description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide installation instructions for your project, if any.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide usage information for your project.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What license is your project under?',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Please specify contribution preferences for your project',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please provide test instructions for your project, if any.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
  },
  { 
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'How should people reach you with questions regarding your project?',
    name: 'questions',
  },
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
