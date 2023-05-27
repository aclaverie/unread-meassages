import React from 'react';

function Top(props){
    return(
        <div className='app-in-top'>
            <h5>{`You have ${props.count} new Message`}</h5>
        </div>
    )
}

export default Top;