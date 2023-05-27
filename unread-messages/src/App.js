import './App.css';
import Messages from './components/messages';
import Top from './components/top';
import Compose from './components/compose';
import msgData from './components/msgData';
import {useState} from 'react';

function App() {
  const [msgs, setMsgs] = useState(msgData)
  const [newMsg, setNewMsg] = useState([]);
  const [compose, setCompose] = useState(true);
  
  function addNewMessage(){
    // console.log("Composed clicked!")
    setMsgs(prevMsg => 
      [...prevMsg, newMsg]
    )
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
            <li className='app-li'>Inbox</li>
            <li className='app-li'>Sent</li>
            <li className='app-li'>Junk</li>
            <li className='app-li'>Trash</li>
            <li className='app-li'>Compose</li>
          </ul>
        </section>
        <section className="app-body">
          <div className="app-top">
            {compose && <Compose handleClick={addNewMessage} />}
            <Top count={newMsg.length} />
          </div>
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
