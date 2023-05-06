import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Todo() {

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  function signOut () {
    localStorage.removeItem("IsAuth")
    navigate("/");

  }
  return (
    <div>
      <h1>Todo</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
