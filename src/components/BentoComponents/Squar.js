import './Squar.scss';

//can show skill slogan
export default function Squar(props){
    const{
        imgsrc,
        imgalt,
        name,
    } = props;

    return (
        <div className="squar">
            <div className="img-background-color"></div>
            <img src={imgsrc} alt={imgalt} />
            <p>{name}</p>
        </div>
    )
}