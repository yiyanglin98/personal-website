import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path d="M0,260 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{fill: "#f3e0cc", zIndex: -1}}></path>
          
        </svg>
        <header className="App-header">
          <h1>
            Hi! I am Yiyang Lin
          </h1>
          <h2>
            You can just call me David
          </h2>
          <h2>
            I am a MCS at UIUC
          </h2>
        </header>
      </div>
      {Array.from({length: 25}, (_, index) => index + 1).map((i) => {
        return <header className="App-header" style={{opacity: 0.2, fontSize: `${i}vw`}}>
        <h1 style={{opacity: 0.2, fontSize: `${0.5*i}vw`}}>
          Hi! 
        </h1>
       
      </header>
      })}
            
    </div>

    
  );
}

export default App;
