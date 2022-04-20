import React, { useState } from 'react';

const AddTodo = (props) => {
    const [task, setTask] = useState('')

    const handleInput = (e) => {
        setTask(e.target.value)
    };
    const handleAdd = () => {
        const newTask = {
            task: task,
            status: false,
            id: Date.now(),
        }
        
        props.handleTask(newTask)
        let inp=document.querySelector('input')
        inp.value=""
    }
    return (
        <div>
            <input type="text" onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;