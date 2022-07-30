import React, { useRef } from 'react'
import { useState } from 'react'



export const UserRegistration = () => {

    const [email, setEmail] = useState('');
    const name = useRef('');
    const password = useRef('');
    const count = useRef(0);

    const countHandler = () => {
        count.current++;
        console.log(count.current);
    }    
    const emailChangeHandler = (event) => {

        
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const nameChangeHandler = (event) => {

        
        console.log(name.current.value);
        
    }

    const submit = (e)=>{

        e.preventDefault()
        console.log(name.current.value);
        console.log(password.current.value);

    }
    

    return (

        
        <form onSubmit = {submit}>
            <button onClick={countHandler}>COUNT</button>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" ref ={name}/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event)=>{emailChangeHandler(event)}}/>
                <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref={password}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}