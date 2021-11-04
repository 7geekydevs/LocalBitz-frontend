import React from 'react'
import './landing.scss'
//import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'



const Landing = () => {
    
    return (
        <div className="landing-pg">
        <div className="container">
        <h1>LocalBitz</h1>
        <p>Home Cooked Food at your doorsteps!!</p>
        <div className="Button-grp"> 
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        </div>
        </div>
    )
}

export default Landing
