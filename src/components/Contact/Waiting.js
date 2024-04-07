import './Waiting.scss';
import sending_email from '../../assets/sending-email.svg';

const Waiting = () => {
    return (
    <div className='wait-popup-window'>
        <img src={sending_email} alt='email sending'></img>
        <p>Your Message is Sending...<br/> Please wait for a moment... <br/> <span>*You will receive a confirmation email if the message is sent successfully.*</span></p>
    </div>
    );
}

export default Waiting;