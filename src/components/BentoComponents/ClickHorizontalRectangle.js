import './ClickHorizontalRectangle.scss';

export default function ClickHorizontalRectangle(props){
    return (
        <div className="click-horizontal-rectangle">
            <img src={props.imgsrc} alt={props.imgalt}/>
            <div className='task-description'>
            <p>{props.title}</p>
            <div></div>
            </div>
        </div>
    )
}