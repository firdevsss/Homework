export default class EmployeeService{
    constructor(){
        this.employees = []

    }
    add(user) {
        if (this.validateEmployee(user)) {
            this.employees.push(user)
        }
    }
    list() {
        return this.employees;
    }

    getById(id) {
        return this.employees.find(i => i.id === id)
    }
    validateEmployee(user) {
        let requiredFields = "id firstName lastName age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${field}`, user))
            }
        }
        return hasErrors
    }
}