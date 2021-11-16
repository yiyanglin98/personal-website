import './index.css';
import { useState } from 'react';
import DecoText from '../DecoText';

function GameCard({link, text}:{link:string, text:string}) {
    const [hover, setHover] = useState(false);

    return (
        <div>
            <div style={{display: hover ? "inherit" : "none", position: "absolute", fontStyle: "italic", left: 0}}><DecoText title={false} display>{text}</DecoText></div>
            <video height="auto" width="520" autoPlay muted loop style={{borderRadius: "20px", margin: "25px 100px 25px 100px", opacity: hover ? 0.2 : 1}} onMouseEnter={()=> {setHover(true)}} onMouseLeave={()=> {setHover(false)}}>
                <source src={link} type="video/mp4" />
            </video>
        </div>
    )
}

export default GameCard;