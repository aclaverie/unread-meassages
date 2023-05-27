import React from 'react';
import Button from '@mui/material/Button';


function Compose(props){
    return(
        <div className="app-compose">
            <Button variant="outlined" onClick={props.handleClick}>Compose +</Button>
        </div>
    );
}

export default Compose;