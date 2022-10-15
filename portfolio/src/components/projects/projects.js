import React from "react";
import {ProjectData} from "../data/projectData";
import ProjectCard from "./project-card";
import './projects.css'

function Projects() {

    const data = ProjectData;

    return (
        <div className="projects justify-content-center">
            <label className="section-title display-5 d-flex justify-content-center ">Projects</label>
            <hr className="rounded justify-content-center"></hr>
            <div>
                {data.map((project) => {
                    return <ProjectCard project = {project} />
                })}
            </div>
        </div>
    )
}

export default Projects;