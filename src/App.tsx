import React from 'react';
import './App.css';
import DecoButton from './components/DecoButton';
import GameCard from './components/GameCard';
import DecoText from './components/DecoText';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <svg viewBox="0 0 500 300" preserveAspectRatio="xMinYMin meet" className="background-svg" style={{ zIndex:-1}}>
          <path d="M0,260 C150,200 350,0 500,200 L500,00 L0,0 Z" style={{fill: "#f3e0cc"}}></path>
          
        </svg>
        <header>
        {/* {Array.from({length: 18}, (_, index) => index + 1).map((i) => {
        return <header className="App-header" style={{opacity: 0.1, position: "absolute"}}>
        <h1 style={{fontSize: `${0.5*i}vw`}}>
          Hi! 
        </h1>
       
      </header>
      })} */}
          <h1>
            Hi! <br/>I am Yiyang Lin
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

        <div>
          <DecoText title display>Projects</DecoText> 
          <p style={{margin: "0 0 30px 40px", color: "#798153"}}>move cursor on any video to see more</p>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <ProjectCard 
                link="http://publish.illinois.edu/david-lin/files/2021/11/MovieHub1.png" 
                text="A web app created with React for the frontend, Django for the backend and MongoDB/MySQL as the databases"
                title="MovieHub"/>
          <ProjectCard 
                link="http://publish.illinois.edu/david-lin/files/2021/11/CT1.png" 
                text="A video lecture platform built with React and .NET, used by students at UIUC for more than 30 courses. Worked on transcriptions editing, caption searching, new course creation and video embedding features/pages"
                title="ClassTranscribe"/>
        </div>

        <DecoText title display>Game-related Projects</DecoText> 
        
        <div className="grid grid-rows-4 gap-1">
          <div className="inline-block"><GameCard 
              link="http://publish.illinois.edu/david-lin/files/2020/08/Screen-Recording-2020-08-02-at-11.47.00-PM.mp4" 
              text="fighter aircraft simulator with shooting, created with Unity"/></div>
          <div className="inline-block"><GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/Driving.mp4" 
              text="car chasing game, created with Unity"/></div>
          <div className="inline-block"><GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/demo_SparkVideo.mp4" 
              text="movie guessing game, created with React/Django/MySQL"/></div>
          <div className="inline-block"><GameCard 
              link="http://publish.illinois.edu/david-lin/files/2021/11/cg.mp4" 
              text="flight simulator and terrain generation, created with WebGL"/></div>
          
            
            
            
        </div>
      </div>      
    </div>
  );
}

export default App;
