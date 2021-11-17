import React from 'react'
// import styleLogin from './CSS/styleLogin.css'

export default function Login() {
    return (
        <div>
            <div className="main-form">
      <div><input type="text" className="inp" placeholder="Username"/></div>
      <div><input type="password" className="inp" id="inputpswd" placeholder="Password"/></div>
     <div style ={{textAlign:"center"}}> <button>Login</button></div>
      </div>
        </div>
    )
}
