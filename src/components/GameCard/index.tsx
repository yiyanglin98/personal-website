import './index.css';
import DecoText from '../DecoText';

function GameCard({link, text}:{link:string, text:string}) {

    return (
        <div className="flex flex-col">
            <div style={{fontStyle: "italic", left: 0}}><DecoText title={false} display>{text}</DecoText></div>
            <video className="filter grayscale blur-sm contrast-200 hover:filter-none" height="auto" width="520" autoPlay muted loop style={{borderRadius: "20px", margin: "25px 100px 25px 100px"}}>
                <source src={link} type="video/mp4" />
            </video>
        </div>
    )
}

export default GameCard;