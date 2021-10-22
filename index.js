const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template');

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
        const answers = generatePage(data);
        console.log(data)
        fs.writeFile('./dist/index.html', answers, err=> {
        if (err) throw new Error (err);

        console.log("Success!")
        })
    })