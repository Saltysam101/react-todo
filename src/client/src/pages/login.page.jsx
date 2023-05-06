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
          console.log("response", res.data[0])
          navigate("/todo", {
            state: {
              id: res.data[0].id,
              firstName: res.data[0].FirstName,
              lastName: res.data[0].LastName,
              todos: res.data[0].todos
            }
          })
        } else {
          console.log("no user data")
        }
  })}

  /* useEffect(()=> {
    Axios.get("http://localhost:8080/login")
    .then((response) => {
      if(response.data.user) {
        console.log("get", response.data.user[0].FirstName)
      } else {
        console.log("no user data")
      }
  },[])}) */

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">Email</label>
      <input 
      id='email' 
      type="email"
      name='email'
      required 
      onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input 
      id='password' 
      type="password"
      name='password' 
      
      onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      type="submit"
      onClick={login}
      >Submit</button>
    </form>
  )
}
