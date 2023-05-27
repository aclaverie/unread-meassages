import React, { useState } from 'react';
import { Button, TextField  } from '@mui/material/';


function WriteMsg(props){
    // Write message object
    // {
    //     id: 1,
    //     email: "margrette@gomech.com",
    //     message: "Hi, Kindly confirm your attendance to Thursday Meeting",
    //  }
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const msg = {
             id: props.writeCount,
             email:  email,
             message: message,  
        }
        props.writeC(prevMsg => prevMsg+1);
        const SendMsg = props.writeObj(
            (prevMsg) => {
            return([...prevMsg, msg])
        });
        setEmail('');
        setMessage('');
        return SendMsg;
    }

    return(
        <div>
            <form className="app-write">
                <div className="app-inputs">
                    <TextField 
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="app-inputs">
                    <TextField 
                        variant="outlined"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        // autoComplete="off"
                    />
                </div>
                <div className="app-inputs">
                    <Button variant="outlined" onClick={handleSubmit} type="submit" >Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default WriteMsg;