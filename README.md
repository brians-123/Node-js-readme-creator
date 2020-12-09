# Node.js Professional README Generator

# Table of Contents :book:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description <a id="description"></a> :page_facing_up:

This project uses node.js and the inquirer npm package to prompt a user with questions and collect their answers. The answers are then used to generate a readme.md file. The readme contains section headers, bullets, hyperlinks, and icons to build a professional readme.

An example readme generated through this application is contained in the 'autoREADME.md' file. When the application is run, it will overwrite the file.

Here is a [demo](https://drive.google.com/file/d/1n2ufITo8I2avMhoGugxXL2UQBWANRtZS/view)

## Installation <a id="installation"></a> :floppy_disk:

- Install the LTS version of node https://nodejs.org/en/
- Download this repository from github
- Go to the terminal and type 'install npm' then hit enter
- Wait for the installation to complete then hit enter
- Type npm i inquirer then hit enter
- Wait for the installation to complete then hit enter

## Usage <a id="usage"></a> :computer:

- This program must be run in your terminal with the following command:

```bash
node index.js
```

- Run through the list of questions hitting enter after each answer

## License <a id="license"></a> :copyright:

This application should not be modified or distributed

## Contribute <a id="contribute"></a> :heavy_plus_sign: :heavy_plus_sign:

You should not contribute to this application

## Tests <a id="tests"></a> :microscope:

No tests have been used in this application

## Contact <a id="questions"></a> :email:

[github account](https://github.com/brians-123)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

---

User story and acceptance criteria is © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
