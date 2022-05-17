import React, { useState } from "react"
import styles from './todo.css'
import TodoItem from "./TodoItem";
const Todo = () => {
    let [value, setValue] = useState("")
    const [todos, setTodos] = useState([]);

    const onDelete = (id) => {
        let newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <input placeholder="Write Your List...." value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <br />
            <br />
            <button onClick={() => {
                setTodos([...todos,{ id: Date.now(), value: value }]);
                setValue("");
            }}>Add</button>
            <div className={styles.todoItem}>
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
                ))}
            </div>
                
        </div>
    );
};

export default Todo