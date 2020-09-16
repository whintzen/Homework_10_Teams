// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole() {       
        return "Manager";
    }

    getOfficeNumber() {       
        return this.officeNumber;
    }

    getmgrDetail() {
        return `This employee ${this.name}, is a ${this.role} with ID:${this.id} and Email is ${this.email} and Office Number is ${this.officeNumber}`;
    }
}

const newManager = new Manager("Brian", "567", "offm@comcast.net", "549");

// console.log(newManager.getmgrDetail());

module.exports = Manager;