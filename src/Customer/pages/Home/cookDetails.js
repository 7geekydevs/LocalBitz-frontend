/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './cookDetails.css'
import ContextCart from '../../../Components/ContextCart/ContextCart';
import { createContext } from 'react';
import { useEffect,useState } from 'react'
export const CartContext = createContext();

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
        
        <CartContext.Provider value={menu}>
            <ContextCart/>
        </CartContext.Provider>
       
        
    );
}

export default cookDetails
