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
    type: 'list',
    message: 'What license is your project under? (Use arrow keys to navigate between choices)',
    choices: ['No license', 'Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Boost Software License 1.0', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the F*ck You Want to Public License', 'The zlib/libpng License'],
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
