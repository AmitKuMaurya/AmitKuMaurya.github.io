import React from 'react'
import Resume from "../../Resources/AmitKumarMaurya.pdf"
import "./Header.css"
function ResumeBtn() {
  return (
    <div 
    className='resume'
    >
        <a className='btn' href={Resume} download >My Resume</a>
        <a className='btn btn-primary' href="#contact">Have Chat</a>
    </div>
  )
}

export default ResumeBtn