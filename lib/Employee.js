// const inquirer = require("inquirer");
class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = " ";
}

    getName(gName) {
        return this.name=gName
    }

    getId(gID) {
        return this.id=gID
    }

    getEmail(gEmail) {
        return this.email=gEmail
    }

    getRole() {
       return this.role= "Employee"
    } 
// this was wrong... don't do this..    
// if (Employee) {
//     return this.role = "Employee" 
//     }else if (class Manager{}) {
//     return this.role = "Manager"
//     } else if (class Engineer{}) {
//     return this.role = "Engineer"
//     } else return this.role = "Intern"
// };
// console.log(`${this.name} has the role of ${this.role}`)

// this.getName= function() {
//     inquirer
//     .prompt({
//         type:"input",
//         name:"title",
//         message:"What is your name?"
//     }).then(({name}) => {
//         this.name=name
//     }
//     )
};
// getId(), getEmail() 
//  const employee = new Employee('Obi-wan', 2,"kenobi@jedi.com")
// console.log(`${employee.name} has the role of ${employee.role}`)
// console.log(employee.getRole())
// console.log(`${employee.name} has the role of ${employee.role}`)
// // console.log(employee)

// console.log(employee.getName("Jedi Master Obi"))
// console.log(employee.name)
// console.log(`${employee.name} has the role of ${employee.role}`)

module.exports = Employee