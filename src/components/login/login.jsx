import React, { useState } from 'react'
import AdminLogin from '../AdminLogin/AdminLogin'
import UserAuth from '../userAuth/userAuth'

function Login() {
    const [login, setLogin] = useState('admin')
  return (
    <div>
        <h3>login</h3>
        <div className="d-flex">
            <button type='button' onClick={()=>{setLogin('admin')}} >Admin</button>
        <button type='button' onClick={()=>{setLogin('user')}} >User</button>
        </div>

        <div className="container">
            {login === "admin" ? <AdminLogin/> : <UserAuth/>}
        </div>
    </div>

  )
}

export default Login