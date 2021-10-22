const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.role = " "
    this.officeNumber= officeNumber
}
    getRole() {
        return this.role = "Manager"
    }
}
// Object.create(Employee.prototype)

// const captain = new Manager ("Mal" , 2, "niceguy@browncoat.com", 101)
// console.log(`${captain.name} has the role of ${captain.role}`)
// console.log(captain)
// console.log(captain.getRole())
// // console.log(captain.name)
// // console.log(Manager.getRole())
// console.log(`${captain.name} has the role of ${captain.role}`)
    module.exports = Manager