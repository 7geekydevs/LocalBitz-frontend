import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './customer_login.css'
import Lottie from 'react-lottie'
import animationData from '../../../Lotties/50124-user-profile.json'

const Login = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
        };

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
        )
        .then(res => res.json())
        .then(res => {
            //save token to local storage
                localStorage.setItem('token', res.token)
                localStorage.setItem('customer_id', res._id)
        })
        .then(res => {
            //redirect to home page
            window.location.href = '/cooks'            
        })
        .catch(err => console.log(err))
    }
       



    return (
        <div className="login">
            
            <form>
                <h1 className="login-title">Login</h1>
                <input type="email" name="email" placeholder="Email" required="required" className="register-email" 
                    onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" required="required" className="register-password"
                    onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" className="login-button" onClick={submit}>Submit</button>

                <Link to="/customers" className="register-login">New user?</Link>
            </form>
            <Lottie className="login-lottie" options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default Login
