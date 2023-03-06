const inquirer = require("inquirer");
const fs = require("fs");

const questionsForManager = [
  { name: "name", message: "What is your Name?", type: "input" },
  { name: "id", message: "What is your Id?", type: "input" },
  { name: "email", message: "What is your Email address ?", type: "input" },
  {
    name: "officeNumber",
    message: "What is your Office Number ?",
    type: "input",
  },
];

const menu = [
  {
    name: "option",
    message: "Choose from the following:",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "Exit"],
  },
];

const questionsForEngineer = [
  { name: "name", message: "What is Engineer Name?", type: "input" },
  { name: "id", message: "What is Engineer Id?", type: "input" },
  { name: "email", message: "What is Engineer Email address ?", type: "input" },
  { name: "gitHub", message: "What is Engineer GitHub Username ?", type: "input" },
];

const questionsForIntern = [
  { name: "name", message: "What is Intern Name?", type: "input" },
  { name: "id", message: "What is Intern Id?", type: "input" },
  { name: "email", message: "What is Intern Email address ?", type: "input" },
  { name: "school", message: "What is Intern School Name?", type: "input" },
];

function init() {
  inquirer.prompt(questionsForManager).then((answers) => {
    inquirer.prompt(menu).then((chosenOption) => {
      if (chosenOption.option == "Add Engineer") {
        inquirer.prompt(questionsForEngineer).then((engineerData) => {
          console.log(engineerData);
        });
      } else if (chosenOption.option == "Add Intern") {
        inquirer.prompt(questionsForIntern).then((internData) => {
          console.log(internData);
        });
      } else {
        return;
      }
    });
  });
}

init();
