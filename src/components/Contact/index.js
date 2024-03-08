import { useState } from 'react';
import './index.scss';
import axios from 'axios';
// import { response } from 'express';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSend(e) {
        e.preventDefault();
        console.log(formData);
        const data = JSON.stringify(formData);
        axios.post('http://localhost:3001/api/contact',data,{
            headers: {
              'Content-Type': 'application/json',
            }}
            ).then(response =>{
            console.log(response.data.message)
        })
    }

    return (
        <div className="contact">
            <p className="contact-description">Have an Awsome Idea? <span>Let's Discuss!🤔</span>
                <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
                <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
                <br />...
            </p>
            <div className="contact-block">
                <p>Name *</p>
                <input type="text" name='name' minLength="1" maxLength="20" onChange={handleChange}></input>
                <p className="error">At least, let me know your name 🥺🙏</p>
                <p>Email Address *</p>
                <input type="email" name='email' maxLength="50" onChange={handleChange}></input>
                <p className="error">Email is necessary 🙋</p>
                <p>Message *</p>
                <textarea type="text" name='message' minLength="1" maxLength="500" placeholder="Type here..." onChange={handleChange}></textarea>
                <p className="error">Are you sure you don't wanna say anything🥺🥺🥺</p>
                <button className="submit-button" onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Contact;