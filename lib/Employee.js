// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, role, email, githubUsername) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the employee ID.");
        }
        if (!role) {
            throw new Error("You are missing the role.");
        }
        if (!email) {
            throw new Error("You are missing the email address.");
        }
        this.name = name
        this.id = id
        this.role = role
        this.email = email
    }
}

module.exports = Employee;