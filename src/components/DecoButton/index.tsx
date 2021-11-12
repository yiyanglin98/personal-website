import './index.css';

function DecoButton({link, newPage, text}:{link:string, newPage: boolean, text: string}) {
    return <a href={link} target={newPage ? "_blank" : "_self"} rel="noopener noreferrer" className="defaultButton">{text}</a>
}

export default DecoButton;