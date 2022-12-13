// Includes packages required for the application to run.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your project title.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project, if any.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.',
  },
  {
    type: 'list',
    message: 'What license is your project under? (Use arrow keys to navigate between choices)',
    name: 'license',
    choices: ['No license', 'Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Boost Software License 1.0', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the F*ck You Want to Public License', 'The zlib/libpng License'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please specify contribution preferences for your project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project, if any.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  { 
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'How should people reach you with questions regarding your project?',
  },
]

// Writes README file using fs
function writeToFile(fileContent) {
  return new Promise(() => {
    fs.writeFile('README.md', fileContent, err => {
      err ? console.log(err) : console.log('File created!');
    });
  });
};

// Initializes app using inquirer
function init() {
  inquirer.prompt(questions)
    .then((data) => { 
      return generateMarkdown(data)
    })
    .then(data => {
      return writeToFile(data)
    })
};
// Function call to initialize app
init();


