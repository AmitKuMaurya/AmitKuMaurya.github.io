import React from 'react'
import { useState } from 'react';
import {AiOutlineHome, AiOutlineUser,AiOutlineFundProjectionScreen} from "react-icons/ai"
// import { Link } from 'react-router-dom'
import { BiMessageSquareDetail} from "react-icons/bi"
import {GrTechnology} from "react-icons/gr"
import "./Navbar.css";



function Navbar() {
  const [stay,setStay] = useState("#");
  return (
    <div>
      <nav>
        <a onClick={()=> setStay("#")} className={stay === "#" ? "active" : ""} href='#'><AiOutlineHome/></a>
        <a onClick={()=> setStay("#about")} className={stay === "#about" ? "active" : ""} href='#about'><AiOutlineUser/></a>
        <a onClick={()=> setStay("#techstack")} className={stay === "#techstack" ? "active" : ""} href='#techStack'><GrTechnology/></a>
        <a onClick={()=> setStay("#project")} className={stay === "#project" ? "active" : ""} href='#project'><AiOutlineFundProjectionScreen/></a>
        <a onClick={()=> setStay("#contact")} className={stay === "#contact" ? "active" : ""} href='#contact'><BiMessageSquareDetail/></a>
      </nav>
    </div>
  )
}

export default Navbar