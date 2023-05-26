import './App.css';
import Messages from './components/messages';

function App() {
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
        <section>
        
        </section>
        <body>
          <Messages />
        </body>
        
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
