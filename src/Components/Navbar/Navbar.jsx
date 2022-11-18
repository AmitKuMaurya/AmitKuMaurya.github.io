// import React from 'react'
// import { useState } from 'react';
// import {AiOutlineHome, AiOutlineUser,AiOutlineFundProjectionScreen} from "react-icons/ai"
// // import { Link } from 'react-router-dom'
// import { BiMessageSquareDetail} from "react-icons/bi"
// import {GrTechnology} from "react-icons/gr"
import Resume from "../../Resources/AmitKumarMaurya.pdf"
// import Resume from "../../Resources/AmitKumarMaurya.pdf"
import "./Navbar.css";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div className="fixing">
			<header className="header_n">
			<h2>AM<span style={{color:"black"}} >IT</span></h2>
			<nav ref={navRef}  >
				<a href="#">Home</a>
				<a href="#about">About</a>
				<a href="#techStack">Skills</a>
				<a href="#stats">Github Stats</a>
				<a href="#project">Projects</a>
				<a href="#contact">Contact Me</a>
				<a className='btn' href={Resume} download >Resume</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header >
		</div>
	);
}

export default Navbar;



// function Navbar() {
//   const [stay,setStay] = useState("#");
//   return (
//     <div>
//       <nav>
//         <a onClick={()=> setStay("#")} className={stay === "#" ? "active" : ""} href='#'><AiOutlineHome/></a>
//         <a onClick={()=> setStay("#about")} className={stay === "#about" ? "active" : ""} href='#about'><AiOutlineUser/></a>
//         <a onClick={()=> setStay("#techstack")} className={stay === "#techstack" ? "active" : ""} href='#techStack'><GrTechnology/></a>
//         <a onClick={()=> setStay("#project")} className={stay === "#project" ? "active" : ""} href='#project'><AiOutlineFundProjectionScreen/></a>
//         <a onClick={()=> setStay("#contact")} className={stay === "#contact" ? "active" : ""} href='#contact'><BiMessageSquareDetail/></a>
//       </nav>
//     </div>
//   )
// }

// export default Navbar