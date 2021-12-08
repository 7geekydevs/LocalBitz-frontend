import React, {useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import CookItems from '../CookItems/CookItems';
import { CartContext } from '../../Customer/pages/Home/cookDetails';


const ContextCart = () => {

    const menu = useContext(CartContext)

    return (
        <>
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
        </>
    );
}

export default ContextCart
