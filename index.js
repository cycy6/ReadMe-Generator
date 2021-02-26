const Inquirer = require('inquirer')
const fs = require('fs')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function buildReadme(responses){

}

// TODO: Create a function to initialize app
async function init() {
   var answers = await Inquirer.prompt([
      /* Pass your questions in here */
      {
          type: 'input',
          message: `What is the title of your project?`,
          name: 'readme',
        },
        {
          type: 'input',
          message: `Please enter a description of your project`,
          name: 'description',
        },
        {
          type: 'input',
          message: `Please enter the installation instructions`,
          name: 'installation',
        },
        {
          type: 'input',
          message: `Please enter usage instructions`,
          name: 'usage',
        },
        {
          type: 'list',
          message: `Please enter the project license`,
          name: 'license',
          choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'MPL-2.0', 'BSD-3-Clause']
        },
        {
          type: 'input',
          message: `Please enter your gitHub profile link`,
          name: 'gitProfile',
        },
        {
          type: 'input',
          message: `Please enter your gitHub username`,
          name: 'cycy6',
        },
        {
          type: 'input',
          message: `Please enter your email address`,
          name: 'cycy6@gmail.com',
        },
    ]) 
    fs.writeFileSync('README.md', buildReadme(answers))
    console.log(answers)
  }


function buildReadme(answers){
  if (answers.license == "MIT"){ 
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (answers.license == "Apache-2.0"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (answers.license == "GPL-3.0"){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (answers.license == "MPL-2.0"){
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (answers.license == "BSD-3-Clause"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  return `
  # ${answers.title}${licenseBadge}
  ## Table of Contents  
  [Project Description](#Project-Description)  
  [Installation](#Installation)  
  [Usage](#Usage)     
  [License](#Project-License)  
  [Contact](#Contact)  
  ## Project Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Testing
  ${answers.test}
  ## Project License
  ${answers.license}
  ${licenseBadge}
  ## Contact
  GitHub Profile: ${answers.gitProfile}  
  GitHub Username: ${answers.gitUsername}  
  Email: ${answers.email}  
  `
} 
// Function call to initialize app
init();