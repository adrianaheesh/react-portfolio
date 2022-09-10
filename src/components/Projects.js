import React from 'react'
import { useEffect, useState } from 'react'
import { Card, PageContainer } from '../styled/projects'

const Projects = () => {
    const [myProjects, setMyProjects] = useState([])

    const getProjects = () => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setMyProjects(data))
        .catch(console.error)
    }

    useEffect(()=>{
        getProjects()
    }, [])

    return (
        <PageContainer>
            <h1>Projects</h1>
            {myProjects.map((project) => {
                return <Card key={project.id} id={project.id}>
                    <h3>{project.name}</h3>
                    <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.name} website`}/></a>
                    <div>
                        <p>{project.description}</p>
                        <p><strong>Tech stack:</strong> {project.techStack.join(', ')}</p>
                    </div>
                </Card>
            })}
        </PageContainer>
    )
}

export default Projects