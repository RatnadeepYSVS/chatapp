import React from 'react'
import './Infobar.css'
const Infobar = ({room}) => {
    return (
        <div className='infoBar'>
            <div className="leftInnerConatiner">
               
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png" alt="closeIcon"/></a>
            </div>
        </div>
    )
}

export default Infobar
