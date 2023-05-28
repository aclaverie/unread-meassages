import React from 'react';

function Top(props){
    console.log(props.count);
    const hasAMessage = (props.count === 0) 
    ? "You're all caught up." 
    : ((props.count > 1)    
        ? `You have ${props.count} messages` 
        : `You have ${props.count} message`)
    console.log(hasAMessage);
    return(
        <div className='app-in-top'>
            <h5> {hasAMessage} </h5>
        </div>
    )
}

export default Top;