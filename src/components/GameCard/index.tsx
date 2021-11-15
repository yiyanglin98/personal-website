import './index.css';
import { useState } from 'react';
import DecoText from '../DecoText';

function GameCard() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    return (
        <div style={{zIndex:12, width: "50%", margin: "0 auto"}}>
            
            <div style={{display: hover1 ? "inherit" : "none", position: "absolute"}}><DecoText title={false}>A flight simulator with shooting, created with Unity</DecoText></div>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px", opacity: hover1 ? 0.2 : 1}} onMouseEnter={()=> {setHover1(true)}} onMouseLeave={()=> {setHover1(false)}}>
                <source src="http://publish.illinois.edu/david-lin/files/2020/08/Screen-Recording-2020-08-02-at-11.47.00-PM.mp4" type="video/mp4" />
            </video>
            <div style={{display: hover2 ? "inherit" : "none", position: "absolute"}}><DecoText title={false}>A car chasing game, created with Unity</DecoText></div>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px", opacity: hover2 ? 0.2 : 1}} onMouseEnter={()=> {setHover2(true)}} onMouseLeave={()=> {setHover2(false)}}>
                <source src="http://publish.illinois.edu/david-lin/files/2021/11/Driving.mp4" type="video/mp4" />
            </video>
            <div style={{display: hover3 ? "inherit" : "none", position: "absolute"}}><DecoText title={false}>A movie guessing game, created with React/Django/MySQL</DecoText></div>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px", opacity: hover3 ? 0.2 : 1}} onMouseEnter={()=> {setHover3(true)}} onMouseLeave={()=> {setHover3(false)}}>
                <source src="http://publish.illinois.edu/david-lin/files/2021/11/demo_SparkVideo.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default GameCard;