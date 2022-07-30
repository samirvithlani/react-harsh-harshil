import React, { useState } from 'react'


export const AddTodos = (props) => {

    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')

    const submit = (e) => {
        e.preventDefault()
        var todo = {
            sno: Math.random(),
            title: title,
            desc: desc
        }
        props.addTodos(todo)


    }

  return (
    <div>
        <form onSubmit = {submit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" 
                onChange = {(e)=> settitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="title" 
                onChange = {(e)=>setdesc(e.target.value)}
                />
            </div>
            <div>
                <button type = "submit" >Add</button>
            </div>

        </form>
    </div>
  )
}
