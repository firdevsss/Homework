import CustomerService from "./services/customerService";
import DataControlService from "./services/DataControlService";
import EmployeeService from "./services/employeeService";
import UserService from "./services/userService";

let customerService = new CustomerService();
let employeeService = new EmployeeService();
let userService = new UserService();

let dataControlService = new DataControlService(userService,customerService,employeeService)
dataControlService.load()

console.log(userService.list())
console.log(employeeService.list())
console.log(customerService.list())


