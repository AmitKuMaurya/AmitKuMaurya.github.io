import React from 'react'
import "./About.css"
import Me from "../../Resources/my_pic2.png"

function About() {
  return (
    <div>

      <section id='about'>
        <h5>Know more</h5>
        <h2 >About</h2>

        <div className='container about__container'>
          <div className='about__me__image'>
            <img src={Me} alt="about image" />
          </div>

          <div className='about__content'>
              <h3>Hii <span>👋</span> , I am <span>Amit Maurya</span>, a 19 year old <span>MERN Developer</span>, living in New Delhi, India. I am very curious to learn something learn everyday.</h3>
              <h3>Have a look at my Projects , skills or just connect with me on LinkedIn. I am always willing to work or help with amazing folks.  </h3>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About