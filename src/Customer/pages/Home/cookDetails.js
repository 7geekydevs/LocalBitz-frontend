/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import './cookDetails.css'
import CookItems from '../../../Components/CookItems/CookItems'

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
            {menu.map((menu) =>{
                return <CookItems key = {menu._id} {...menu}/>

            }
               
                     
            )}
            </div>
            <div className='card-total'>
                <h3>Cart Total: <i className="fas fa-rupee-sign"></i><span> 500</span></h3>
                <button>CheckOut</button>
            </div>
        </div>
    )
}

export default cookDetails
