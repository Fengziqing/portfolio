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
    const [emailErrorText, setEmailErrorText] = useState('');
    const [nameErrorText,setNameErrorText] = useState('');
    const [messageErrorText,setMessageErrorText] = useState('');

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
        if (name.length === 0) {
            setNameErrorText('At least, let me know your name 🥺🙏');
            setTimeout(() => {
                setNameErrorText('');
            }, 5000);
            return;
        }else if(name.length>30){
            setNameErrorText('Your Name should shorter than 30 letters ✍️');
            setTimeout(() => {
                setNameErrorText('');
            }, 5000);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailErrorText('Please enter a valid email address 🥺🥺🥺');
            setTimeout(() => {
                setEmailErrorText('');
            }, 5000);
            return;
        }
        if (message.length===0) {
            setMessageErrorText('Are you sure you don\'t wanna say anything🥺🥺🥺');
            setTimeout(() => {
                setMessageErrorText('');
            }, 5000);
            return;
        }else if(message.length>5){
            setMessageErrorText('Your message is too long ❌ , should shorter than 500 letters ✅');
            setTimeout(() => {
                setMessageErrorText('');
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
                    <input type="text" name='name'value={name} onChange={handleNameChange}></input>
                    <p className="name-error">{nameErrorText}</p>
                    <p className='title'>Email Address *</p>
                    <input type="email" name='email'value={email} onChange={handleEmailChange}></input>
                    <p className="email-error">{emailErrorText}</p>
                    <p className='title'>Message *</p>
                    <textarea type="text" name='message' value={message} placeholder="Type here..." onChange={handleMessageChange}></textarea>
                    <p className="message-error">{messageErrorText}</p>
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