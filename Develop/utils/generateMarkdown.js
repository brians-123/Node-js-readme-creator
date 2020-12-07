// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${generateDescription(data.description)}


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
    choices: ['the first one','the second one'],
    name: "licensing",
  },
  {
    type: "input",
    message: "How can people contribute to your program?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Did you create any tests to confirm functionality?",
    name: "tests",
  },
  {
    type: "input",
    message: "How can people contact you with questions about the program?",
    name: "contact",
  },

`;
}

function generateDescription(description) {
  return `## Description
  ${data.description}`;
}

module.exports = generateMarkdown;

console.log(
  generateMarkdown({
    title: "this is my title",
    description: "this is my description",
  })
);
