import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import {AiFillMail} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"

import "./styles.css";

function Footer() {
  return (
    <div className="footer-body">
      <div className="contacts">
        <ul className="list-contacts">
          <li className="contact-item">
            <BiPhoneCall className="icon-footer" /> +55 5599699-9090
          </li>
          <li className="contact-item">
            <AiFillMail className="icon-footer" /> empresa-nina@hotmail.com
          </li>
          <li className="contact-item">
            <AiFillInstagram className="icon-footer" /> @empresa-nina
          </li>
          <li className="contact-item">
            <AiFillFacebook className="icon-footer" /> empresa-nina
          </li>
          
        </ul>
      </div>

      <div className="">
          <h3>Localização</h3>
      </div>
    </div>
  );
}

export default Footer;
