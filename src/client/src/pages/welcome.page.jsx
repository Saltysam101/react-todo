import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div>
      <h1 className="">Welcome to The To-Do site</h1>
      <p>Please either setup an account or login</p>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}
