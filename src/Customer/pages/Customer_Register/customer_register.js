import React from 'react'
import './customer_register.css'
import { useState } from 'react'    // useState is a hook
import { Link } from 'react-router-dom'
import  Lottie  from 'react-lottie';
import animationData from '../../../Lotties/75062-man-with-smartphone.json'
import swal from 'sweetalert';


const Register = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
        };

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    // const baseURL = 'https://localbitz.deta.dev';

    const submit= async (e)=>{
        e.preventDefault();
        
        const response = await fetch('https://localbitz.deta.dev/customers', {
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type' : 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password})}
        )

        swal({
            text: "You are registered !!",
            icon: "success"
        }).then(function() {
            window.location = "/customers/login";
        });
        
        const content = await response.json()
        localStorage.setItem('token', content.token)
        console.log(content)
    }
        

    return (
        <div className="register">
        <form>
            <h1 className="register-heading">Register</h1>
            <input type="text" name="name" placeholder="Name" required="required" className="register-name" 
                onChange={e=>setName(e.target.value)}/>
            <input type="email" name="email" placeholder="Email" required="required" className="register-email" 
                onChange={e=>setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Password" required="required" className="register-password"
                onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" className="register-button" onClick={submit}>Register</button>

            <Link to="customers/login" className="register-login">Already have an account?</Link> 
        </form>
        <Lottie options={defaultOptions} className="registration-lottie" height={400} width={400} />
        </div>
    )
}

export default Register
