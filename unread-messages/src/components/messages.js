import React, { useState } from 'react';
import MsgBox from './msgbox';

function Messages(){
    const [msgs, setMsgs] = useState([
        {
            id: 1,
            email: "margrette@gomech.com",
            message: "Hi, Kindly confirm your attendance to Thursday Meeting",
         },
         {  
            id: 2,
            email: "lennox@gomech.com",
            message: "Call Jim for Engineering Specifications",
          },
          { 
            id: 3,
            email: "jerry.charles@farradaysystem.com",
            message: "The upgrade is performing well, our next review will be this Friday 24th Sept, 2023",
          }
        ])

        const msgList = msgs.map((msg) => 
            {
                return(
                    <div>
                        <MsgBox msg={msg}/>
                    </div>
                );
            }
        )

        return (msgList);
    
}

export default Messages;