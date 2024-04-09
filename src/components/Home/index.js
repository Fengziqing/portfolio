import './index.scss';
import BentoTitle from '../BentoComponents/BentoTitle';
import Link from '../BentoComponents/Link';
import Squar from '../BentoComponents/Squar';
import Picture from '../BentoComponents/Picture';
import VerticalRectangle from '../BentoComponents/VerticalRectangle';
import HorizontalRectangle from '../BentoComponents/HorizontalRectangle';
import menu_github from '../../assets/menu-github.svg';
import menu_linkedin from '../../assets/menu-linkedin.svg'
import selfie from '../../assets/selfie.jpg';
import camera from '../../assets/camera.svg';
import adventure from '../../assets/adventure.svg';
import freelancer from '../../assets/freelancer.svg';
import responsible from '../../assets/Responsible.svg';
import coding from '../../assets/coding.svg';
import xx from '../../assets/xx.jpg';
import xx2 from '../../assets/xx2.jpg';
import nana from '../../assets/nana.jpg';
import he from '../../assets/he.jpg';
import aline from '../../assets/aline.jpg';
import sunset from '../../assets/sunset.jpg';
import fish from '../../assets/fish.jpg';
import tree from '../../assets/tree.jpg';
import hub from '../../assets/hub.jpg';
import tokyoTower from '../../assets/tokyoTower.jpg';
import snow from '../../assets/snow.jpg';
import sea from '../../assets/sea.jpg';
import street from '../../assets/street.jpg';
import illustration from '../../assets/3d-avatar.png';

const Home = () => {
    return (
        <>
            <div className="information-area">
                <div className="dot"></div>
                <p><span>Hello!</span> I am <span>Ziqing Feng</span> (Haruko Feng) !
                    <br/>I am a <span>Software Engineer</span> with a <span>Master's degree in Computer Science</span>.
                    <br/>I am currently <span>living in China</span>. 
                    <br/>Regarding my language proficiency, I can speak <span>Chinese</span>, <span>Japanese</span>, 
                     and <span>English</span>.</p>
                <img src={illustration} alt="illution"></img>
            </div>
            <div className="my-first-container">
                <BentoTitle content='Hello! I am Ziqing Feng (Haruko Feng), Here are some infromation about me 😀🌍!' />
                <div className="one">
                    <Link imgsrc={menu_linkedin} imgalt='linkedin-icon' link='https://www.linkedin.com/in/ziqing-feng' name='Linkedin'/>
                </div>
                <div className="two">
                    <Link imgsrc={menu_github} imgalt='github-icon' link='https://github.com/Fengziqing' name='GitHub'/>
                </div>
                <div className="three">
                    <Picture imgsrc={selfie} imgalt='selfie'/>
                </div>
                <div className="four">
                    <Squar imgsrc={camera} imgalt="photographer" name='Photographer'/>
                </div>
                <div className="five">
                    <Squar imgsrc={adventure} imgalt='Adventurous' name='Adventurous'/>
                </div>
                <div className="six">
                    <Squar imgsrc={freelancer} imgalt='Freelancer' name='Freelancer'/>
                </div>
                <div className="seven">
                    <HorizontalRectangle isframe={true} iframesrc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441108.6793185333!2d119.842236745896!3d30.260977711277974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344bb629439aaa99%3A0xa7bfd183824de83a!2z5Lit5Zu95rWZ5rGf55yB5p2t5bee5biC!5e0!3m2!1szh-CN!2sjp!4v1705224789314!5m2!1szh-CN!2sjp'/>
                </div>
                <div className="eight">
                    <Squar imgsrc={responsible} imgalt='Responsible' name='Responsible'/>
                </div>
                <div className="nine">
                    <VerticalRectangle imgsrc={coding} imgalt='coding/developer'/>
                </div>
            </div>
            <div className="my-second-container">
                <BentoTitle content='I love taking pictures with my friends~ 📷🍃' />
                <div className="two">
                    <Squar imgsrc={xx2} imgalt=''/>
                </div>
                <div className="three">
                    <VerticalRectangle imgsrc={sunset} imgalt=''/>
                </div>
                <div className="four">
                    <Picture imgsrc={xx} imgalt=''/>
                </div>
                <div className="five">
                    <VerticalRectangle imgsrc={tokyoTower} imgalt=''/>
                </div>
                <div className="six">
                    <Picture imgsrc={he} imgalt=''/>
                </div>
                <div className="seven">
                    <Squar imgsrc={aline} imgalt=''/>
                </div>
                <div className="eight">
                    <Squar imgsrc={nana} imgalt=''/>
                </div>
                <div className="nine">
                    <HorizontalRectangle imgsrc={hub} imgalt='' isframe={false}/>
                </div>
                <div className="ten">
                    <Squar imgsrc={street} imgalt=''/>
                </div>
                <div className="eleven">
                    <VerticalRectangle imgsrc={sea} imgalt=''/>
                </div>
                <div className="twelve">
                    <Squar imgsrc={snow} imgalt=''/>
                </div>
                <div className="thirteen">
                    <HorizontalRectangle imgsrc={tree} imgalt='' isframe={false}/>
                </div>
                <div className="fourteen">
                    <Squar imgsrc={fish} imgalt=''/>
                </div>
            </div>
            {/* <div className="loader" /> */}
        </>
    )
}

export default Home;