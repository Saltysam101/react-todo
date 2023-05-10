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
      <header className="flex justify-between">
        <h1 className="ml-2 mt-2">Welcome {location.state.firstName}</h1>
        <button className="mr-2 mt-2 bg-rose-600 rounded border-2 p-1 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600" onClick={signOut}>Sign Out</button>
      </header>
      <div className="flex flex-col items-center mt-8 gap-2 h-screen">
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="border-2 border-blue-500 rounded-sm" value={todo} name='todo' onChange={(e) => setTodo(e.target.value)} placeholder='Add Todo' type="text" />
          <button className="bg-green-400 rounded border-2 py-1 px-2 ml-2 text-white hover:bg-white hover:text-green-400 hover:border-green-400" onClick={addTodos} type="submit">Add</button>
        </form>
        <ul className="w-4/5 mt-4 lg:w-3/5">
        {todoList.map((task) => {
          return (
          <li className="text-lg flex justify-between mt-4" key={task.id}>
            {task.todo}
            <button className="text-sm bg-rose-600 rounded border-2 p-1 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600" onClick={()=>removeTodo(task.id)}>Delete</button>
          </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
