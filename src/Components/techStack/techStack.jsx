import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"

import "./techStack.css"
function TechStack() {
  return (
    <div>
      <section id="techStack">
        <h5>What skill I have ?</h5>
        <h2>My Tech Stack!</h2>

        <div className="container techstack__container">
          <div className="techstack__frontend">
            <h3>Frontend Development</h3>
            <div className="techStack__content">
              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>HTML5</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>CSS3</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>

                  <h4>BootStrap</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Chakra UI</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Git & Github</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4> TypeScript </h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>VS Code</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
            </div>
          </div>
          {/* start of backernd */}
          <div className="techstack__backend">
            <h3>Backend Development</h3>
            <div className="techStack__content">
              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Express JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>


              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Postman</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>NPM</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className='techstack__details'>
                <BsPatchCheckFill className='techstack__details-icon'/>
                <div>
                  <h4>Data structres and algorithms</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

            </div>
          </div>
          {/* Data structre and algorithms */}
          {/*  */}
          {/* soft skills */}
          <div className="techstack__backend">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStack