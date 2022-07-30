import logo from './logo.svg';
import './App.css';
import { Signup } from './component/signup';
import Login from './component/login';
import { LoginForm } from './component/LoginForm';
import { useState } from 'react';
import { Task } from './component/Task';
import { AddTask } from './component/AddTask';
import { Menu } from './pages/Menu';
import { Routes, Route } from 'react-router-dom';
import { AddProduct } from './pages/AddProduct';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { SImpleForm } from './component/SImpleForm';
import { ApiComponenet } from './api/ApiComponenet';
import { GetApi } from './apibackup/GetApi';
import { UserDetail } from './apibackup/UserDetail';
import { FileUpload } from './fileupload/FileUpload';
import { Navbar } from './Navigation/Navbar';
import axios from 'axios';
import { UserRegistration } from './forms/UserRegistration';
import { AddUser } from './crud/AddUser';
import { TodoList } from './toto/TodoList';
import { AddTodos } from './toto/AddTodos';
import { RohithDemo } from './api/RohithDemo';
import {QueryDemo} from './query/QueryDemo';
import { QueryDemo2 } from './query/QueryDemo2';
import { MUIDEMO } from './MUIDEMO';
import { TableDemo } from './TableDemo';
import { MuiDemo1 } from './mui/MuiDemo1';
import { MuiTable } from './api/MuiTable';
import { MuiDemo2 } from './mui/MuiDemo2';
import { FormikDemo1 } from './formik/FormikDemo1';
import { FormikDemo2 } from './formik/FormikDemo2';
import { RegisterDemo1 } from './formsuse/RegisterDemo1';


function App() {

  axios.defaults.baseURL = "localhost:8080";
  const [tasks, settasks] = useState([
    {
      tId: 101,
      tName: "java"
    },
    {
      tId: 102,
      tName: "python"
    },
    {
      tId: 103,
      tName: "c++"
    }
  ])
  const addTicket = (ticektObj) => {

    console.log("add ticket called...", ticektObj)

    settasks([...tasks, ticektObj])
  }
  const deleteTask = (task) => {

    console.log("deleteing.....", task)


    settasks(tasks.filter((t) => {

      return t !== task;
    }))

    console.log(tasks)

  }


  var users = [{
    id: 1,
    name: "sai",
    age: "25"
  }]



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "title1",
      desc: "desc1"
    },
    {
      sno: 2,
      title: "title2",
      desc: "desc2"
    },
    {
      sno: 3,
      title: "title3",
      desc: "desc3"
    },
  ])

  const addTodos = (todo) =>{

    setTodos([...todos, todo])
  }
  const onDelete = (todo) => {
    console.log("i am deleteing....", todo)
    setTodos(todos.filter((t) => {
      return t !== todo
    }
    ))

  }

  return (
    <div>

      
      
      {/* <FormikDemo2/> */}
      <RegisterDemo1/>

      {/* <AddTodos addTodos = {addTodos}/>
      <TodoList todos={todos} onDelete={onDelete} /> */}
      

      {/* <AddTask addTicket = {addTicket}/>
      <Task tasks ={tasks} deleteTask = {deleteTask}/> */}


      {/* <SImpleForm/>
      <Menu />
      <ApiComponenet/> */}
      {/* <FileUpload /> */}
      {/* <UserRegistration/> */}
      <Routes>

        <Route path="addproduct" element={<AddProduct />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="product" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="userDetail/:id" element={<UserDetail />} />
        <Route path="getapi" element={<GetApi />} />
      </Routes>

    </div>
  );
}

export default App;
