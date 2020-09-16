const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderer = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Inquirer to get information for each object
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let team = [];
let employees = [];

let engineerInquirer = [
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
      type: "input",
      message: "What is your ID?",
      name: "id"
  },
  {
      type: "input",
      message: "What is your Github?",
      name: "github"
  }
];

let managerInquirer = [
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
      type: "input",
      message: "What is your ID?",
      name: "id"
  },
  {
    type: "input",
    message: "What is your Office Number?",
    name: "officeNumber"
  }
];

let internInquirer = [
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
      type: "input",
      message: "What is your ID?",
      name: "id"
  },
  {
    type: "input",
    message: "What is your School Name?",
    name: "school"
  }
];

let initInquirer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your Role?",
        name: "role"
      }
    ])
    .then(response => {
      
      let teamMember = {};

      teamMember.name = response.name;
      teamMember.role = response.role;

      if (response.role === 'Engineer') {
        inquirer
          .prompt(engineerInquirer)
            .then(res => {
              teamMember.email = res.email;
              teamMember.id = res.id;
              teamMember.github = res.github;

              team.push(teamMember);
              renderApp(teamMember); 
                        
            });
      } else if(response.role === 'Manager'){
        inquirer
          .prompt(managerInquirer)
            .then(res => {
              teamMember.email = res.email;
              teamMember.id = res.id;
              teamMember.officeNumber = res.officeNumber;

              team.push(teamMember);
              renderApp(teamMember);
              
            });
      } else if(response.role === 'Intern'){
        inquirer
          .prompt(internInquirer)
            .then(res => {
              teamMember.email = res.email;
              teamMember.id = res.id;
              teamMember.school = res.school;
              
              team.push(teamMember);
              renderApp(teamMember);

            });
      }else {
        console.log("This is not an employee!");
      }

    });
}

initInquirer();

//Create each object with the information gathered

let renderApp = (teamMember) => {
    let emp;

    if(teamMember.role === "Engineer"){
      emp = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github);
    }
    else if(teamMember.role === "Manager"){
      emp = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.officeNumber);
    }
    else if(teamMember.role === "Intern"){
      emp = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school);
    }

    employees.push(emp);
  

  console.log("employees: ", employees);
  secondInquirer();
}

let secondInquirer = () => {
  inquirer
  .prompt([
    {
      type: "confirm",
      message: "Do you want to enter more Employees?",
      name: "moreemployees"
    }
  ])
  .then(response => {
    // if (response.moreemployees === true) {
    if (response.moreemployees === true) {
        console.log("More employees TRUE");
        initInquirer();

    }     
    else {
      console.log("No more employees!");
      createHTML(employees);
    }
  }) 
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

let createHTML = (employees) => {
  let result = renderer.render(employees);
   
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
 //create file from result
  // console.log(outputPath);

  fs.writeFile(outputPath, result, function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });

}


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
