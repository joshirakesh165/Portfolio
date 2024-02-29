import React from 'react'
import userData from '../constants'

const Experience = () => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {userData.skillDetails.map((skillDetail, index) => (
                        <div className="details-container" key={index}>
                            <h2 className="experience-sub-title">{skillDetail.name}</h2>
                            <div className="article-container">
                                {skillDetail.skills.map((skil, ind) => (
                                    <article key={ind}>
                                        <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                                        <div>
                                            <h3>{skil.name}</h3>
                                            <p>{skil.level}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
