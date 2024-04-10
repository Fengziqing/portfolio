import './index.scss';
import { useState } from 'react';

const ToDoList = () => {
    const [taskName, setTaskName] = useState('');
    const [task, setTask] = useState([]);
    const [editValue, setEditValue] = useState('');
    const [wrongMessage, setWrongMessage] = useState('');

    function handleTaskNameChange(e) {
        setTaskName(e.target.value);
    }
    function addTask() {
        if (taskName.length === 0) {
            setWrongMessage('task name cannot be null');
            setTimeout(() => {
                setWrongMessage('');
            }, 5000);
            return;
        }
        const newTask = {
            'name': taskName,
            'id': Math.random(),
            'isDone': false,
            'ieEditing':false
        };
        setTask(task.concat(newTask));
        setTaskName('');
    }
    function handleClickDone(targetId) {
        const newTask = task.map(item => item.id === targetId ? { ...item, isDone: true } : item);
        setTask(newTask);
    }
    function handleCleanAllDone() {
        const newTask = task.filter(item => item.isDone === false)
        setTask(newTask);
    }
    function handleClickEdit(targetId) {
        setTask(task.map(item => item.id === targetId ? { ...item, isEditing: true } : item));
    }
    function handleEditValue(e) {
        setEditValue(e.target.value);

    }
    function saveChange(targetId) {
        const newTask = task.map(item => item.id === targetId ? { ...item, name: editValue, isDone:false, isEditing:false } : item);
        setTask(newTask);
    }
    function cancelChange(targetId){
        setTask(task.map(item=> item.id===targetId ? {...item,isEditing:false}:item));
    }

    return (
        <div className="todo-list">
            <div className='input-area'>
                <input className='input' type='text' value={taskName} onChange={handleTaskNameChange}></input>
                <button className='addbutton' onClick={addTask}>ADD</button>
            </div>
            <p className='wrong-message'>{wrongMessage}</p>
            <h2>To Do List</h2>
            <ul>
                {
                    task.map(item => {
                        return (
                            <li key={item.id}>
                                {item.isEditing
                                    ?
                                    <>
                                        <input className='edit-area' type='text' value={editValue} onChange={handleEditValue}></input>
                                        <button onClick={cancelChange}>Cancel</button>
                                        <button onClick={()=>saveChange(item.id)}>Save</button>
                                    </>
                                    :
                                    <>
                                        <p style={{ textDecoration: item.isDone ? 'line-through' : 'none' }} >{item.name}</p>
                                        <button onClick={() => handleClickDone(item.id)}>Done</button>
                                        <button onClick={() => handleClickEdit(item.id)}>Edit</button>
                                    </>}
                            </li>
                        )
                    })
                }
            </ul>
            <button className='clean-all-done' onClick={handleCleanAllDone}>Clean All Done</button>
        </div>
    )
}

export default ToDoList;