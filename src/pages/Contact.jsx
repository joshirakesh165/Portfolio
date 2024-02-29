import React from 'react'
import userData from '../constants'

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src="./assets/email.png" alt="Email icon" className="icon contact-icon email-icon"/>
                    <p><a href={`mailto:${userData.email}`}>{userData.emailId}</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="./assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon"/>
                    <p style={{cursor:'pointer'}} onClick={() => window.open(userData.linkedinProfileURL, '_blank')}>LinkedIn</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
