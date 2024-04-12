import './ClickHorizontalRectangle.scss';

export default function ClickHorizontalRectangle(props){
    const {imgsrc,imgalt,title} = props;
    const screenshot = 'https://api.apiflash.com/v1/urltoimage?access_key=0fd0abc22ea2401e8d8ab35db4e55d27&wait_until=page_loaded&url=https://ziqingfeng.vercel.app/Demo/DemoPage/&crop=10,20,50,100' + imgsrc;
    return (
        <div className="click-horizontal-rectangle">
            <img src={screenshot} alt={imgalt}/>
            <div className='task-description'>
            <p>{title}</p>
            <div className='description'>React - useState Hook, HTML, CSS, Responsible Web Development</div>
            </div>
        </div>
    )
}