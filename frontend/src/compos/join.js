import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './join.css'
const Join = () => {
    const [name,setName]=useState('')
    const [room,setRoom]=useState('')
    return (
        <div className='outer'>
            <div className="inner">
                <h1 className="head">Join</h1>
                <div><input type="text" value={name} onChange={e=>setName(e.target.value)} className='joinin'/></div>
                <div><input type="text" value={room} onChange={e=>setRoom(e.target.value)} className='joinin mt-20'/></div>
                <Link to={`/chat?name=${name}&room=${room}`} onClick={e=>(!name||!room)?e.preventDefault():null}>
                    <button className="btn mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
