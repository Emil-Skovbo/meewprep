console.log("test this")
console.log(process.platform)

const { EventEmitter} = require("events")
const eventEmitter = new EventEmitter()

eventEmitter.on("lunch",()=>{

    console.log("yummy")
})
eventEmitter.emit("lunch")
eventEmitter.emit("lunch")

app.get("/",)