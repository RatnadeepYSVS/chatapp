import React from 'react'
import ReactEmoji from 'react-emoji'
import './message.css'
const Message = ({message:{user,text},name}) => {
    let isCurUser=false
    const trimname=name.trim().toLowerCase()
    if(user===trimname){ 
        isCurUser=true
    }
    return (
        <div>
            {
                isCurUser?(
                    <div className="messageContainer justifyEnd">
                      <p className="sentText pr-10">{trimname}</p>
                      <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                      </div>
                    </div>
                    )
                    : (
                      <div className="messageContainer justifyStart">
                        <div className="messageBox backgroundLight">
                          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                        </div>
                        <p className="sentText pl-10 ">{user}</p>
                      </div>
                    )
            }            
        </div>
    )
}

export default Message
