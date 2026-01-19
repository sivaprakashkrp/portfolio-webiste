import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <React.Fragment>
        <div id="projects">
            <h2 className="section-heading">My Projects.</h2>
            <div className="projects-cont md:grid grid-cols-2 md:w-3/4 mx-auto gap-10 flex justify-center flex-col md:py-10 px-5">
                {projects.map((project) => (
                    <ProjectCard  key={project.id} project={project}/>
                ))}
            </div>
        </div>
    </React.Fragment>
  )
}

const ProjectCard = ({project}) => {
    return (
        <React.Fragment>
            <div className="project-card-cont double-dashed-border flex flex-col justify-between gap-1 font-mono">
                <p className="font-crt text-3xl font-bold">{project.title}</p>
                <p className="font-mono">{project.description}</p>
                <div className="tech-used-blobs flex flex-wrap my-2">
                    {project.tech_used.map((tech) => (
                        <div key={tech} className="tags">{tech}</div>
                    ))}
                </div>
                <div className="project-card-buttons flex">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="card-btn project-card-btn">
                        GitHub
                    </a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-btn project-card-btn">
                        View Project
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects
