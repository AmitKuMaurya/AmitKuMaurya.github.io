import React from 'react'
import "./Projects.css";
import IMG1 from "../../Resources/beautybebo.png";
import IMG2 from "../../Resources/lifestyle.png";
import IMG3 from "../../Resources/bathandbody.png";
import IMG4 from "../../Resources/firstpost.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: `Beauty Bebo Clone`,
    github: `https://github.com/AmitKuMaurya/imaginary-blood-7556/tree/main`,
    description : `This website is a clone of “Beauty Bebo” which is an beauty and cosmetics product store &amp; here I implemented some static design using Chakra UI &amp; , add to built Navbar, Beauty sections and Footer etc.`,
    tech: `HTML5 , CSS3, Chakra UI,Recat, JavaDcript,NPM `,
    deploy: `https://extraordinary-profiterole-70fa5d.netlify.app/`
  },
  {
    id: 2,
    image: IMG2,
    title: `LifeStyle Clone`,
    github: `https://github.com/AmitKuMaurya/LifeStyle-Collaboration`,
    description : `This project is Clone of LifeStyle E-commerce Retail, fashion, clothing web application. here I implemented sorting and filter functionality on mens page &amp;  add to cart  and cart section etc.`,
    tech: `HTML5 , CSS3, JavaScript,Bootstrap `,
    deploy: `https://friendly-pasca-c4160e.netlify.app/`
  },
  {
    id: 3,
    image: IMG3,
    title: `Bath&Body Works Clone`,
    github: `https://github.com/ShirsoBhattacharyya/Bath-BodyWorks-CW1`,
    description : `This website is a clone of “Bath&Body Works” , here I built two pages body care & hand soap & cleaners where provided filter and sorting functionality and fetched all the products.`,
    tech: `HTML5 , CSS3,  JavaScript,Bootstrap `,
    deploy: `https://joyful-donut-78c211.netlify.app/`
  },
  {
    id: 4,
    image: IMG4,
    title: `Fistpost Clone`,
    github: `https://github.com/priyanshu1120/fast-bucket-2531-firstpost-/tree/main`,
    tech: `HTML5 , CSS3, JavaScript,Bootstrap heroku `,
    description : `This is Clone of Firstpost -news web application , where I have built Home page , polical page , sports page and managed api from heroku app to fetch data`,
    deploy: ``
  }
]

function Projects() {
  return (
    <div>
      <section id='project'>
        <h5>Here are my Projercts !</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
          {
            data.map(({ id, image, title, github, tech,description, deploy }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h4> <span style={{color : "orange"}}>Description</span> :{description}</h4>
                  <h5> <span style={{color : "orange"}}>Tech Stack</span> : {tech}</h5>
                  <div className='portfolio__item-cta'>
                    <a href={github} target={"_blank"} className='btn '>Github Link</a>
                    <a href={deploy} target={"_blank"} className='btn btn-primary'  >Deployed Link</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Projects