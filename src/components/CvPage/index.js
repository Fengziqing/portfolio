import './index.scss';
import spot from '../../assets/spot.svg';
import link from '../../assets/link.svg';

const Cv = () => {
    function handleClick(link){
        const newpage = window.open('about:blank');
        newpage.location.href = link;
    }

    function downloadCV(e){
        e.preventDefault();
        const downloadLink = document.createElement('a');
        downloadLink.style = "display:none";
        downloadLink.href = 'resume.pdf';
        downloadLink.download = 'ZiQingFeng_Resume.pdf';
        downloadLink.click();
    }

    return (
        <>
            <div className="cv">
                <div className="download-cv"><span>➡️ ➡️ ➡️ </span><button onClick={downloadCV}> Download CV</button><span> ⬅️ ⬅️ ⬅️</span></div>
                <div className="seperater">Skills</div>
                <div className="ocha">
                    <div className="school-name">
                        <p>Language <br /><span> - All professional proficiency or above - </span></p>
                        <img className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal">
                        <li>Chinese - native speaker</li>
                        <li>English - working language / IELTS 6.0</li>
                        <li>Japnese - N1</li>
                    </ul>
                </div>
                <div className="ocha">
                    <div className="school-name">
                        <p>Development</p>
                        <img className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="development-language">
                        <li className="language-label">React</li>
                        <li className="language-label">Javascript</li>
                        <li className="language-label">Python</li>
                        <li className="language-label">HTML</li>
                        <li className="language-label">CSS</li>
                        <li className="language-label">Objectice-C</li>
                        <li className="language-label">Node.js</li>
                        <li className="language-label">Express.js</li>
                        <li className="language-label">C++</li>
                        <li className="language-label">C</li>
                        <li className="tools">Git</li>
                        <li className="apps">Jekins</li>
                        <li className="apps">Figma</li>
                        <li className="apps">mongoose</li>
                        <li className="database">MongoDB</li>
                        <li className="platform">Heroku</li>
                        <li className="others">Unit Testing</li>
                        <li className="others">Jest</li>
                        <li className="others">CI/CD</li>
                    </ul>
                </div>
                <div className="seperater">Work Experience </div>
                <div className="ocha">
                    <div className="school-name">
                        <p>Freelancer<br /><span>2023.10 - now</span></p>
                        <img className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal">
                        <li>This Website: developed 100% by myself<br /> github: <span className="name-explanation" onClick={()=>handleClick("https://github.com/Fengziqing/portfolio")}>https://github.com/Fengziqing/portfolio</span></li>
                    </ul>
                </div>
                <div className="ocha">
                    <div className="school-name">
                        <p>Client Engineer<br /> <span className="name-explanation"
                            onClick={()=>handleClick("https://zoom.us/")}>ZOOM <img
                                src={link} alt="" /></span> <br /><span> HangZhou, China <br />2022 - 2023</span></p>
                        <img className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal">
                        <li>Led the development of <span className="name-explanation"
                            onClick={()=>handleClick("https://github.com/Fengziqing/languageTest")}>validation
                            scripts(<span className="language">Python</span>) <img src={link} alt="" /></span> for ZOOM Mac
                            client in all 16 languages,
                            covering the entire process from <span className="skill">requirements analysis to script
                                development, testing, and automation</span>.
                            Utilized Python to implement checks for translation accuracy, text formatting, and placeholders
                            across the diverse language set.
                            The script generates comprehensive output files with summaries, ensuring outstanding and stable
                            support for ZOOM Mac client usage.</li>
                        <li>Led the design and development of a new feature(<span className="language">Objective-C</span>) which
                            aimed at enhancing user engagement for unregistered users,
                            by <span className="skill">millions of non-enterprise users daily, has become instrumental in generating
                                millions of dollars in revenue for ZOOM each quarter.</span> </li>
                        <li>Successfully refactored the Zoom settings interface by transitioning from XIB(utilizing visual
                            tools for development but prone to unpredictable bugs) to
                            entirely <span className="language">Objective-C</span> code-based implementation (stable and easily
                            traceable for bug identification).</li>
                        <li>Developed a website using <span className="language">HTML, CSS, and Javascript</span> for internal
                            staff to upload and analyze log files.
                            This website facilitates daily tasks for all development colleagues,
                            making their work more efficient.</li>
                        <li>Collaborated with the UI/UX team to ensure a consistent and visually appealing interface across
                            all versions of macOS devices.</li>
                        <li>Authored documentation on trigger tracking code usage,
                            effectively aiding new colleagues in rapidly mastering the skill of writing tracking code.</li>
                    </ul>
                </div>
                <div className="seperater">Education</div>
                <div className="ocha">
                    <div className="school-name">
                        <p>Master degree <br /> <span className="name-explanation"
                            onClick={()=>handleClick("https://www.ocha.ac.jp/index.html")}>Ochanomizu University <img
                                src={link} alt="" /></span> <br /><span>Tokyo, Japa</span> <br /> <span>2020 - 2022</span>
                        </p><img className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal">
                        <li>Computer Science Master degree in <span className="name-explanation"
                            onClick={()=>handleClick("http://is.ocha.ac.jp/~siio/")}>Human-Computer Interaction, Siio Lab
                            <img src={link} alt="" /></span></li>
                        <li><span className="name-explanation"
                            onClick={()=>handleClick("https://www.ipsj.or.jp/award/taikaigakusei.html")}>Student
                            Encouragement Award <img src={link} alt="" /></span>, The 84th National Convention of the
                            Information Processing Society of Japan(IPSJ), 2022
                            <br />ZIQING FENG, Mana SASAGAWA, Itiro SIIO, Yasushi MATOBA, “<span className="name-explanation"
                                href="http://is.ocha.ac.jp/~siio/projects/papers/ipsj2022/7Y-03.pdf">control by using
                                half-reflective AR mirror display <img src={link} alt="" /></span>“
                        </li>
                        <li><span className="name-explanation"
                            onClick={()=>handleClick("https://www.jlpt.jp/e/about/levelsummary.html")}>Language
                            Proficiency N1 <img src={link} alt="" /></span> : The highest-level certificate of Japanese
                            proficiency (24.1% Pass Rate)</li>
                    </ul>
                </div>
                <div className="download-cv"><button onClick={downloadCV}> Download CV</button></div>
            </div>
        </>
    )
}

export default Cv;