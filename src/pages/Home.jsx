import React from 'react'
import { Link } from 'react-router-dom'
import userData from '../constants'

const Home = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={userData.homeProfilePic} alt={`${userData.name} profile picture`} />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">{userData.name}</h1>
                <p className="section__text__p2">{userData.role}</p>
                <div className="btn-container">
                    <button className="btn btn-color-2"
                        onClick={() => window.open(userData.resumePDFurl, '_blank')}>
                        Download CV
                    </button>
                    <Link className="btn btn-color-1" to={'/contact'}>Contact Info</Link>
                </div>
                <div id="socials-container">
                    {userData.socials.map((social,index) =>  social.profileURL && (
                        <img src={localStorage.getItem('theme') == 'dark' ? social.logoW : social.logoB} key={index}
                            alt={social.name}
                            className="icon"
                            onClick={() => window.open(social.profileURL, '_blank')}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home
