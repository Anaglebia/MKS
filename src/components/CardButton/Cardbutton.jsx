import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import './Cardbutton.css';

function Carbutton(){
    return(
        <div>
            <button><HiMiniShoppingCart />
            <spam className='cart-status'> 0 </spam>
            </button>
            
        </div>
    )
}

export default Carbutton;