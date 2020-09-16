// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getRole() {       
        return "Intern";
    }

    getSchool() {       
        return this.school;
    }

    getintDetail() {
        return `This employee ${this.name}, is an ${this.role} with ID:${this.id} and Email is ${this.email} and School: ${this.school}`;
    }
}
const newIntern = new Intern("Liam", "526", "liam@comcast.net", "Rutgers");

// console.log(newIntern.getintDetail());

module.exports = Intern;