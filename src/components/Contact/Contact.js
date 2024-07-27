import React, { useRef }from 'react';
import './contact.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ieoz63n', 'template_291oxmw', form.current, {
            publicKey: 'cc2_62-ft4Esmo0yu',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email Sent')
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
      return(
      <div id='contactPage'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='your name' name='your_name'/>
          <input type='email' className='email' placeholder='your email' name='your_email' />
          <textarea className='msg' name='message'  row='5' placeholder='Your Message'></textarea>
          <button className='submitBtn' type='Submit' value='Send'>Submit</button>

          <div className='links'>
          <a href='https://www.facebook.com/julzpalanas/'><FaFacebook className='link'/></a>
          <a href='https://github.com/jpalanasjr'><IoLogoGithub className='link'/></a>
          <a href='https://www.linkedin.com/in/julius-palanas-jr-691ab4173/'><FaLinkedin className='link'/></a>
          </div>
      </form>
  </div>
      )
}

export default Contact