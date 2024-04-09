import './HorizontalRectangle.scss';

export default function HorizontalRectangle(props) {
    if (!props.isframe) {
        return (
            <div className="horizontal-rectangle">
                <img src={props.imgsrc} alt={props.imgalt} />
            </div>
        )
    }
    else {
        return (
            <div className="horizontal-rectangle">
                <iframe
                    className="location"
                    title="location"
                    src={props.iframesrc}
                    allowFullScreen="yes"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        )
    }
}