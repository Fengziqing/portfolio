import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import SendEmailFiled from './SendEmailFailed';
import SendEmailSucceed from './SendEmailSucceed';
import Waiting from './Waiting';
import Blur from './Blur';

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [needBlur, setNeedBlur] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [sendOk, setSendOk] = useState(false);
    const [sendFailed, setSendFailed] = useState(false);
    const [sendButton, setSendButton] = useState('Send');
    const [name_error_visible, setName_error_visiable] = useState(false);
    const [email_error_visible, setEmail_error_visible] = useState(false);
    const [message_error_visible, setMessage_error_visible] = useState(false);

    function colsePopUpWindow() {
        setSendFailed(false);
        setSendOk(false);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    async function sendingData(){
        const sendData = {
            'name': name,
            'email': email,
            'message': message
        }
        console.log(sendData);
        setSendButton('Sending');
        setNeedBlur(true);
        setWaiting(true);
        const data = JSON.stringify(sendData);
        axios.defaults.withCredentials = true;

        try {
            await axios.post('https://vercel-express-eosin.vercel.app/api/contact', data, {
                // axios.post('http://localhost:3000/api/contact', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                setName('');
                setEmail('');
                setMessage('');
                setSendOk(true);
            });
        } catch (error) {
            setSendFailed(true);
            console.log(error);
        }
        setSendButton('Send');
        setWaiting(false)
        setNeedBlur(false);
    }

    function handleSend (e) {
        e.preventDefault();
        //data checking
        if (name === '') {
            setName_error_visiable(true);
            setTimeout(() => {
                setName_error_visiable(false);
            }, 5000);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmail_error_visible(true);
            setTimeout(() => {
                setEmail_error_visible(false);
            }, 5000);
            return;
        }
        if (message==='') {
            setMessage_error_visible(true);
            setTimeout(() => {
                setMessage_error_visible(false);
            }, 5000);
            return;
        }
        sendingData();
    }

    return (
        <>
            <div className="contact">
                <p className="contact-description">Have an Awsome Idea? <span>Let's Discuss!🤔</span>
                    <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
                    <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
                    <br />...
                </p>
                <div className="contact-block">
                    {needBlur && <Blur />}
                    <form onSubmit={handleSend}>
                    <p className='title'>Name *</p>
                    <input type="text" name='name' minLength="1" maxLength="20" value={name} onChange={handleNameChange}></input>
                    {name_error_visible && <p className="name-error">At least, let me know your name 🥺🙏</p>}
                    <p className='title'>Email Address *</p>
                    <input type="email" name='email' maxLength="50" value={email} onChange={handleEmailChange}></input>
                    {email_error_visible && <p className="email-error">Correct email is necessary 🙋</p>}
                    <p className='title'>Message *</p>
                    <textarea type="text" name='message' minLength="1" value={message} maxLength="500" placeholder="Type here..." onChange={handleMessageChange}></textarea>
                    {message_error_visible && <p className="message-error">Are you sure you don't wanna say anything🥺🥺🥺</p>}
                    <button className="submit-button">{sendButton}</button>
                    </form>
                </div>
                {waiting && <Waiting />}
                {sendOk && <SendEmailSucceed closeWindow={colsePopUpWindow} />}
                {sendFailed && <SendEmailFiled closeWindow={colsePopUpWindow} />}
            </div>
        </>
    )
}

export default Contact;