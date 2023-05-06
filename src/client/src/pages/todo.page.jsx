import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Todo() {

  const location = useLocation();

  console.log(location.state);

  function signOut () {
    localStorage.setItem("IsAuth", false)
  }
  return (
    <div>
      <h1>Todo</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
