import './Picture.scss';

export default function Picture(props) {
    return (
        <div className="picture">
            <img src={props.imgsrc} alt={props.imgalt} />
        </div>
    )
}