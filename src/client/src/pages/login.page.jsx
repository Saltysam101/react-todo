import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:8080/login",{
      email: email,
      password: password
    })
    .then((res) => {
        if (res.data) {
          localStorage.setItem("IsAuth", true);
          //console.log("response", res.data[0])
          navigate("/todo", {
            state: {
              id: res.data[0].id,
              firstName: res.data[0].FirstName,
              lastName: res.data[0].LastName
            }
          })
        } else {
          //console.log("no user data")
        }
  })}


  return (
    <form className="flex flex-col items-center justify-center gap-2 h-screen" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">Email</label>
      <input 
      className="border-2 border-blue-500 rounded-sm"
      id='email' 
      type="email"
      name='email'
      required 
      onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
      className="border-2 border-blue-500 rounded-sm" 
      id='password' 
      type="password"
      name='password' 
      required
      onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      className="bg-blue-500 rounded border-2 p-1 text-white mt-4 hover:bg-white hover:text-blue-500 hover:border-blue-500"
      type="submit"
      onClick={login}
      >Submit</button>
    </form>
  )
}
