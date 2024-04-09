import './Link.scss';

function handleClick(link) {
    const newpage = window.open('about:blank');
    newpage.location.href = link;
}

export default function Link(props) {
    // const image = require(props.imgsrc);
    return (
        <div className="link" onClick={() => { handleClick(props.link) }}>
            <img src={props.imgsrc} alt={props.imgalt} />
            <p>{props.name}</p>
        </div>
    )
}