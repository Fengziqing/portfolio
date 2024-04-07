import './index.scss';
import '../Home/share_style.scss';
import { useNavigate } from 'react-router-dom';


const Demo = () => {
    const navigator = useNavigate();

    function handleClick(page) {
        navigator(`/Demo/${page}`)
    }
    return (
        <div className="demo">
            <div className="my-first-container">
                <div className="bento-title">React Practice Demo</div>
                <div className="one"onClick={()=>handleClick('ToDoList')}>
                    <div className="squar">
                        <div className='img-background-color'></div>
                        {/* <img alt='todolist'/> */}
                        <p>Todo-List</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo;