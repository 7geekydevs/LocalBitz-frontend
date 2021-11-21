/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import './home.scss'
//import { Link } from 'react-router-dom'

const home = () => {

    const [cook,setCooks]=useState([])


    useEffect(()=>{
        fetch('https://localbitz.deta.dev/cooks')
        .then(res=>res.json())
        .then(data=>{
            setCooks(data)
            console.log(data)
        })
    },[])

    
    return (
        <div>
            <Navbar/>
            <div className="pageTitle"><h1>Our Cooks</h1></div>
            <div className="item-container">
                {cook.map(cook=>(
                    <div className="card">
                        <img src={cook.pfp} alt="cook"/>
                        <h3>{cook.name}</h3>
                        <p>{cook.address.city}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default home
