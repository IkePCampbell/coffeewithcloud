import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import { Helmet } from 'react-helmet'
init(process.env.REACT_APP_USER)

const ContactMe = () => {
  const [ enabled, setEnabled ] = useState(true)
  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
        
    alert('Thank you so much for the message! I will get back to you as soon as I can!!')
    document.getElementById('contact-form').reset()
  }
    
  const changeSubmit = () => {
    setEnabled(false) 
  }
    
  return (
    <form id ="contact-form" className="contact-form col-sm-10 col-md-8" onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" required className="form-control" placeholder="Name" id="name" aria-describedby="name" />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input type="email" required className="form-control" placeholder="Email" id="email" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="subject">Subject</label>
        <input type="text" required className="form-control" placeholder="Subject" id="subject" aria-describedby="subject" />
      </div>
      <div className="form-group">
        <label for="message">Message</label>
        <textarea type="text" rows="3" required className="form-control" placeholder="Message" id="message" aria-describedby="subject" />
      </div>
      <div className = "submitSection col-sm-10 col-md-8">
        <ReCAPTCHA sitekey={process.env.REACT_APP_KEY} onChange={changeSubmit}/>
        <br/>
        <button type="submit" className="btn btn-primary w-100" disabled={enabled} value="Submit" style={{ cursor: 'pointer' }}>
          Submit
        </button>
      </div>

    </form>
  )

}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Me</title>
      </Helmet> 
      <div>
        <ContactMe />
      </div>  
    </>
  )
}