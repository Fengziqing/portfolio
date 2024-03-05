import './index.scss';
import avatar from '../../assets/avatar.png';
import email_icon from '../../assets/email.svg';
import linkedin_icon from '../../assets/linkedin.svg';
import github_icon from '../../assets/github.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    function clickToWriteEmail(link){
        window.location.href=link;
    }
    function handleClick(link){
        const newpage = window.open('about:blank');
        newpage.location.href=link;
    }

    return (
        <div className="personal-message-container">
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/">Home</NavLink>
                <NavLink 
                    activeclassname="active" 
                    to="/cv">CV</NavLink>
                <NavLink 
                    activeclassname="active" 
                    to="/contact">Contact Me</NavLink>
            </nav>
            <img className={avatar} src={avatar} alt="avatar"/>
            <h1 className="my-name">Haruko Feng<span>ZiQing Feng(27)</span></h1>
            <ul className="self-introduction">
                <li>Software Engineer, Client Engineer</li>
                <li>Computer Science Master</li>
                <li>Live in China</li>
                <li>Language: Japanese, English, Chinese</li>
            </ul>
            <div className="contact">
                <input type="image" src={email_icon} alt="email" onClick={()=>clickToWriteEmail("mailto:fengziqing970202@gmail.com")}></input>
                <input type="image" src={linkedin_icon} alt="linkedin" onClick={()=>handleClick("http://www.linkedin.com/in/ziqing-feng")}></input>
                <input type="image" src={github_icon} alt="github" onClick={()=>handleClick("https://github.com/Fengziqing")}></input>
            </div>
        </div>
    )
}

export default Sidebar