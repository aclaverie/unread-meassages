import React from 'react';
import MsgBox from './msgbox';


function Messages(props){
        const msgList = props.messages.map((msg) => 
            {
                return(
                    <div key={msg.id}>
                        <MsgBox msg={msg}/>
                    </div>
                );
            }
        )

        return (msgList);
    
}

export default Messages;