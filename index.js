const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const questionsForManager = [
  { name: "name", message: "What is Manager Name?", type: "input" },
  { name: "id", message: "What is Manager Id?", type: "input" },
  { name: "email", message: "What is Manager Email address ?", type: "input" },
  {
    name: "officeNumber",
    message: "What is Manager Office Number?",
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
  {
    name: "gitHub",
    message: "What is Engineer GitHub Username ?",
    type: "input",
  },
];

const questionsForIntern = [
  { name: "name", message: "What is Intern Name?", type: "input" },
  { name: "id", message: "What is Intern Id?", type: "input" },
  { name: "email", message: "What is Intern Email address ?", type: "input" },
  { name: "school", message: "What is Intern School Name?", type: "input" },
];

function createMyHTML(allData) {
  return `
    

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile Team Generator</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header>My team</header>

    <main>
      

      ${allData}
    </main>

    
  </body>
</html>

    
    
    `;
}

function createTeam(details) {
  var secondary = "";
  var secondaryData = "";
  if (details.getRole() == "Manager") {
    secondary = "OfficeNumber";
    secondaryData = details.getofficeNumber();
  } else if (details.getRole() == "Engineer") {
    secondary = "Github";
    secondaryData = `
    <a href="https://www.github.com/${details.getGitHub()}" target="_blank">${details.getGitHub()}</a>
    `
  } else if (details.getRole() == "Intern") {
    secondary = "School";
    secondaryData = details.getSchool();
  }

  return `
    <div class="profileTile">
        <div class="profileTileHeader">
          <h1>${details.getName()}</h1>

          <div class="profileTileHeaderRole">
           <img src="./images/${details
             .getRole()
             .toLowerCase()}.png" alt="icon">
            <h3>${details.getRole()}</h3>
          </div>
        </div>
        <div class="profileTileMainDataContainer">
          <div class="profileTileMainData">
            <p>ID:</p>
            <p>${details.getID()}</p>
          </div>
          <div class="profileTileMainData">
            <p>Email:</p>
            <p class= "emailContainer">
            <a href="mailto:${details.getEmail()}">
            ${details.getEmail()}</a>
            </p>
          </div>
          <div class="profileTileMainData">
            <p>${secondary}:</p>
            <p>${secondaryData}</p>
          </div>
        </div>
      </div>    
    
    `;
}

var allData = "";
var nnum = 1;

async function init() {
  allData = "";

  var managerData = await inquirer.prompt(questionsForManager);
  //add to classes objects

  var managerDetails = new Manager(
    managerData.name,
    managerData.id,
    managerData.email,
    managerData.officeNumber
  );
  allData += createTeam(managerDetails);

  while (nnum == 1) {
    var chosenOption = await inquirer.prompt(menu);
    if (chosenOption.option == "Add Engineer") {
      var engineerData = await inquirer.prompt(questionsForEngineer);
      var engineerDetails = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.gitHub
      );
      allData += createTeam(engineerDetails);
    } else if (chosenOption.option == "Add Intern") {
      var internData = await inquirer.prompt(questionsForIntern);
      var internDetails = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      allData += createTeam(internDetails);
    } else {
      nnum = 2;
    }
  }

  putData()
}

function putData() {
  fs.writeFile("./dist/index.html", createMyHTML(allData), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful");
    }
  });
}

init();
//putData();
