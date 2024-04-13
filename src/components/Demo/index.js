import './index.scss';
import BentoTitle from '../BentoComponents/BentoTitle';
import ClickHorizontalRectangle from '../BentoComponents/ClickHorizontalRectangle';
import { useNavigate } from 'react-router-dom';


const Demo = () => {
    const navigator = useNavigate();

    function handleClick(page) {
        if(page==='developing'){
            navigator('/Demo/DemoPage/developing');
        }else{
            navigator(`/Demo/DemoPage/${page}`)
        }
    }
    return (
        <div className="demo">
            <div className="react-task">
                <BentoTitle content='React Practice Demo' />
                <div className="one" onClick={()=>handleClick('ToDoList')}>
                    <ClickHorizontalRectangle imgsrc='ToDoList' imgalt='ToDoList' title='Todo-List' backgroundColor='#9fb0cf' description='React - useState Hook, HTML, CSS, Responsible Web Development'/>
                </div>
                <div className="two" onClick={()=>handleClick('developing')}>
                    <ClickHorizontalRectangle imgsrc='' imgalt='' title='' backgroundColor=''/>
                </div>
                <div className="three" onClick={()=>handleClick('developing')}>
                    <ClickHorizontalRectangle imgsrc='' imgalt='' title='' backgroundColor=''/>
                </div>
                <div className="four" onClick={()=>handleClick('developing')}>
                    <ClickHorizontalRectangle imgsrc='' imgalt='' title='' backgroundColor=''/>
                </div>
                <div className="five" onClick={()=>handleClick('developing')}>
                    <ClickHorizontalRectangle imgsrc='' imgalt='' title='' backgroundColor=''/>
                </div>
            </div>
        </div>
    )
}

export default Demo;