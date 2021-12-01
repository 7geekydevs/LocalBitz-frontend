/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import './home.scss'
//import { Link } from 'react-router-dom'
//import { Redirect } from 'react-router-dom'

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

    //click on cook card to take to cook profile

    const getCookMenu = (id) => {
        //console.log(id)
        localStorage.setItem('cookId',id)

        //window.location.href = `/menu?cook=$('id')`
        //console.log(localStorage.getItem('cookId'))
        window.location.href = `/menu?cook=${id}`
        // window.location.href = '/menu?cook=$(`cookId)'
    }

    return (
        <div className="homeCookCards">
            <Navbar/>
            <div className="pageTitle"><h1>Our Cooks</h1></div>
            <div className="item-container">
                {cook.map(cook=>(
                    <div className="card" key={cook._id} onClick={()=>getCookMenu(cook._id)}>
                        <h3 className="card-title" >{cook.name}</h3>
                        <p>{cook.address.city}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default home
