import './index.scss';
// import { useState } from 'react';

const ToDoList = () => {
    // const [task,setTask] = useState('');

    return(
        <div className="todo-list">
            {/* <p>Comming Soon...</p> */}
            <input className='input'></input>
            <button className='addbutton'>ADD</button>
            <ul className='task'>
            </ul>
        </div>
    )
}

export default ToDoList;