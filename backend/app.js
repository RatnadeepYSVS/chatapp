const express = require('express')
const cors = require('cors')
const socketio = require('socket.io')
const http = require('http')
const app = express()
const {addUser,removeUser,getUser,getUsersInRoom}=require('./users')
const server= http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT||5000
app.use(express.json())
app.use(cors())
app.use(require('./router'))
io.on('connection',(socket)=>{
    socket.on('join',({name,room})=>{
        const {error,user}=addUser({id:socket.id,name,room})
        if(error)return error
        socket.emit('message',{user:'admin',text:`${user.name} Welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message',{text:`${user.name} has arrived to the room ${user.room}`})   
        socket.join(user.room)
    })
    socket.on('sendMessage',(message,callback)=>{
            const user = getUser(socket.id)
            io.to(user.room).emit('message',{user:user.name,text:message})
            callback()
    })
    socket.on('disconnect',()=>{
        const user = removeUser(socket.io)
        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left the room`})
        }
    })
})
server.listen(PORT,()=>{
    console.log(`Server at ${PORT}`)
})
