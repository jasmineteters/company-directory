// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(githubUsername) {
        super(name, id, role, email);
        this.githubUsername = this.githubUsername;
    }
    getOfficeNumber() {

    }

    getRole() {
        return ("Engineer");
    }
}