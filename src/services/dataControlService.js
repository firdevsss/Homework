import { users } from "../data/users.js"
import DataError from "./dataError.js"

export default class DataControlService{
    constructor(userService , customerService , employeeService){
        this.errors = []
        this.userService = userService
        this.customerService = customerService
        this.employeeService = employeeService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "user":
                    this.userService.add(user)
                    break;
                case "customer":
                    this.customerService.add(user)
                    break;
                case "employee":
                    this.employeeService.add(user)
                    break;
                default:
                    return new DataError("Wrong user type", user)
                    break;
            }
        }
    }
}