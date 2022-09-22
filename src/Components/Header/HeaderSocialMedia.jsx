import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

import "./Header.css"


function HeaderSocialMedia() {
  return (
    <div 
    className='header__socials'
    >
        <a href= "https://www.linkedin.com/in/amit-maurya-a494ba225/" target={"_blank"}><BsLinkedin/></a>
        <a href="https://github.com/AmitKuMaurya" target={"_blank"}><BsGithub/></a>
        <a href="https://twitter.com/i_amitmaurya" target={"_blank"}><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocialMedia