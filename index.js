const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { validate } = require('@babel/types');

//team member objects will be added to array roster 
let roster = []

// askManager runs and asks who team lead is
const askManager = () => {
        return inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message: "Who is the manager on this team?",
            validate: nameInput =>{
                if (nameInput.length <= 20 && nameInput.length > 0) {return true}
                else {console.log("Please choose a better name!")}
            }
        },
        {
            type:"input",
            name:"id",
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput >= 0) {return true
                } else {console.log("Please enter a valid number!")
            return false;
            }}
        },
        {  
            type:"input",
            name:"email",
            message: "Provide a valid e-mail address?",
            validate: emailInput => {
                if (emailInput.endsWith(".com") ) {return true}
                else {console.log("Doesn't look like an e-mail try again")}
            }
        },
        {
            type:"input",
            name:"office",
            message: "What is the managers Office number?",
            validate: officeInput => {
                if (officeInput >= 0) {return true;
                } else {console.log("Please enter a valid number!")
            return false;
            }}
        }
    ]).then(member => {
        const manager = new Manager(member.name, member.id, member.email, member.office)
        manager.getRole()
        roster.push(manager);
        // console.log(roster)
        askNextMember()
    })
};

// askNextMember() will ask who is the next to be added if any
const askNextMember = () => {
    return inquirer
    .prompt([
        {
            type:"list",
            name:"loop",
            message: "What type of team member do you want to add next?",
            choices:['Engineer', 'Intern', 'No other members'],
        }
    ]).then(choice =>{
        // console.log(choice.loop)
        switch(choice.loop) {
        case 'Engineer':
            console.log("You want an engineer next");
            askEngineer();
            break;

        case 'Intern':
            console.log("You want an intern next");
            askIntern();
            break;

        case 'No other members': 
            console.log("You want to leave loop");
            console.log(roster);
            const answers = generatePage(roster);
            fs.writeFile('./dist/index.html', answers, err=> {
            if (err) throw new Error (err);
            console.log("Your team has been generated on index.html!");
        })}});
        };

// If engineer is being added next, run AskEngineer() and add to team and run askNextMember() again
const askEngineer = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Engineer's name",
            validate: nameInput =>{
                if (nameInput.length <= 20 && nameInput.length > 0) {return true}
                else {console.log("Please choose a better name!")}
            }
        },
        {
            type:"input",
            name:"id",
            message: "What is this Engineer's ID number?",
            validate: idInput => {
                if (idInput >= 0) {return true;
                } else {console.log("Please enter a valid number!")
            return false;
            }}
        },
        {
            type:"input",
            name:"email",
            message: "Provide this Engineers e-mail address?",
            validate: emailInput => {
                if (emailInput.endsWith(".com") ) {return true}
                else {console.log("Doesn't look like an e-mail try again")}
            }
        },{
            type: "input",
            name: "github",
            message: "What is this Engineers github username?",
            validate: githubInput =>{
                if (githubInput.length <= 20 && githubInput.length > 0) {return true}
                else {console.log("Please choose a better name!")}
            }
        }
    ]).then(member =>{
        const engineer = new Engineer (member.name, member.id, member.email, member.github);
        engineer.getRole();
        roster.push(engineer);
        // console.log(roster)
        askNextMember();
    })
}

// If Intern was picked, build a Intern object and askNextMember() again
const askIntern = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Intern's name",
            validate: nameInput =>{
                if (nameInput.length <= 20 && nameInput.length > 0) {return true}
                else {console.log("Please choose a better name!")}
            }
        },
        {
            type:"input",
            name:"id",
            message: "What is this Interns's ID number?",
            validate: idInput => {
                if (idInput >= 0) {return true;
                } else {console.log("Please enter a valid number!")
            return false;
            }}
        },
        {
            type:"input",
            name:"email",
            message: "Provide this Interns e-mail address?",
            validate: emailInput => {
                if (emailInput.endsWith(".com") ) {return true}
                else {console.log("Doesn't look like an e-mail try again")}
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is this Interns school name?",
            validate: schoolInput =>{
                if (schoolInput.length <= 20 && schoolInput.length > 0) {return true}
                else {console.log("Please choose a better name!")}
            }
        },
    ]).then(member =>{
        const intern = new Intern (member.name, member.id, member.email, member.school);
        intern.getRole();
        roster.push(intern);
        // console.log(roster)
        askNextMember();
})}

// runs first series of questions
askManager()
