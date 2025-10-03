import React from 'react';
import '../styles/components/projects.css';
import projects from '../data/projects';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Mes Projets</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p className="year">{project.year}</p>
                        <p className="desc">{project.description}</p>
                        <p className="techs"><strong>Technos:</strong> {project.technos}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
