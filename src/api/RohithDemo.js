import axios from 'axios';
import React, { useState } from 'react'


export const RohithDemo = () => {
    const [users, setusers] = useState([]);
    const callapi = async () => {

        await axios.get('http://localhost:8080/getuser/').then(res => {

            setusers(res.data);
        })
    }
    return (
        <div>
            <button onClick={callapi}>Get Users</button>
            <ul>
                {
                    users.map((u)=>{
                        return <li>{u}</li>
                    })
                }
            </ul>

        </div>
    )
}

