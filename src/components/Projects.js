import React from 'react'
import { ProjectCard } from './ProjectCard'
import { PROJECTS_DATA } from '../utils/data'

const Projects = () => {

    const projectData = PROJECTS_DATA;



    return (
        <div className="projects_container">
            <div className="projects_info">
                <h2>Proyectos en los que he participado</h2>
                <p className="projects_body">Durante estos años he participado en proyectos tanto universitarios como personales,
                    de manera que tanto el trabajo en equipo como individual me resultan muy cómodos.
                </p>
            </div>
            {/*<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 */}
            <div>
                <div className="projects_card-container">
                    {
                        projectData.map(item => (
                            <ProjectCard key={item.id} data={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;