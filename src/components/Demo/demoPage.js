import { useNavigate, useParams } from 'react-router-dom';
import './demoPage.scss';
import ToDoList from './ToDoList/index';

export default function DemoPage() {
    const navigator = useNavigate();
    const demoName = useParams().demoName;
    console.log(demoName);
    let component;
    if(demoName === 'ToDoList'){
        component = <ToDoList />;
    }else{
        component = <div className='developing'>Comming soon!</div>
    }
    function backToDemo() {
        navigator('/Demo');
    }
    return (
            <div className='demoPage'>
                <button className='back' onClick={backToDemo}> Back to Demo page</button>
                <div className='demoContent'>
                    {component}
                </div>
            </div>
    )
}