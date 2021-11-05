import React from 'react'
import { useState } from 'react'

const Login = () => {


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('') 

    const submit= async (e)=>{
        e.preventDefault();
        
        await fetch('https://localbitz.deta.dev/customers/login', {
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type' : 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password})}
        )}

    return (
        <div className="login">
            <form>
                <h1 className="login-title">Login</h1>
                <input type="email" name="email" placeholder="Email" required="required" className="register-email" 
                    onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" required="required" className="register-password"
                    onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" className="register-button" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
