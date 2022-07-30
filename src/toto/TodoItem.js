import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
        <div>
            {props.todo.title}
            {props.todo.desc}
            {props.todo.sno}
            <button onClick={()=>props.onDelete(props.todo)}>Delete</button>
        </div>
    </div>
  )
}
