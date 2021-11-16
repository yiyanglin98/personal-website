import './index.css';
import DecoText from '../DecoText';

function GameCard({link, text}:{link:string, text:string}) {

    return (
        <div className="flex flex-col">
            <div style={{fontStyle: "italic", left: 0}}><DecoText title={false} display>{text}</DecoText></div>
            <video className="rounded w-1/2 m-20 filter grayscale blur-sm contrast-200 hover:filter-none" autoPlay muted loop>
                <source src={link} type="video/mp4" />
            </video>
        </div>
    )
}

export default GameCard;