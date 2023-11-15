import React from 'react';
import './Header.css';
import { HiMiniShoppingCart } from "react-icons/hi2";
// import { FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
   <header className='header'>

    <h1>MKS<spam> Sistemas</spam></h1>
     <div className='header__btn'>
        <button><HiMiniShoppingCart /></button>
     </div>
    
    {/* <FiShoppingBag /> */}
   </header>
  );
}

export default Header;