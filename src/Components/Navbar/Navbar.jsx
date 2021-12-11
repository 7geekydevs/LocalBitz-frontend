import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <li className="branding">
                <Link to="/" className="nav-brand">Local <span>Bitz</span></Link>
            </li>
            <li className="nav-item">
            <li>
                <Link to="/cooks" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/dummy" className="nav-link">About</Link>
            </li>
            <li>
                <Link to="/dummy" className="nav-link">Profile</Link>
            </li> 
            </li>       
        </div>
    )
}

export default Navbar
