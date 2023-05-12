import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Todo() {

  const location = useLocation();
  const navigate = useNavigate();

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [alert, setAlert] = useState(false)


  const userId = location.state.id

  Axios.defaults.withCredentials = true;

  function addTodos () {
    if (todo === ""){
      setAlert(true);
      return
    }
    Axios.post("http://localhost:8080/todo", {
      todos : todo,
      userId: userId
    })
    .then((res) => {
      setAlert(false)
      getAllTodos();
      setTodo("")
    })
  }

  async function updateTodo(id, todo){
    if (todo === ""){
      setAlert(true);
      return
    }
    await Axios.put(`http://localhost:8080/todo?userId=${userId}&id=${id}&todo=${todo}`);
    setAlert(false);
    getAllTodos();
  }

  function getAllTodos () {
    Axios.get(`http://localhost:8080/todo?userId=${userId}`)
    .then((res) => {
      console.log(res)
      setTodo("")
      setTodoList(res.data)
    })
  }

  async function removeTodo(id) {
    await Axios.delete(`http://localhost:8080/todo?userId=${userId}&id=${id}`)
    getAllTodos();
  }
  

  function signOut () {
    localStorage.removeItem("IsAuth")
    navigate("/");
  }

  useEffect(()=> {
    getAllTodos()
  }, [])


  return (
    <div className="bg-slate-300">
      <header className="flex justify-between">
        <h1 className="ml-2 mt-2">Welcome {location.state.firstName}</h1>
        <button className="mr-2 mt-2 bg-rose-600 rounded border-2 p-1 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600" onClick={signOut}>Sign Out</button>
      </header>
      <div className="flex flex-col items-center mt-8 gap-2 h-screen">
        {alert ? <p>Please enter a value to either add or edit your todo item.</p> : <div></div>}
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="border-2 border-blue-500 rounded-sm" value={todo} name='todo' onChange={(e) => setTodo(e.target.value)} placeholder='Add or Update todo' type="text" />
          <button className="bg-green-400 rounded border-2 py-1 px-2 ml-2 text-white hover:bg-white hover:text-green-400 hover:border-green-400" onClick={addTodos} type="submit">Add</button>
        </form>
        <ul className="w-4/5 mt-4 lg:w-3/5">
        {todoList.map((task) => {
          return (
          <li className="text-lg flex justify-between mt-4" key={task.id}>
            {task.todo}
            <div>
              <button className="text-sm bg-yellow-400 rounded border-2 p-1 text-white mr-2 hover:bg-white hover:text-yellow-400 hover:border-yellow-400" onClick={() => updateTodo(task.id, todo)}>Edit</button>
              <button className="text-sm bg-rose-700 rounded border-2 p-1 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600" onClick={()=>removeTodo(task.id)}>Delete</button>
            </div>
          </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
