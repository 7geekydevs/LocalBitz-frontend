import React from 'react'

const CookItems = ({name,price}) => {
    return (
        <>
        <div className="cookMenu">
                   <div className='item-name'>
                       <p>Name : {name}</p>
                   </div>
                   <div className='add-minus-quantity'>
                       <i className="fas fa-minus minus"></i>
                       <input type="text" placeholder='2'  />
                       <i className="fas fa-plus add"></i>

                   </div>
                
                  <div className='item-price'> <p>Price : Rs {price}</p></div>
                   {/* <button className="order">Order</button> */}
                   
                </div>     
            
        </>
    )
}

export default CookItems

