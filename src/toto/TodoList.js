import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  return (
    <div>TodoList

        {
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete = {props.onDelete}/>
            })
        }
    </div>
  )
}
