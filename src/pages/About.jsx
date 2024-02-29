import React from 'react'
import userData from '../constants'

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src="./assets/pic-about.jpeg" alt="Profile picture" className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>{userData.experience} <br />{userData.role}</p>
                        </div>
                        <div className="details-container">
                            <img src="./assets/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            {userData.education.map((edu,index) => <div key={index}>{edu}</div>)}
                        </div>
                    </div>
                    <div className="text-container">
                        <p>{userData.aboutMeDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
