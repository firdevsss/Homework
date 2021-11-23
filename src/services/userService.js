import { users } from "../data/users.js"

export default class UserService{

    constructor(loggerService){
        this.employees=[]
        this.customers= []
        this.loggerService = loggerService
    }

    add(user){
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }
    getById(id){
        //return this.users.find(u=>u.id ==id)
    }

}