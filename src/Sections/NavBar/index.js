import React from "react";
import "./styles.css";
import logo from "../../assets/logoNina.png";
import { BsCart } from "react-icons/bs";

function NavBar() {
  return (
    <div className="navbar-body">
      <a className="navbar-logo" href="/">
        <img className="logo" src={logo} />
      </a>
    </div>
  );
}

export default NavBar;
