import React from 'react'
import Button from '../../Components/Button/Button'
import './landing.scss'

const landing = () => {
    return (
        <div className="landing-pg">
        <div className="container">
        <h1>LocalBitz</h1>
        <p>Home Cooked Food at your doorsteps!!</p>
        <div className="Button-grp"> 
            <Button name="Login" />
            <Button name="Register" />
        </div>
      </div>
      </div>
    )
}

export default landing
