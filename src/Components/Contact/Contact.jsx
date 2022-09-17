import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_027u0bu', 'template_ytjf8ra', form.current, '4DO61MTpFWKoXkJwl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">

          <div className='contact__options'>
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email </h4>
                <h5>amit69@maurya69@gmail.com</h5>
                <a href="mailto:amit69@maurya69@gmail.com">Send a message...</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon' />
                <h4>Facebook </h4>
                <h5>Ãmít Mãúrýã</h5>
                <a href="https://www.facebook.com/amitmaurya.maurya.796">Send a message...</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
                <h4>Whatsapp</h4>
                <h5>+919711512705</h5>
                <a href="https://api.whatsapp.com/send?phone+919711512705">Send a message...</a>
            </article>
          </div>

          {/* contcat us form  */}
          <form ref={form} onClick={sendEmail} >
            <input type="text" name='name' placeholder='Enter your name' required/>
            <input type="email" name='email' placeholder='Enter your email' required/>
            <textarea name="message" placeholder='Your message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

        </div>
      </section>
    </div>
  )
}

export default Contact