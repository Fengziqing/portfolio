import './VerticalRectangle.scss';

export default function VerticalRectangle(props) {
    const { imgsrc, imgalt } = props;

    if (props.alt === '') {
        return (
            <div className="vertical-rectangle">
                <img src={imgsrc} alt='Aphoto'/>
            </div>
        )
    } else {
        //spcialized vertical rectangle
        return (
            <div className="vertical-rectangle">
                <div className="img-background-color"></div>
                <img src={imgsrc} alt={imgalt} />
                <p>Software Engineer</p>
                <p>Frontend Developer</p>
                <p>Full-stack<br />Developer</p>
                <p>Client Engineer</p>
            </div>
        )
    }
}