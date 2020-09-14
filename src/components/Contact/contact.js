import React, {useState} from 'react'
import Header from '../Header/Header'
import emailjs from 'emailjs-com'
import {init } from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
init("user_rDmZxoYyuflV3LIrIZoGp");

const ContactMe = () => {
    var validator = require("email-validator")
    const [validForm, setValidForm] = useState(false)
    const [email, setValidEmail] = useState(false)
    const [subject, setValidSubject] = useState(false)
    const [name, setValidName] = useState(false)
    const [message, setValidMessage] = useState(false)
    const [enabled, setEnabled] = useState(true)
    const handleSubmit = (e) =>{
        e.preventDefault();

    if(validForm === true) {
            emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }) 
        }
        
        alert("Thank you so much for the message! I will get back to you as soon as I can!!")
        document.getElementById("contact-form").reset();
    }
    
    const changeSubmit = () => {
        console.log(email, subject, name, message)
        if(email && subject && name && message === true)
            setEnabled(false)
        else{
            setEnabled(true)
        }
    }

    const handleEmail = (email ) => {
        if(validator.validate(email)){
            setValidEmail(true)
        } else{
            setValidEmail(false)
        }
        changeSubmit()
    }

    const handleName = (e ) => {
        if( e.length >0){
            setValidName(true)
        } else{
            setValidName(false)
        }
        changeSubmit()
    }
    const handleSubject = (e ) => {
        if(e.length > 0){
            setValidSubject(true)
        }else{
            setValidSubject(false)
        }
        changeSubmit()
    }
    const handleMessage = (e ) => {
        if(e.length > 0){
            setValidMessage(true)
        } else{
            setValidMessage(false)
        }
        changeSubmit()
    }
    ;
    return(
 
        <form id ="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div style={{paddingBottom:"3vw"}}>
                <label>Name: </label>
                <input type="text" name="name" onChange={e =>handleName(e.target.value)} onKeyUp={changeSubmit}/>
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Email:</label>
                <input type="email" name="email" onChange={e =>handleEmail(e.target.value)} onKeyUp={changeSubmit}/>
            </div>
            <div style={{paddingBottom:"3vw"}}>    
                <label>Subject: </label>
                <input type ="text" name ="subject" onChange={e =>handleSubject(e.target.value)}onKeyUp={changeSubmit}/>
            </div>
            <div style={{paddingBottom:"3vw"}}>
                <label>Message: </label>
                <textarea name="message" onChange={e =>handleMessage(e.target.value)}onKeyUp={changeSubmit}/>
            </div>
            <div className = "submitSection">
                <ReCAPTCHA sitekey={process.env.REACT_APP_KEY} />
                <input type="submit" disabled={enabled} value="Submit"/>
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