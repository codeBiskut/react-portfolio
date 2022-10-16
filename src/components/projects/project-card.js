import React from "react";
import './project-card.css'

function ProjectCard({project}){
    return(
        <div className="project-card card m-4 mb-5 p-3 border border-secondary">
            <div className="project-info d-flex align-items-center justify-content-around">
                <label className="project-title m-3 p-1">{project.title}</label>
                <div className="project-links d-flex align-items-center m-3 justify-content-around">
                    {project.demo && (
                        <a className="project-link icon-size px-1" href={project.demo} target="_blank">
                            <div className="link-button">
                            <i className="fa-solid fa-globe"></i>
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link icon-size px-1" href={project.github} target="_blank">
                            <div className="link-button">
                            <i className="fa-brands fa-github p-3"></i>
                            </div>
                        </a>
                    )}
                </div>
                <p className="m-3 p-1">{project.about}</p>
            </div>
            <img src={project.image} className='project-photo rounded border' />
        </div>
    )
}

export default ProjectCard;