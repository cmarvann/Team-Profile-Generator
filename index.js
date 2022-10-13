const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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


const promptUser = () => {
    return inquirer.prompt([
        // {
        //     message: "What is the team managers name?",
        //     name: "manager",
        //     type: "input"
        // },
        {
            message: "What is your email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is your name?",
            name: "name",
            type: "input" 
        },
        {
            message: "What is your id?",
            name: "id",
            type: "input" 
        },
    
        {
            type: 'list',
              name: 'employeeType',
              message: 'What type of employee are you? ',
              choices:
               [ 
                'Engineer',
                'Intern',
                'Manager'
            ]
            }
    
        
    ]).then(answers => {
        const employeeType = answers.employeeType
        const additionalPrompts = []
        if (employeeType ===  "Engineer") {
            additionalPrompts.push( {
                message: "What is your github?",
                name: "github",
                type: "input" 
            })
        } else if (employeeType === "Intern") {
            additionalPrompts.push( {
                message: "What is your school?",
                name: "school",
                type: "input" 
            })
         } else if (employeeType === "Manager") {
            additionalPrompts.push( {
                message: "What is your office number?",
                name: "officeNumber",
                type: "input" 
            })
        }
        //initialize
        additionalPrompts.push({
            message: "Would you like to add another employee? (Y/N)",
                name: "continue",
                type: "input" 
        })
        inquirer.prompt(additionalPrompts).then(function(additionalAnswers){
            if (employeeType ===  "Engineer") {
                 const newEngineer = new Engineer(answers.name, answers.id, answers.email, additionalAnswers.github)
                 employees.push(newEngineer)
            } else if (employeeType === "Intern") {
                const newIntern = new Intern(answers.name, answers.id, answers.email, additionalAnswers.school)
                employees.push(newIntern)
            
             } else if (employeeType === "Manager") {
                const newManager = new Manager(answers.name, answers.id, answers.email, additionalAnswers.officeNumber)
                employees.push(newManager)
            }
            if (additionalAnswers.continue === "Y") {
                 //Recursion
                promptUser()

            }else {
             
                const teamHtml = render(employees)
                fs.writeFileSync("team.html", teamHtml)
            }
        }) 

    });
  };

     promptUser()

