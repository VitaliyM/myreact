import React from 'react';
import './projects.css';


function Projects({projectsDataList}) {
  return (
    <div className='projects-block'>
      <h2 className='projects-block__header'>Projects</h2>
      <div className='projects-block__project'>

        {projectsDataList.map((project) => {
          return (
            <div className='project'>
              <img src={project.img} alt={project.title} className='project__image' />
              <div className='project__title'>{project.title}</div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Projects