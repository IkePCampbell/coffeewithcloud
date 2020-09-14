import React, {useState} from 'react'
import Header from '../Header/Header'
import emailjs from 'emailjs-com'
import {init } from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
init("user_rDmZxoYyuflV3LIrIZoGp");


const ContactMe = () => {
    const handleSubmit = (e) =>{

        e.preventDefault();
        emailjs.sendForm('service_kwz3sfp','template_j9egi9f', e.target,'user_rDmZxoYyuflV3LIrIZoGp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }) 
        
        document.getElementById("contact-form").reset();
    };
    return(

        <form id ="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Subject</label>
            <input type ="text" name ="subject" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            <ReCAPTCHA sitekey="6LfVIMwZAAAAACpuaX_L0dqd-uWDbPjlDzobTXB9"/>
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