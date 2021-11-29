import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Lotties/78267-food-choice.json'
//import { Link } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
import './landing.scss'


const landing = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
        };

        const Register=()=>{
            window.location.href='/customers'
        }
    return (
        <div class="landing">
            <div class="landing-text-container">
                <h2 className="landing-text">LocalBitz</h2>
                <p className="landing-info">Craving for Home Cooked Food?
                <br/>
                    Get your food delivered to your doorstep in no time!
                </p>
            <div className="btn-grp">
                <div className="btn login-btn" onClick={Register}>Order Now</div>
            </div>
            </div>
            <div className="landing-animation">
                <Lottie className="landing-animation" options={defaultOptions} height={350} width={400} /> 
            </div>     
        </div>
    )
}

export default landing
