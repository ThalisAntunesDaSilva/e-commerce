import React from "react";
import  './styles.css';
import logo from '../../assets/logoNina.png';
import {BsCart} from 'react-icons/bs'

function NavBar() {
  return (
    <div className="navbar-body">
     
     <div className="navbar-logo">
      <img className="logo"src={logo}/>
     </div>


     
      <BsCart className="cart-icon"/>
  
    
     

    </div>
  );
}

export default NavBar;
