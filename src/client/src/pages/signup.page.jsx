import React from 'react'

export default function SignupPage() {
  return (
    <form>
      <label htmlFor="firstName">Firstname</label>
      <input id='firstName' type="text" />
      <label htmlFor="lastName">Lastname</label>
      <input id='lastName' type="text" />
      <label htmlFor="email">Email</label>
      <input id='email' type="text" />
      <label htmlFor="password">Password</label>
      <input id='password' type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
