const express = require("express")
const app = express()
const http = require("http").Server(app)
const io =require("socket.io")(http,{
  cors: {origin:"*"}
})

// DB
const userObj = {
  id:0,
  name:"",
  avatarUrl:"",
  chats:[]
}

const Chats = []

const typing ={}


io.on("connection",(socket)=>{
  console.log("we are connected")
  socket.on("joinChat",(user)=>{
    userObj[socket.id] = {
      id:socket.id,
      name: user.name,
      avatarUrl:user.avatar
    }
    chats.push([userObj[socket.id]])
    socket.broadcast.emit("joinChat", user[socket.id])


  })

  socket.on("typing",()=>{

    typing[socket.id] = 1

    socket.broadcast.emit("typing",{
      user:userObj[socket.id].name,
      typing:Object.keys(typing).length
    })

  })

  socket.on("stopTyping", ()=>{
    delete typing[socket.id]

    socket.broadcast.emit("stopTyping",Object.keys(typing).length)
  })


  socket.on("message",(message)=>{
    //front end to send us message here //
    console.log(message)
    

    //multiple clients listen
    io.emit ("message",`${socket.id}  said ${message}`)


  })


})


app.listen (9091,()=>{
  console.log("listening on port 9091")
})