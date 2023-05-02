import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function SignupPage() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/register",{
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
    .then((res) => console.log(res))
  }

  return (
    <form>
      <label htmlFor="firstName">Firstname</label>
      <input 
      id='firstName' 
      type="text" 
      onChange={(e) => {
        setFirstName(e.target.value)
      }}
      />
      <label htmlFor="lastName">Lastname</label>
      <input 
      id='lastName' 
      type="text" 
      onChange={(e) => {
        setLastName(e.target.value)
      }}
      />
      <label htmlFor="email">Email</label>
      <input 
      id='email'
      type="text" 
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      />
      <label htmlFor="password">Password</label>
      <input 
      id='password' 
      type="text" 
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      />
      <button 
      type="submit"
      onClick={register}
      >Submit</button>
    </form>
  )
}
