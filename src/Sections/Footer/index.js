/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./styles.css";
import Map from "../../Components/Map"

function Footer() {
  return (
    <div className="footer-body">
      <div className="contacts">
       <h2 className="contacts-title">Contatos</h2>
        <ul className="list-contacts">
          <li className="contact-item">
            <BiPhoneCall className="icon-footer" /> +55 5599699-9090
          </li>
          <li className="contact-item">
            <AiFillMail className="icon-footer" /> jordam@hotmail.com
          </li>
          <li className="contact-item">
            <AiFillInstagram className="icon-footer" /> @jordan
          </li>
          <li className="contact-item">
            <AiFillFacebook className="icon-footer" /> Jordan
          </li>
        </ul>
      </div>
      <div className="localization">
        <h2 className="title-localization">Localização</h2>
        <Map/>
      </div>

    </div>
    
  );
}

export default Footer;
