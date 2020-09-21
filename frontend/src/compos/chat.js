import React,{useState,useEffect} from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import Infobar from './Infobar'
import Messages from './messages'
import Input from './Input'
import './chat.css'
let socket
const Chat = ({location}) => {
    const [name,setName]=useState('')
    const [room,setRoom]=useState('')
    const [message,setMessage]=useState('')
    const [messages,setMessages]=useState([])
    const lhost = 'localhost:5000'
    useEffect(()=>{
        const {name,room} =  queryString.parse(location.search)
        socket=io(lhost)
        socket.emit('join',{name,room})
        setName(name);
        setRoom(room)
        console.log(socket)
    },[lhost,location.search])
    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        })
    },[messages])
    const sendMessage=e=>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    console.log(message,messages)
    return (
        <div className='outercon'>
           <div className="innercon">
                <Infobar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
           </div>
        </div>
    )
}

export default Chat
