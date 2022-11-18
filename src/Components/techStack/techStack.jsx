import React from 'react'
// import { BsPatchCheckFill } from "react-icons/bs";

import "./techStack.css"
function TechStack() {
  return (
    <div>
      <section id="techStack">
        <h5>What skills do I have ?</h5>
        <h2>My Skills Stack!</h2>

        <div className="container techstack__container">
            <div className="skill__content">
             
                <div className='skill__details'>
                  <h2 className='text-light'>Front-End Development</h2>
                </div>
              
                <div className='skill__details'>
                  <h2 className='text-light'>Back-End Development</h2>
                </div>
              
                <div className='skill__details'>
                  <h2 className='text-light'>Data Structures & Algorithms</h2>
                </div>
              
                <div className='skill__details'>
                  <h2 className='text-light'>Communication Skills</h2>
                </div>
         
          </div>

          <h2>My Technical Skills!</h2>

          <div className="techstack__frontend">
            {/* <h3>Frontend Development</h3> */}
            <div className="techStack__content">
              <article className='techstack__details'>
                {/* <BsPatchCheckFill className='techstack__details-icon'/> */}
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/html.75bdf0b0.svg" alt="" />
                  <small className='text-light'>HTML5</small>
                </div>
              </article>

              <article className='techstack__details'>
                <div>
                <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/css.afb434f6.svg" alt="" />
                  <small className='text-light'>CSS3</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/javascript.f84ec710.svg" alt="" />
                  <small className='text-light'>JavaScript</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/bootstrap.3b3ab2cf.svg" alt="" />
                  {/* <h4>BootStrap</h4> */}
                  <small className='text-light'>BootStrap</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://spsanchore13.github.io/shantilal/static/media/chakralogo.6d4684d36d618b85afe2.png" alt="" />
                  <small className='text-light'>Chakra UI</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/react.c3a0b34a.svg"  alt="" />
                  
                  <small className='text-light'>React</small>
                </div>
              </article>

              <article className='techstack__details'>
                <div>
                  <img height={"50%"} src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
                  <small >Redux</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                  <small className='text-light'>Github</small>
                </div>
              </article>

              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/typescript.f66836b8.svg" alt="" />
                  <small className='text-light'>TypeScript</small>
                </div>
              </article>
              <article className='techstack__details'>
                
                <div>
                  <img height={"50%"} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8908513%3Fs%3D400%26v%3D4&f=1&nofb=1" alt="" />
                  <small className='text-light'>Cypress</small>
                </div>
              </article>

              <article className='techstack__details'>
                <div>
                  <img height={"50%"} src="https://spsanchore13.github.io/shantilal/static/media/mongodb.0781b723446e1f8a1734f7831a9c3313.svg" alt="" />
                  <small className='text-light'>MongoDB</small>
                </div>
              </article>

              <article className='techstack__details'>
                <div>
                  <img height={"50%"} src="https://spsanchore13.github.io/shantilal/static/media/nodejs.615ffbea9529ca7047ed8a912bfd94b2.svg" alt="" />
                  {/* <h4></h4> */}
                  <small className='text-light'>Node JS</small>
                </div>
              </article>

              <article className='techstack__details'>
               
                <div>
                  <img height={"50%"} src="https://spsanchore13.github.io/shantilal/static/media/expressjs.632d3c32e6c8f71f7f7faf4fb71b945b.svg" alt="" />
                  <small className='text-light'>Express JS</small>
                </div>
              </article>


              <article className='techstack__details'>
               
                <div>
                  <img height={"50%"} src="https://rajatsoni.netlify.app/static/media/git.2d7df16e.svg" alt="" />
                  <small className='text-light'>Git</small>
                </div>
              </article>

              <article className='techstack__details'>
                <div>
                  <img height={"50%"} src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
                  <small className='text-light'>Postman</small>
                </div>
              </article>
              <article className='techstack__details'>
               
                <div>
                  <img height={"50%"} src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" alt="" />
                  <small className='text-light'>NPM</small>
                </div>
              </article>
              <article className='techstack__details'>
               
                <div>
                  <img height={"50%"} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" alt="" />
                  <small className='text-light'>Mongoose</small>
                </div>
              </article>
            </div>
          </div>
        



          {/* start of backernd */}

          {/* <div className="techstack__backend">
            <h3>Backend Development</h3>
            <div className="techStack__content">
              


            </div>
          </div> */}
          
          {/* Data structre and algorithms */}
          {/*  */}
          {/* soft skills */}
          {/* <div className="techstack__backend">
            <h3>Soft Skills</h3>
            <div className="techStack__content">
              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Problem solving</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Teamwork</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Interpersonal Skill</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Creative thinking</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default TechStack