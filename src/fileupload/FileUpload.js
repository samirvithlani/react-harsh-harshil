import axios from 'axios'
import React from 'react'
import { useState } from 'react'


export const FileUpload = () => {
    const [file, setfile] = useState('')
    const [files, setfiles] = useState([])

    

    const fileChange = (e) => {

        console.log("file change...", e.target.files)
        setfile(e.target.files)
        
    }
    const submit = ()=>{
        sendFile()
    }
    const sendFile =()=>{
        const formData = new FormData();
        formData.append("file",file)
        formData.append('name','Harshil')
        axios.post('http://localhost:8080/upload',formData).then((res)=>{

            console.log(res.data)
        })
        

    }

  return (
    <div>FileUpload

        <input type="file" onChange={(e)=>{fileChange(e)}} multiple/>
        <button onClick ={submit}>UPLOAD</button>
    </div>
  )
}

