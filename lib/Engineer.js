const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name)
        this.github = github
    }
}
console.log(Engineer)
module.exports =Engineer