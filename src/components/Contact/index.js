import './index.scss';

const Contact = () => (
    <div id="contactPage" className="contact">
        <p className="contact-description">Have an Awsome Idea? <span>Let's Discuss!🤔</span>
            <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
            <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
            <br />...
        </p>
        <div className="contact-block">
            <p>Name *</p>
            <input type="text" minlength="1" maxlength="20"></input>
            <p className="error">At least, let me know your name 🥺🙏</p>
            <p>Email Address *</p>
            <input type="email" maxlength="50"></input>
            <p className="error">Email is necessary 🙋</p>
            <p>Message *</p>
            <textarea type="text" minlength="1" maxlength="500" placeholder="Type here..."></textarea>
            <p className="error">Are you sure you don't wanna say anything🥺🥺🥺</p>
            <button className="submit-button">submit</button>
        </div>
    </div>
)

export default Contact;