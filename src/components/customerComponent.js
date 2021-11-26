import CustomerService from "../services/customerService.js";

let customerService = new CustomerService()
console.log(customerService.load());