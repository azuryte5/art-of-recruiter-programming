const inquirer = require('inquirer')
const fs = require('fs')

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
            message: "What is the mangers Id number?"
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
    .then(data =>{
        console.log(data)
    })