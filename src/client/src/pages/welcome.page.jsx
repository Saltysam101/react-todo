import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="bg-slate-300 flex flex-col items-center justify-evenly h-screen">
      <header className="text-center">
        <h1 className="text-2xl ">Welcome to The To-Do site</h1>
        <p className="text-md md:text-sm">Please either setup an account or login</p>
      </header>
      <section className=" w-4/5 flex flex-row items-center justify-evenly">
      <Link 
      className="bg-blue-500 rounded border-2 p-1 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500" to="/register">Sign Up</Link>
      <Link 
      className="border-2 border-blue-500 bg-white rounded py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white" to="/login">Login</Link>
      </section>
    </div>
  )
}
