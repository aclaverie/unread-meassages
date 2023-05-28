import React from 'react';

function MsgBox(props){
    return(
        <div key={props.msg.id} className="app-msg" style={{width: "720px"}}>
            <p><strong>Sender</strong>: {props.msg.email}</p>
            <p><strong>Message</strong>: {props.msg.message}</p>            
        </div>
    )
}

export default MsgBox;