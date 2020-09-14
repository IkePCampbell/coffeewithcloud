import React, {useState} from 'react'
import Header from '../Header/Header'
import emailjs from 'emailjs-com'
import {init } from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
init("user_rDmZxoYyuflV3LIrIZoGp");

const ContactMe = () => {
    const [enabled, setEnabled] = useState(true)
    const handleSubmit = (e) =>{

        e.preventDefault();

        emailjs.sendForm('service_kwz3sfp','template_j9egi9f', e.target,'user_rDmZxoYyuflV3LIrIZoGp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }) 
        
        document.getElementById("contact-form").reset();
    }
    
    const changeSubmit = () => {
        setEnabled(false)
    }
    
    ;
    return(
        
        <form id ="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div style={{paddingBottom:"3vw"}}>
                <label>Name: </label>
                <input type="text" name="name" />
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>
            <div style={{paddingBottom:"3vw"}}>    
                <label>Subject: </label>
                <input type ="text" name ="subject" />
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Message: </label>
                <textarea name="message" />
            </div>
            <div className = "submitSection">
                <ReCAPTCHA sitekey={process.env.REACT_APP_KEY} onChange={changeSubmit} />
                <input type="submit" value="Submit" disabled={enabled} onClick={() => {alert("Thanks for the message! I'll respond to you as soon as I can!")}}/>
            </div>
        </form>
    )

};

export default function Contact() {
    return (
        <>
        <Header />
        <div>
            <ContactMe />
        </div>  
        </>
    )
}