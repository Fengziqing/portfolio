import './ClickHorizontalRectangle.scss';

export default function ClickHorizontalRectangle(props) {
    const { imgsrc, imgalt, title, backgroundColor, description } = props;
    const screenshot = 'https://api.apiflash.com/v1/urltoimage?access_key=0fd0abc22ea2401e8d8ab35db4e55d27&wait_until=page_loaded&url=https://ziqingfeng.vercel.app/Demo/DemoPage/' + imgsrc;
    if (imgsrc === '') {
        return (
            <div className="click-horizontal-rectangle" style={{ backgroundColor: '#F0EAE0' }}>
                <img></img>
                <div className='task-description'>
                    <p>developing block</p>
                    <div className='description'>place holder for testing, nothing here, if you have any ideas, please contact me!</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="click-horizontal-rectangle" style={{ backgroundColor: backgroundColor }}>
                <img src={screenshot} alt={imgalt} />
                <div className='task-description'>
                    <p>{title}</p>
                    <div className='description'>{description}</div>
                </div>
            </div>
        )
    }
}