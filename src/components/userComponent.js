import UserService from "../services/userService.js"
import User from "../models/user.js"
import { Baselogger, Elasticlogger } from "../crossCuttingConcerns/logging/logger.js"

console.log("user component yüklendi")

let logger1 = new Elasticlogger(logger1)
let userService = new UserService(logger1)

let user1= new User(1,"hmz","kedkesi","sivas",);
let user2= new User(2,"majin","boo","çikolata");
userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))
console.log(userService.add)




userService.getById(1)
userService.list()



//prototyping
let customer = {id:1, firstName:"hmz"}

 customer.lastName = "kedkesi"
 console.log(customer.lastName)
