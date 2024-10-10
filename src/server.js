const {webSocketServer} = require("ws")
const dotenv = require("dotenv")

dotenv.config

const wss = new webSocketServer({port: Process.env.PORT || 8080})

wss.on("connection", (ws)=>{
    ws.on("error", console.error)

    ws.on("message", (data)=>{
        wss.clients.forEach((client)=>client.send(data.toString()))
    })
    console.log("client connected")
})