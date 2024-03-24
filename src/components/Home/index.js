import './index.scss';
import './share_style.scss';
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
    function handleClick(link){
        const newpage = window.open('about:blank');
        newpage.location.href = link;
    }
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
                <p className="bento-title">Hello! I am Ziqing Feng (Haruko Feng), Here are some infromation about me 😀🌍!</p>
                <div className="one">
                    <div className="link" onClick={()=>{handleClick("https://www.linkedin.com/in/ziqing-feng")}}>
                        <img src={menu_linkedin} alt="linkedin-icon" />
                        <a href="https://www.linkedin.com/in/ziqing-feng">linkedin</a>
                    </div>
                </div>
                <div className="two">
                    <div className="link" onClick={()=>{handleClick("https://github.com/Fengziqing")}}>
                        <img src={menu_github} alt="github-icon" />
                        <a href="https://github.com/Fengziqing">github</a>
                    </div>
                </div>
                <div className="three">
                    <div className="picture">
                        <img src={selfie} alt="selfie" />
                    </div>
                </div>
                <div className="four">
                    <div className="squar">
                        <div className="img-background-color"></div>
                        <img src={camera} alt="photographer" />
                        <p>Photographer</p>
                    </div>
                </div>
                <div className="five">
                    <div className="squar">
                        <div className="img-background-color"></div>
                        <img src={adventure} alt="Adventurous" />
                        <p>Adventurous</p>
                    </div>
                </div>
                <div className="six">
                    <div className="squar">
                        <div className="img-background-color"></div>
                        <img src={freelancer} alt="Freelancer" />
                        <p>Freelancer</p>
                    </div>
                </div>
                <div className="seven">
                    <div className="pic-horizontal-rectangle">
                        <iframe
                            className="location"
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441108.6793185333!2d119.842236745896!3d30.260977711277974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344bb629439aaa99%3A0xa7bfd183824de83a!2z5Lit5Zu95rWZ5rGf55yB5p2t5bee5biC!5e0!3m2!1szh-CN!2sjp!4v1705224789314!5m2!1szh-CN!2sjp"
                            allowFullScreen="yes"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="eight">
                    <div className="squar">
                        <div className="img-background-color"></div>
                        <img src={responsible} alt="Responsible" />
                        <p>Responsible</p>
                    </div>
                </div>
                <div className="nine">
                    <div className="pic-vertical-rectangle">
                        <div className="img-background-color"></div>
                        <img src={coding} alt="coding/developer" />
                        <p>Software Engineer</p>
                        <p>Frontend Developer</p>
                        <p>Full-stack<br />Developer</p>
                        <p>Client Engineer</p>
                    </div>
                </div>
            </div>
            <div className="my-second-container">
                <p className="bento-title">I love taking pictures with my friends~ 📷🍃</p>
                <div className="two">
                    <div className="squar">
                        <img src={xx2} alt="" />
                    </div>
                </div>
                <div className="three">
                    <div className="pic-vertical-rectangle">
                        <img src={sunset} alt="" />
                    </div>
                </div>
                <div className="four">
                    <div className="picture">
                        <img src={xx} alt="" />
                    </div>
                </div>
                <div className="five">
                    <div className="pic-vertical-rectangle">
                        <img src={tokyoTower} alt="" />
                    </div>
                </div>
                <div className="six">
                    <div className="picture">
                        <img src={he} alt="" />
                    </div>
                </div>
                <div className="seven">
                    <div className="squar">
                        <img src={aline} alt="" />
                    </div>
                </div>
                <div className="eight">
                    <div className="squar">
                        <img src={nana} alt="" />
                    </div>
                </div>
                <div className="nine">
                    <div className="pic-horizontal-rectangle">
                        <img src={hub} alt="" />
                    </div>
                </div>
                <div className="ten">
                    <div className="squar">
                        <img src={street} alt="" />
                    </div>
                </div>
                <div className="eleven">
                    <div className="pic-vertical-rectangle">
                        <img src={sea} alt="" />
                    </div>
                </div>
                <div className="twelve">
                    <div className="squar">
                        <img src={snow} alt="" />
                    </div>
                </div>
                <div className="thirteen">
                    <div className="pic-horizontal-rectangle">
                        <img src={tree} alt="" />
                    </div>
                </div>
                <div className="fourteen">
                    <div className="squar">
                        <img src={fish} alt="" />
                    </div>
                </div>
            </div>
            <div className="loader" />
        </>
    )
}

export default Home;