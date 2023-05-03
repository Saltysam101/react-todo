import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:8080/login",{
      email: email,
      password: password
    })
    .then((res) => console.log(res))
  }

  useEffect(()=> {
    Axios.get("http://localhost:8080/login")
    .then((response) => console.log("get", response.data.user))
  },[])

  return (
    <form>
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
