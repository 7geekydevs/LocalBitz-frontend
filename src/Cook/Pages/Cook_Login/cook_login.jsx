import React from 'react'
import { useState } from 'react'
import '../Cook_Login/cook_login.css'
import { Link } from 'react-router-dom'

const Cook_lg = () => {


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('') 

    const submit= async (e)=>{
        e.preventDefault();
        
        await fetch('https://localbitz.deta.dev/cooks/login', {
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type' : 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password})}
        )}

    return (
        <div className="login">
            <form className='login-form'>
                <h1 className="login-title">Login</h1>
                <input type="email" name="email" placeholder="Email" required="required" className="login-email" 
                    onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" required="required" className="login-password"
                    onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" className="register-button" onClick={submit}>Submit</button>
                <Link to="/cooks" className="reg-login">Register as cook</Link>
            </form>
        </div>
    )
}

export default Cook_lg
