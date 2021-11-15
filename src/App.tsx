import React from 'react';
import './App.css';
import DecoButton from './components/DecoButton';
import GameCard from './components/GameCard';
import DecoText from './components/DecoText';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <svg viewBox="0 0 500 300" preserveAspectRatio="xMinYMin meet" className="background-svg" style={{ zIndex:-1}}>
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
        <svg viewBox="0 0 500 300" preserveAspectRatio="xMinYMin meet" className="game-svg" style={{ zIndex:-1}}>
            <path d="M0,260 C50,200 100,0 500,100 L500,00 L0,0 Z" style={{fill: "#4a4844"}}></path>

        </svg>
        <DecoText title display>My Game Project</DecoText> 
        <p style={{margin: "0 0 30px 10px", color: "#e1b47c"}}>move cursor on any video to see more</p>
        <div style={{width: "50%", margin: "0 auto"}}>
          <GameCard 
              link="http://publish.illinois.edu/david-lin/files/2020/08/Screen-Recording-2020-08-02-at-11.47.00-PM.mp4" 
              text="flight simulator with shooting, created with Unity"/>
            <GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/Driving.mp4" 
              text="car chasing game, created with Unity"/>
            <GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/demo_SparkVideo.mp4" 
              text="movie guessing game, created with React/Django/MySQL"/>
            <GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/cg.mp4" 
              text="flight simulator and terrain generation, created with WebGL"/>
        </div>
      </div>      
    </div>
  );
}

export default App;
