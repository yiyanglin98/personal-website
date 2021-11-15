import './index.css';

function DecoText({children, title, display}:{children:string, title:boolean, display:boolean}) {
    return <h3 className="deco-text" style={{fontWeight: title ? "bolder" : "lighter", fontSize: title ? "3rem" : "2rem"}}>{children}</h3>
}

export default DecoText;