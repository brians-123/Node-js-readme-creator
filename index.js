//import the inquirer npm package
const inquirer = require("inquirer");
//import the file system library
const fs = require("fs");
const licenseIcons = {
  None: "None",
  "Apache 2.0 License": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  "GNU General Public License v3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  "MIT License": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  'BSD 2-Clause "Simplified" License': `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
  'BSD 3-Clause "New" or "Revised" License': `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  "Boost Software 1.0": `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
  "Creative Commons Zero v1.0 Universal": `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
  "Eclipse Public License 2.0": `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
  "GNU Affero General Public License v3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  "GNU General Public License v2.0": `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
  "GNU Lesser General Public License v2.1": `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,
  "Mozilla Public License v2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  "The Unlicense": `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
};

// array of questions for user

// Description, Table of Contents (auto generate), Installation,
// Usage, License, Contributing, Tests, and Questions

const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe the project",
    name: "description",
  },
  {
    type: "input",
    message: "How can I install the program?",
    name: "installation",
  },
  {
    type: "input",
    message: "How can people use your program?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license are you using?",
    choices: [
      "None",
      "Apache 2.0 License",
      "GNU General Public License v3.0",
      "MIT License",
      `BSD 2-Clause "Simplified" License`,
      `BSD 3-Clause "New" or "Revised" License`,
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License v2.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "How can people contribute to your program?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Did you create any tests to confirm functionality?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message:
      "What is your email address for people to contact you with questions about the program?",
    name: "contact",
  },
];

inquirer
  .prompt(questions)
  // function to write README file
  .then((data) => {
    const licenseType = "";
    let licenseTerms = "";
    const readMeText = `# Project Title
    ${data.title}

  # Table of Contents :book:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description <a id="description"></a> :page_facing_up:
  ${data.description}

  ## Installation <a id="installation"></a> :floppy_disk:
  ${data.install}
  
  ## Usage <a id="usage"></a> :computer:
  ${data.usage}

  ## License <a id="license"></a> :copyright:
  ${licenseIcons[data.license]}
  This application is covered under the ${data.license} license. 


  ## Contribute <a id="contribute"></a> :heavy_plus_sign: :heavy_plus_sign:
  ${data.contribute}

  ## Tests <a id="tests"></a> :microscope:
  ${data.tests}

  ## Contact <a id="questions"></a> :email:
  [github account](https://github.com/${data.github})
  ${data.contact}
  
  `;

    fs.writeFile("./output/README.md", readMeText, (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully created a new Readme!")
    );
  });

// function to initialize program
function init() {}

// function call to initialize program
init();
