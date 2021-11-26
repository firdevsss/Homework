export  class Baselogger{
    log(data){
        console.log("default logger:"+data)
    }
}
export  class Elasticlogger extends Baselogger{
    log(data){
        console.log("logged to elastic"+ data)
    }
}
export  class MongoLogger extends Baselogger{
    log(data){
        console.log("logged to mongo"+ data)
    }
}