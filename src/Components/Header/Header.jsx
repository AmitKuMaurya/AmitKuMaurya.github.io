import React from 'react'
import ResumeBtn from './ResumeBtn'
// import me from "../../Resources/my_pic2.png"
import HeaderSocialMedia from './HeaderSocialMedia'
import "./Header.css"
function Header() {
  return (
    <div>
      <header>
          <div className="container header__container">
            <div>
            <h5>Hello People, I am</h5>
            <h1>Amit Maurya</h1>
            <h5 className='text-light'> Full Stack MERN Developer</h5>

          <ResumeBtn/>
            <HeaderSocialMedia/>

            </div>

            <div >
              <img className='me' src="https://d1aettbyeyfilo.cloudfront.net/kunalk/29015633_1656230447PBmOnline_document-pana.webp" alt="my pic" />
            </div>

          {/* <div style={{display:"flex",marginTop:"3rem", justifyContent : "space-evenly"}}>
            <div>

            </div>
            

          </div> */}
          </div>

          <a href="#contact" className='scroll__down' >Contact me</a>
      </header>
    </div>
  )
}

export default Header