import './SendEmailSucceed.scss';
import messages_sended from '../../assets/messages-sended.svg';

const PopUpWindow = ({closeWindow}) => {
    return(
        <div className='pop-up-window-OK'>
            <img src={messages_sended} alt='messages_sended'></img>
            <p>Message Sended!</p>
            <button onClick={closeWindow}>OK</button>
        </div>
    );
}

export default PopUpWindow;
