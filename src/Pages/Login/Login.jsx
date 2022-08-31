import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState ()

console.log(user);
  return (
    <div>
      <label>User</label>
      <input onChange={(e)=> setUser(e.target.value)} value={user} type='text'></input>
       
        <Link to='/home'>Entrar</Link>
    </div>
  )
}

export default Login