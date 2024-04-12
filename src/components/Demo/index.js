import './index.scss';
import BentoTitle from '../BentoComponents/BentoTitle';
import ClickHorizontalRectangle from '../BentoComponents/ClickHorizontalRectangle';
import { useNavigate } from 'react-router-dom';


const Demo = () => {
    const navigator = useNavigate();

    function handleClick(page) {
        navigator(`/Demo/DemoPage/${page}`)
    }
    return (
        <div className="demo">
            <div className="react-task">
                <BentoTitle content='React Practice Demo' />
                <div className="one" onClick={()=>handleClick('ToDoList')}>
                    <ClickHorizontalRectangle imgsrc='ToDoList' imgalt='ToDoList' title='Todo-List'/>
                </div>
            </div>
        </div>
    )
}

export default Demo;