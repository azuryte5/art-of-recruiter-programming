const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { validate } = require('@babel/types');

let roster = []


const askManager = () => {
        return inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message: "Who is the manager on this team?"
        },
        {
            type:"input",
            name:"id",
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput >= 0) {return true;
                } else {console.log("Please enter a valid number!")
            return false;
            }}
        },
        {  
            type:"input",
            name:"email",
            message: "Provide a valid e-mail address?"
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
        console.log(choice.loop)

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
            console.log("Success!");
        })}});
        };
    
const askEngineer = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Engineer's name",
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
            message: "Provide this Engineers e-mail address?"
        },{
            type: "input",
            name: "github",
            message: "What is this Engineers github username?"
        }
    ]).then(member =>{
        const engineer = new Engineer (member.name, member.id, member.email, member.github);
        engineer.getRole();
        roster.push(engineer);
        // console.log(roster)
        askNextMember();
    })
}

const askIntern = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Intern's name",
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
            message: "Provide this Interns e-mail address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is this Interns school name?"
        },
    ]).then(member =>{
        const intern = new Intern (member.name, member.id, member.email, member.school);
        intern.getRole();
        roster.push(intern);
        // console.log(roster)
        askNextMember();
})}
askManager()
// askNextMember()
    // .then(data => {
    //     // const manager = new Manager(data.name, data.id, data.email, data.office)
    //     console.log(roster)
    //     console.log(data)
    //     // manager.getRole()
    //     // manager.getEmail(data.email)
    //     // manager.getId(data.id)
    //     // manager.getName(data.name)
    //     // console.log(manager.role)
    //     const answers = generatePage(roster);
    //     // console.log(manager)
    //     fs.writeFile('./dist/index.html', answers, err=> {
    //     if (err) throw new Error (err);

    //     console.log("Success!")
    //     })
    //  }) 
    // .then(data => {
    //     const answers = generatePage(data);
    //     console.log(data)
    //     fs.writeFile('./dist/index.html', answers, err=> {
    //     if (err) throw new Error (err);

    //     console.log("Success!")
    //     })
    // })
    // .then(({ name }) => {
    //     const manager = new Manager(name)
    //     console.log(manager.name)
    //     console.log(manager.role)
    // } )