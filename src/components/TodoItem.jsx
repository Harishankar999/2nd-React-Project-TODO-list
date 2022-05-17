import React, { useState } from 'react'

import './todo.css'


const TodoItem = ({todo, onDelete}) => {
    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <div key={todo.id} className="todoStyle">
        
        <div>{todo.value}</div>
        <div>
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </div>
            <div>
               <input className="checkbox-round" type="checkbox" checked={isCompleted} onChange={(e)=> {
                    setIsCompleted(e.target.checked) ;
                }}/> 
            </div>
            
    </div>
  )
}

export default TodoItem