const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRole() {
        return this.role = "Engineer"
    }
    getGithub() {
        return this.github
    }
}
// const firefly = new Engineer("Kaylee Frye", 4, "irepair@serenity.com", "kayleeF")
// console.log(Engineer)
// console.log(firefly)
// console.log(firefly.role)
module.exports =Engineer