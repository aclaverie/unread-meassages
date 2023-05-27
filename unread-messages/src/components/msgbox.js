import React from 'react';

function MsgBox(props){
    return(
        <div key={props.msg.id} className="app-msg" style={{width: "720px"}}>
            <p>Sender: {props.msg.email}</p>
            <p>Message: {props.msg.message}</p>            
        </div>
    )
}

export default MsgBox;