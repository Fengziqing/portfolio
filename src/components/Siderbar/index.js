import './index.scss';
import avatar from '../../assets/avatar.png';
import email_icon from '../../assets/email.svg';
import linkedin_icon from '../../assets/linkedin.svg';
import github_icon from '../../assets/github.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import biglogo from '../../assets/biglogo.png';
import smalllogo from '../../assets/smalllogo.png';

const Sidebar = () => {

    const navigate = useNavigate();

    function handleClick(link) {
        const newpage = window.open('about:blank');
        newpage.location.href = link;
    }

    function backToHome() {
        navigate('/');
    }

    return (
        <div className="personal-message-container">
            <img className="biglogo" src={biglogo} alt='haruko' onClick={backToHome}></img>
            <img className="smalllogo" src={smalllogo} alt='small-H' onClick={backToHome}></img>
            <nav>
                <NavLink
                    exact="true"
                    to="/">Home</NavLink>
                <NavLink
                    to="/cv">CV</NavLink>
                <NavLink
                    to="/demo">Demo</NavLink>
                <NavLink
                    to="/contact">Contact Me</NavLink>
            </nav>
            <img className="avatar" src={avatar} alt="avatar" onClick={backToHome} />
            <h1 className="my-name" onClick={backToHome}>Haruko Feng<span>ZiQing Feng(27)</span></h1>
            <ul>
                <li>Software Engineer, Client Engineer</li>
                <li>Computer Science Master</li>
                <li>Live in China</li>
                <li>Language: Japanese, English, Chinese</li>
            </ul>
            <div className="contact">
                <input type="image" src={email_icon} alt="email" onClick={() => handleClick("https://mail.google.com/mail/u/0/?view=cm&amp&fs=1&amp&tf=1&amp&source=mailto&amp&to=fengziqing970202@gmail.com")}></input>
                <input type="image" src={linkedin_icon} alt="linkedin" onClick={() => handleClick("http://www.linkedin.com/in/ziqing-feng")}></input>
                <input type="image" src={github_icon} alt="github" onClick={() => handleClick("https://github.com/Fengziqing")}></input>
            </div>
        </div>
    )
}

export default Sidebar