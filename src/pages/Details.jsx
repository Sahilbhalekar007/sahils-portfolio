import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../components/Projects'
import { api } from './Dashboard'
import { useEffect } from 'react'

const Details = () => {
    const { pid } = useParams()
    const [selectedProject, setSelectedProject] = useState()
    const getSelectedProject = async () => {
        try {
            const { data } = await api.get(`/projects/${pid}`)
            setSelectedProject(data)
        } catch (error) {

        }
    }
    // const selectedProject = PROJECTS.find(item => item.id === +pid)
    // console.log(selectedProject)
    useEffect(() => { getSelectedProject() }, [])
    return <>
        {
            selectedProject && <div className='mx-80 py-12'>
                <Link to="/" className='my-4 border px-4 py-1 border-gray-700 rounded-lg hover:bg-slate-600 hover:text-slate-100'>Back</Link>
                <h1 className='my-4'>Devloper :John Doe</h1>
                <img src={selectedProject.thumb} alt="" />
                <h1 className='text-3xl my-6 font-bold text-gray-700'>{selectedProject.name}</h1>
                <h1 className='text-gray-500 mb-8'>{selectedProject.desc}</h1>
                <a href={selectedProject.link} className='bg-red-400 px-4 py-2 rounded-md'>Visit Live Projects</a>
            </div>
        }
    </>
}

export default Details