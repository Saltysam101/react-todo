import React, { useState } from 'react';
import Axios from 'axios';

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:8080/login",{
      email: email,
      password: password
    })
    .then((res) => console.log(res))
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input 
      id='email' 
      type="text" 
      onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input 
      id='password' 
      type="text" 
      onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      type="submit"
      onClick={login}
      >Submit</button>
    </form>
  )
}
