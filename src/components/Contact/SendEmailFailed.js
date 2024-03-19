import './SendEmailFailed.scss';
import messages_sended_fail from '../../assets/messages-sended-fail.svg';

const PopUpWindow = ({closeWindow}) => {

    return(
        <div className='pop-up-window'>
            <img src={messages_sended_fail} alt='messages sended fail'></img>
            <p><span>Oops!</span> There was an error while attempting to send the email. Please try again later.
                <br/><br/> If the issue persists, you can directly email to <span>fengziqing970202@gmail.com</span></p>
            <button onClick={closeWindow}>OK</button>
        </div>
    );
}

export default PopUpWindow;