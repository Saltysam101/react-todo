import React from 'react'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id='email' type="text" />
      <label htmlFor="password">Password</label>
      <input id='password' type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
