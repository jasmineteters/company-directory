// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, title, email, githubUsername) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the employee ID.");
        }
        if (!title) {
            throw new Error("You are missing the title.");
        }
        if (!email) {
            throw new Error("You are missing the email address.");
        }
        if (!githubUsername) {
            throw new Error("You are missing the github username.");
        }
        this.name = name
        this.id = id
        this.title = title
        this.email = email
        this.githubUsername = githubUsername
    }
}