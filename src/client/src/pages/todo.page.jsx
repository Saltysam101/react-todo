import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Todo() {

  const location = useLocation();
  const navigate = useNavigate();

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState("")

  console.log(location.state);

  Axios.defaults.withCredentials = true;

  function addTodos () {
    setTodoList(todo)
    setTodo("")
    Axios.post("http://localhost:8080/todo", {
      todos : todoList,
      id: location.state.id
    })
    .then((res) => console.log(res))
  }
  

  function signOut () {
    localStorage.removeItem("IsAuth")
    navigate("/");
  }



  return (
    <div>
      <h1>Welcome {location.state.firstName}</h1>
      <div>
        <input value={todo} name='todo' onChange={(e) => setTodo(e.target.value)} placeholder='Add Todo' type="text" />
        <button onClick={addTodos} type="submit">Add</button>
        {/* <ul>
        {todoList.map((todo, idx) => {
          return (<li key={idx}>{todo.task}</li>)
        })}
        </ul> */}
      </div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
