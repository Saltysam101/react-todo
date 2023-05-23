import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import config from '../config/config';

export default function SignupPage() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post(`${process.env.REACT_APP_URL}/register`,{
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
    .then((res) =>{ 
      /* console.log(res) */})
      navigate("/login");
  }

  return (
    <form className="bg-slate-300 flex flex-col items-center justify-center gap-2 h-screen">
      <label htmlFor="firstName">Firstname</label>
      <input 
      className="border-2 border-blue-500 rounded-sm"
      id='firstName' 
      type="text" 
      onChange={(e) => {
        setFirstName(e.target.value)
      }}
      />
      <label htmlFor="lastName">Lastname</label>
      <input 
      className="border-2 border-blue-500 rounded-sm"
      id='lastName' 
      type="text" 
      onChange={(e) => {
        setLastName(e.target.value)
      }}
      />
      <label htmlFor="email">Email</label>
      <input 
      className="border-2 border-blue-500 rounded-sm"
      id='email'
      type="text" 
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      />
      <label htmlFor="password">Password</label>
      <input 
      className="border-2 border-blue-500 rounded-sm"
      id='password' 
      type="password" 
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      />
      <button 
      className="bg-blue-500 rounded border-2 p-1 text-white mt-4 hover:bg-white hover:text-blue-500 hover:border-blue-500"
      type="submit"
      onClick={register}
      >Submit</button>
    </form>
  )
}
