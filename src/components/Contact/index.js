import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import messages_sended from '../../assets/messages-sended.svg';
import messages_sended_fail from '../../assets/messages-sended-fail.svg';
// import { response } from 'express';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [popUp_pic,setPopUp_pic] = useState(messages_sended_fail);
    const [popUp_Message,setPopUp_Message] = useState('Message Sended');
    const [name_error_visible,setName_error_visiable] = useState(false);
    const [email_error_visible,setEmail_error_visible] = useState(false);
    const [message_error_visible,setMessage_error_visible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSend(e) {
        e.preventDefault();
        console.log(formData);
        if (!formData.name) {
            setName_error_visiable(true);
            setTimeout(() => {
                setName_error_visiable(false);
            }, 5000);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
            setEmail_error_visible(true);
            setTimeout(() => {
                setEmail_error_visible(false);
            }, 5000);
            return;
        }
        if(!formData.message){
            setMessage_error_visible(true);
            setTimeout(() => {
                setMessage_error_visible(false);
            }, 5000);
            return;
        }
        const data = JSON.stringify(formData);
        axios.defaults.withCredentials = true;
        axios.post('https://vercel-express-eosin.vercel.app/api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        ).then(response => {
            if (response.data === '200') {
                //清空内容
            }
            console.log(response.data.message)
        })
    }

    return (
        <><div className="contact">
            <p className="contact-description">Have an Awsome Idea? <span>Let's Discuss!🤔</span>
                <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
                <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
                <br />...
            </p>
            <div className="contact-block">
                <p className='title'>Name *</p>
                <input type="text" name='name' minLength="1" maxLength="20" onChange={handleChange}></input>
                {name_error_visible && <p className="name-error">At least, let me know your name 🥺🙏</p>}
                <p className='title'>Email Address *</p>
                <input type="email" name='email' maxLength="50" onChange={handleChange}></input>
                {email_error_visible && <p className="email-error">Correct email is necessary 🙋</p>}
                <p className='title'>Message *</p>
                <textarea type="text" name='message' minLength="1" maxLength="500" placeholder="Type here..." onChange={handleChange}></textarea>
                {message_error_visible && <p className="message-error">Are you sure you don't wanna say anything🥺🥺🥺</p>}
                <button className="submit-button" onClick={handleSend}>Send</button>
            </div>
        </div>
            <div className='pop-up-window'>
                <img src={popUp_pic} alt='messages_sended'></img>
                <p>{popUp_Message}</p>
                <button>OK</button>
            </div>
        </>
    )
}

export default Contact;