// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;               
        this.email = email;
        this.role = "Employee"; 
    }

    getName() {
        // return `This employee ${this.name}, with ID:${this.id} and Email is ${this.email}`;
        return this.name;
    }
    getId() {        
        return this.id;
    }
    getEmail() {       
        return this.email;
    }
    getRole() {       
        return this.role;
    }
    
}

// const newName = new Employees("${this.name}", "${this.ID", "${this.Email}");
const newEe = new Employee("Wendy", "555", "wpah@comcast.net");


// console.log(newEe.teamName());
// console.log(newEe.geteeDetail());

module.exports = Employee;