import React from 'react';
import './Header.css';
import Carbutton from '../CardButton/Cardbutton';
// import { HiMiniShoppingCart } from "react-icons/hi2";


function Header() {
  return (
   <header className='header'>

    <h1>MKS<spam> Sistemas</spam></h1>
     <div className='header__btn'>
        <Carbutton/>
        {/* <button><HiMiniShoppingCart /></button> */}
     </div>
    

   </header>
  );
}

export default Header;