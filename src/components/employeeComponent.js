import {users} from "../data/users.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService();
console.log(employeeService.list())
console.log(employeeService.load())
