import axios from 'axios'
import React from 'react'
import { Link, NavLink,useLocation } from 'react-router-dom'


export const Navbar = () => {

    const data1 = ()=>{
        axios.get("/employee/getAllEmployee").then(res=>{
            console.log(res.data)
        })

    }
    const data = useLocation()
    console.log(data)
    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        
                        <button onClick = {data1}>DATA</button>
                        <NavLink style = {({isActive})=>{
                            return isActive ? {color:'red'} : {color:'black'}
                        }

                        } to = "/home">
                              HOME  
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        
                    <NavLink style = {({isActive})=>{
                            return isActive ? {color:'red'} : {color:'black'}
                        }

                        } to = "/aboutus">
                              ABOUT US  
                        </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>

            </div>
        </nav></div>
    )
}
