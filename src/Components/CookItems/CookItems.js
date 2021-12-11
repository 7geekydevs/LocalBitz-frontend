import React from 'react';
import {useState} from 'react';




const CookItems = ({name,price}) => {

     const [count,setCount] = useState(0)

     const increment = () =>{
         setCount(count+1)
         
     }
     const decrement = () => {
         if (count > 0) {
             setCount(count-1)
         }
     }
     
     

    return (
        <>
        <div className="cookMenu">
                   <div className='item-name'>
                       <p>Name : {name}</p>
                   </div>
                   
                
                   <div className='add-minus-quantity'>
                    <button className='add' onClick={increment}> <b>+</b></button>
                       <input type="text" placeholder= {count}/>
                       <button className='minus' onClick={ decrement}> <b>-</b></button>
                       
                       
                   </div>
                
                  <div className='item-price'> <p>Price : Rs {price}</p></div>
                   
                   
                </div>  
                

            
        </>
    )
}

export default CookItems

