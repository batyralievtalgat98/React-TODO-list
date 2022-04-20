import React from 'react';
 import "./TodoList.css"
const TodoList = (props) => {
    let style={
        color: 'red',
        listStyleType: 'None'
    }
    return (
        <ul style={style}>
            {props.todos.map((item,index)=>(
                <li key={item.id} className={item.status ? 'completed' : ''}>
                    <input type="checkbox" 
                    onChange={()=>props.changeStatus(item.id)} />
                    {item.task}
                    <button onClick={()=>props.handleDelete(item.id)}>DELETE</button>
                    <button onClick={()=> props.handleEdit(index)}>EDIT</button>
                    </li>
            ))}
        </ul>
    );
};

export default TodoList;