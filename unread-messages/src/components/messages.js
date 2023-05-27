import React, { useState } from 'react';
import MsgBox from './msgbox';


function Messages(props){
        const msgList = props.messages.map((msg) => 
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