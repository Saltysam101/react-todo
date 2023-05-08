import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Todo() {

  const location = useLocation();
  const navigate = useNavigate();

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  console.log(location.state);

  Axios.defaults.withCredentials = true;

  function addTodos () {
    
    Axios.post("http://localhost:8080/todo", {
      todos : todo,
      userId: location.state.id
    })
    .then((res) => {
      setTodo("")
      window.location.reload()
      console.log(res)})
  }

  function removeTodo(id) {
    Axios.delete(`http://localhost:8080/todo?userId=${location.state.id}&id=${id}`)
    window.location.reload();
  }
  

  function signOut () {
    localStorage.removeItem("IsAuth")
    navigate("/");
  }

  useEffect(()=> {
    Axios.get(`http://localhost:8080/todo?userId=${location.state.id}`)
    .then((res) => {
      console.log(res)
      setTodoList(res.data)
    })
  }, [location.state.id])


  return (
    <div>
      <h1>Welcome {location.state.firstName}</h1>
      <div>
        <input value={todo} name='todo' onChange={(e) => setTodo(e.target.value)} placeholder='Add Todo' type="text" />
        <button onClick={addTodos} type="submit">Add</button>
        <ul>
        {todoList.map((task) => {
          return (
          <li key={task.id}>
            {task.todo}
            <button onClick={()=>removeTodo(task.id)}>Delete</button>
          </li>
          )
        })}
        </ul>
      </div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
