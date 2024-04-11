import './ClickHorizontalRectangle.scss';

export default function ClickHorizontalRectangle(props){
    const {imgsrc,imgalt,title} = props
    return (
        <div className="click-horizontal-rectangle">
            <img src={imgsrc} alt={imgalt}/>
            <div className='task-description'>
            <p>{title}</p>
            <div className='description'>React - useState Hook, HTML, CSS, Responsible Web Development</div>
            </div>
        </div>
    )
}