// const inquirer = require("inquirer");

function Employee (name, id, email){
    this.name = name;
    this.id = id
    this.email = email
    this.role = " "


this.getRole = function (){
    if (Employee) {
    return this.role = "Employee" 
}
// console.log(`${this.name} has the role of ${this.role}`)
}
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
}
// getId(), getEmail() 
const employee = new Employee('Obi-wan', 2,"kenobi@jedi.com")
console.log(Employee)
console.log(employee.getRole())
console.log(employee.role)
console.log(`${employee.name} has the role of ${employee.role}`)

module.exports = Employee