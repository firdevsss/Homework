import UserService from "../services/userService.js"
import User from "../models/user.js"
import customer from"../models/customer.js"
import employee from"../models/employee.js"
import { Baselogger, Elasticlogger } from "../crossCuttingConcerns/logging/logger.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"

let userService = new UserService();
let customerService = new CustomerService();
let employeeService = new EmployeeService();
console.log("user component uploaded ")
console.log(customerService.customers)
//userService.load()
//console.log(userService.errors)
//let user = new User(1, "firdevs", "inal", 17, 2004, "inalfirdevs@1222", 109999);
//console.log(userService.users)


//userService.add(user)
//userService.getById(1);
//userService.list();

//let customer = { id: 1, name: "firdevs" }

//customer.lastName = "inal"
//console.log(customer.lastName)
