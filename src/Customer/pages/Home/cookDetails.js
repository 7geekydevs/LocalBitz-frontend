/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import './cookDetails.css'

const cookDetails = () => {

    let cookId =localStorage.getItem('cookId')

    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch(`https://localbitz.deta.dev/menu?cook=${cookId}`)
        .then(res=>res.json())
        .then(data=>{
            setMenu(data)
        })
    },[cookId])


    return (
        <div>
            <Navbar />
            <div className="container">
            {menu.map(menu =>(
                    <div className="cookMenu">
                   <p>{menu.name}</p>
                   <p>{menu.price}</p>
                </div>      
            ))}
            </div>
        </div>
    )
}

export default cookDetails
