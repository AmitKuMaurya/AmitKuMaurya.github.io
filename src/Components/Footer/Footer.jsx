import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
import {AiFillLinkedin}  from "react-icons/ai"
function Footer() {
  return (
    <div>
      <footer id='footer'>
        <a href="#" className='footer__logo'></a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#techstack">TechStack</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/amitmaurya.maurya.796/" target={"_blank"}>
            <FaFacebookF/>
          </a>
          <a href="https://www.linkedin.com/in/amit-maurya-a494ba225/" target={"_blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter/>
          </a>
        </div>
        
        <div className='footer__copyright' target={"_blank"}>
          <small> &copy; Amit Maurya. Feel free to copy no copyrights issues.</small>

        </div>

      </footer>

    </div>
  )
}

export default Footer