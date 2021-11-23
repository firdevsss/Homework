export default class CustomerService{
    constructor(){
        this.customers= []
    }
    add(user){
        if(this.ValidateCustomer(user)&& this.ValidateCustomerAge(user)){
            this.customers.push(user)
        }
    }
    list() {
        return this.customers;
    }
    getById(id) {
        return this.customers.find(i => i.id === id)
    }
    getSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1["firstName"] < customer2["firstName"]) {
                return -1
            } else if (customer1["firstName"] === customer2["firstName"]) {
                return 0
            } else {
                return 1
            }
        })
    }
    validateCustomerAge(user){
        if (Number.isNaN(Number.parseInt(user.age))) {
            return new DataError(`Validation problem. ${user.age} is not a number`, user)
        }
        return true;
    }
    validateCustomer(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                return new DataError(`Validation problem. ${field} is required`, user)
            }
        }

        return hasErrors
    }
}