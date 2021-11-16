import './index.css';
import { useState } from 'react';
import DecoText from '../DecoText';

function ProjectCard({link, text, title}:{link:string, text:string, title: string}) {
    const [hover, setHover] = useState(false);

    return (
        <div>
            <DecoText title display>{title}</DecoText>
            <div style={{display: hover ? "inherit" : "none", position: "absolute", fontStyle: "italic"}}><DecoText title={false} display>{text}</DecoText></div>
            <img src={link}></img>
        </div>
    )
}

export default ProjectCard;