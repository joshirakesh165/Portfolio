import React from 'react'
import userData from '../constants'

const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {userData.projects?.map((project,index) => (
                        <div className="details-container color-container" key={index}>
                            <div className="article-container">
                                <img src={project.logo} alt={project.name} className="project-img" />
                            </div>
                            <h2 className="experience-sub-title project-title">{project.name}</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => window.open(project.repoLink, '_blank')}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => window.open(project.demoLink, '_blank')}
                                > Live Demo
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects
