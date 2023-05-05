import React from 'react'

export default function Todo() {

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
