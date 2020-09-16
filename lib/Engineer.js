// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getRole() {       
        return "Engineer";
    }

    getGithub() {       
        return this.github;
    }

    getengDetail() {
        return `This employee ${this.name}, is an ${this.role} with ID:${this.id} and Email is ${this.email} and GitHub: ${this.github}`;
    }
}

const newEngineer = new Engineer("Susan","432", "eng@comcast.net", "Whintzen");

// console.log(newEngineer.getengDetail());

module.exports = Engineer;