import React from "react";
import './navbar.css'
import { FaSquareTwitter ,FaSquareFacebook, FaSquareGooglePlus ,FaSquareYoutube} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-content">
                <h3>CleverCode</h3>
                <p>CleverCode is a website where you will find greate tutorials relted to web development and design</p>
                </div>
               
            <ul className="social">
                
                <li>
                    <a href="" ></a>
                    <FaSquareFacebook className="fb "/>
                </li>
                <li>
                    <a href=""></a>
                    <FaSquareTwitter className="twitter"/>
                </li>
                <li>
<a href="#"></a>
<FaSquareYoutube  className="yt"/>
        </li>
                <li>
                    <a href=""></a>
                    <FaLinkedin  className="linkedln"/>

                </li>
                <li>
                    <a href=""></a>
                    <FaSquareGooglePlus  className="googleplus"/>

                </li>
            </ul>
            <div className="footer-bottom">
                <hr/>
                <div className="footer-section">
                <p>@{new Date().getFullYear()} CleverCode. All Rights Reserved</p>
                
               
                   </div>     
            </div>
        </div>
    )
}

export default Footer;