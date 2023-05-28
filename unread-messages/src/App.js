import './App.css';
import Messages from './components/messages';
import Top from './components/top';
import Compose from './components/compose';
import WriteMsg from './components/writemsg';
import msgData from './components/msgData';
import ClickMe from './components/ClickCount';
import HoverMe from './components/HoverCount';
import {useState} from 'react';
import Badge from '@mui/material/Badge';

function App() {
  const [msgs, setMsgs] = useState(msgData)
  const [newMsg, setNewMsg] = useState(0);
  const [compose, setCompose] = useState(false);
  const [open, setOpen] = useState(false);
  
  
  function openWrite(){
    setOpen(prevOpen => !prevOpen);
    setCompose(prevCompose => !prevCompose);    
  }


  return (

    <div className="App">
      <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/newmsg_logo.png'}
                  alt="Render Logo" width="200px" />
          </div>
          <div className="App-title">
            
          </div>
        </div>
        <div className="head-right">
          React Project - 8<br />
          React Conditional Rendering
        </div>
      </header>
      
      <main className="container">
        <section className="app-side">
          <ul className='app-ul'>
            <li className='app-li'>
              Inbox
              <Badge 
                
                className='badge'
                badgeContent={newMsg} 
                color="primary" />
            </li>
            <li className='app-li'>Sent</li>
            <li className='app-li'>Junk</li>
            <li className='app-li'>Trash</li>
            <li className='app-li'>Compose</li>
          </ul>
          <section >
            <ClickMe />
            <HoverMe />
          </section>
        </section>
        <section className="app-body">
          <div className="app-top">
            <Compose handleClick={openWrite} sign={open} />
            <Top count={newMsg} />
          </div>
          {compose && <WriteMsg writeC={setNewMsg} writeObj={setMsgs} writeCount={msgs.length + 1} />}
          <Messages messages={msgs}/>
        </section>
        
      </main>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
