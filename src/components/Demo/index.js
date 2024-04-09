import './index.scss';
import BentoTitle from '../BentoComponents/BentoTitle';
import ClickHorizontalRectangle from '../BentoComponents/ClickHorizontalRectangle';
import { useNavigate } from 'react-router-dom';


const Demo = () => {
    const navigator = useNavigate();

    function handleClick(page) {
        navigator(`/Demo/${page}`)
    }
    return (
        <div className="demo">
            <div className="react-task">
                <BentoTitle content='React Practice Demo' />
                <div className="one"onClick={()=>handleClick('ToDoList')}>
                    <ClickHorizontalRectangle imgalt='todo-list' title='Todo-List'/>
                </div>
            </div>
        </div>
    )
}

export default Demo;