import './index.css';
import DecoText from '../DecoText';

function ProjectCard({link, text, title}:{link:string, text:string, title: string}) {

    return (
        <div className="flex flex-col ">
            <DecoText title display>{title}</DecoText>
            <DecoText title={false} display>{text}</DecoText>
            <img className="rounded w-1/2 m-20 filter grayscale blur-sm contrast-200 hover:filter-none" src={link} alt={title} ></img>
        </div>
    )
}

export default ProjectCard;