// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the purpose and functionality of this project?",
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install the proyect?",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use your application",
  },
  {
    type: "list",
    name: "license",
    message: "Which licence did you use?",
    choices: ["MIT", "GNU GPL v3", "Apache 2.0", "N.A."],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines to this application?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the instructions to test your project?",
  },
  {
    type: "input",
    name: "name",
    message: "What is you name?",
  },
  {
    type: "input",
    name: "username",
    message: "What is you Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readmeData = generateMarkdown({ ...responses });
    console.log(responses)
    writeToFile("README.md", readmeData);
  });
}

// Function call to initialize app
init();
