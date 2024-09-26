import React, { useState } from "react";
import './navbar.css'
import { FaSquareFacebook,FaSquareYoutube,FaSquareInstagram } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./Footer";


function Navbar(){
    const[showmediaIcon,setShowmediaIcon]=useState(false)
    return(
        <>
        <nav className="main-nav">
<div className="logo">
    <h2>
        <span>C</span>lever
        <span>C</span>ode
    </h2>
</div>
<div className={showmediaIcon ? "menu-link mobile-menu-link": "menu-link" }>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/service">Service</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</div>

<div className="social-media">
    <ul className="social-media-desktop">
        <li>
<a href="#"></a>
<FaSquareFacebook className="facebook"/>
        </li>
        <li>
<a href="#"></a>
<FaSquareYoutube  className="youtube"/>
        </li>
        <li>
<a href="#"></a>
<FaSquareInstagram  className="instagram"/>
        </li>
    </ul>

    <div className="hamburger-menu" onClick={()=>setShowmediaIcon(!showmediaIcon)}>
        <a href="#">
            <GiHamburgerMenu/>
        </a>
    </div>
</div>
        </nav>
        {/*
        <section className="hero-section">
            <p>Welcome to</p>
            <h1>Internship Program</h1>
        </section>
*/}

      
         

      </>   
     
    )
}
export default Navbar;