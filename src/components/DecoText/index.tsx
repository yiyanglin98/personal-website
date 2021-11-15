import './index.css';

function DecoText({children, title}:{children:string, title:boolean}) {
    return <h3 className="deco-text" style={{fontWeight: title ? "bolder" : "lighter", fontSize: title ? "3rem" : "2rem"}}>{children}</h3>
}

export default DecoText;