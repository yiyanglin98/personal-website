import './index.css';
import { useState } from 'react';
function GameCard() {
    const [hover1, setHover1] = useState(false);
    return (
        <div style={{zIndex:12, width: "50%", margin: "0 auto"}}>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px"}}>
                <source src="http://publish.illinois.edu/david-lin/files/2020/08/Screen-Recording-2020-08-02-at-11.47.00-PM.mp4" type="video/mp4" />
            </video>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px"}}>
                <source src="http://publish.illinois.edu/david-lin/files/2021/11/Driving.mp4" type="video/mp4" />
            </video>
            <video height="auto" width="500" autoPlay muted loop style={{margin: "25px 100px 25px 100px"}}>
                <source src="http://publish.illinois.edu/david-lin/files/2021/11/demo_SparkVideo.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default GameCard;