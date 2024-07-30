import React from "react";
import "./NavBar.css";
import logo from '../assets/logo7.png'
import emailpic from '../assets/email3.png'
import {Link} from 'react-scroll';
import  { useState, useEffect } from 'react';
import menu from '../assets/menu2.png';


const NavBar=()=>{
    const[showMenu,setShowMenu]= useState(false);
return(
    <nav id="NavBar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
        <Link activeClass='active' to ="intro" spy={true} smooth={true} offset={-100} duration={500} className ="desktopMenuListItem"> Home</Link>
        <Link activeClass='active' to ="about" spy={true} smooth={true} offset={-30} duration={500} className ="desktopMenuListItem">About</Link>
        <Link activeClass='active' to ="skills" spy={true} smooth={true} offset={-10} duration={500} className ="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to ="projects" spy={true} smooth={true} offset={-60} duration={500} className ="desktopMenuListItem">Projects</Link>
        </div>
        <button className="desktopMenubtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src={emailpic} alt="contact" className="ContactImg" height={30} width={30} />
        </button>
        <img src={menu} height={40} width={40}alt="Logo" className="desktopMenuImg"  onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link activeClass='active' to ="intro" spy={true} smooth={true} offset={-100} duration={500} className ="listItem" onClick={()=>setShowMenu(false)}> Home</Link>
        <Link activeClass='active' to ="about" spy={true} smooth={true} offset={-30} duration={500} className ="listItem"  onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to ="skills" spy={true} smooth={true} offset={-10} duration={500} className ="listItem"  onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to ="projects" spy={true} smooth={true} offset={-60} duration={500} className ="listItem"  onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to ="contact" spy={true} smooth={true} offset={-60} duration={500} className ="listItem"  onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
);
}
export default NavBar;