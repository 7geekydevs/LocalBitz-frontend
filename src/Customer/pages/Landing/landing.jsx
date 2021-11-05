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
            <Link to="/customers" className="btn login-btn">Customer</Link>
            <Link to="/cooks" className="btn register-btn">Cook</Link>
        </div>
        </div>
        </div>
    )
}

export default Landing
