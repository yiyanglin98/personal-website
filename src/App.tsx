import React from 'react';
import './App.css';
import DecoButton from './components/DecoButton';
import GameCard from './components/GameCard';
import DecoText from './components/DecoText';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className="background-svg">
          <path d="M0,260 C150,200 350,0 500,200 L500,00 L0,0 Z" style={{fill: "#f3e0cc"}}></path>
          
        </svg>
        <header>
        {Array.from({length: 18}, (_, index) => index + 1).map((i) => {
        return <header className="App-header" style={{opacity: 0.1, position: "absolute"}}>
        <h1 style={{fontSize: `${0.5*i}vw`}}>
          Hi! 
        </h1>
       
      </header>
      })}
          <h1>
            Hi! <br/><br/>I am Yiyang Lin
          </h1>
          <h2>
            You can just call me David
          </h2>
          <h2>
            I am a <DecoButton link="https://cs.illinois.edu/academics/graduate/professional-mcs/campus-master-computer-science" newPage={true} text="MCS"/> student at UIUC
          </h2>
        </header>
      </div>

      
      <div className="projects-container" style={{backgroundColor:"#4a4844"}}>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className="game-svg">
          <path d="M0,260 C150,200 350,0 500,200 L500,00 L0,0 Z" style={{fill: "#4a4844"}}></path>

      </svg>
      <DecoText title>My Game Project</DecoText> 
      {/* margin: 10px 10px 10px 10px;
    color: #e1b47c;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.5px;
    font-weight:bolder;
    font-size: 3rem; */}
      <p style={{margin: "0 0 0 10px", color: "#e1b47c"}}>move cursor on any video to see more</p>
        <GameCard />
      </div>      
    </div>
  );
}

export default App;
