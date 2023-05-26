import React from 'react';

function MsgBox(props){
    return(
        <>
            <div>{props.msg.email}</div>
            <div>{props.msg.message}</div>
        </>
    )
}

export default MsgBox;