const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeList = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const newEmployee = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'what is the name of this employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is their employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is their email address?',
            },
            {
                type: 'list',
                message: 'What is their role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then(answers => {
            if (answers.role === "Manager") {
                managerQuestions(answers);
            }

            if (answers.role === "Engineer") {
                engineerQuestions(answers);
            }
            if (answers.role === "Intern") {
                internQuestions(answers)
            }
        });
}

// Manager questions 
const managerQuestions = (manAnswers) => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'officeNumber',
                message: 'Whats their office number?',
            },
            {
                type: 'confirm',
                message: 'Do you want to add another employee?',
                name: 'next'
            },
        ])
        .then(answers => {
            managers = new Manager(manAnswers.name, manAnswers.id, manAnswers.email, answers.officeNumber);
            employeeList.push(managers);
            console.log(managers);
            if (manAnswers.next === true) {
                newEmployee();
            }
            if (manAnswers.next === false) {
                buildTeam();
            }
        })
}

// Engineer questions
const engineerQuestions = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'github',
                message: 'Whats their github username?',
            },
            {
                type: 'confirm',
                message: 'Do you want to add another employee?',
                name: 'next'
            },
        ])
        .then(engineerAnswers => {
            engineers = new Engineer(data.name, data.id, data.email, engineerAnswers.github);
            employeeList.push(engineers);
            console.log(engineers);
            if (engineerAnswers.next === true) {
                newEmployee();
            }
            if (engineerAnswers.next === false) {
                buildTeam();
            }
        })
}

// Intern questions
const internQuestions = (internAnswers) => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'school',
                message: 'Whats their school?',
            },
            {
                type: 'confirm',
                message: 'Do you want to add another employee?',
                name: 'next'
            },
        ])
        .then(internAnswers => {
            interns = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswers.school);
            employeeList.push(interns);
            console.log(interns);
            if (internAnswers.next === true) {
                newEmployee();
            }
            if (internAnswers.next === false) {
                buildTeam();
            }
        })
}
console.log(employeeList);
newEmployee();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```