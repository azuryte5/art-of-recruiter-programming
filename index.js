const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template');
const Manager = require('./lib/Manager')

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
            message: "What is the manager's ID number?"
        },
        {  
            type:"input",
            name:"email",
            message: "Provide a valid e-mail address?"
        },
        {
            type:"input",
            name:"office",
            message: "What is the managers Office number?"
        }]);
};

askManager()
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office)
        console.log(manager.name)
        manager.getRole()
        manager.getEmail(data.email)
        manager.getId(data.id)
        manager.getName(data.name)
        console.log(manager.role)
        const answers = generatePage(manager);
        console.log(manager)
        fs.writeFile('./dist/index.html', answers, err=> {
        if (err) throw new Error (err);

        console.log("Success!")
        })
     }) 
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