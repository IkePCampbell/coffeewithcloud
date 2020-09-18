import React, {useState} from 'react'
import Header from '../Header/Header'
import emailjs from 'emailjs-com'
import {init } from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
import {Helmet} from 'react-helmet'
init("user_rDmZxoYyuflV3LIrIZoGp");

const ContactMe = () => {
    const [enabled, setEnabled] = useState(true)
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        
        alert("Thank you so much for the message! I will get back to you as soon as I can!!")
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
                <input type="text" name="name" required/>
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Email:</label>
                <input type="email" name="email" required/>
            </div>
            <div style={{paddingBottom:"3vw"}}>    
                <label>Subject: </label>
                <input type ="text" name ="subject" required/>
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Message: </label>
                <textarea name="message" required/>
            </div>
            <div className = "submitSection">
                <ReCAPTCHA sitekey={process.env.REACT_APP_KEY} onChange={changeSubmit}/>
                <input type="submit" disabled={enabled} value="Submit"/>
            </div>

        </form>
    )

};

export default function Contact() {
    return (
        <>
        <Helmet>
            <title>Contact Me</title>
        </Helmet>        
        <Header />
        <div>
            <ContactMe />
        </div>  
        </>
    )
}