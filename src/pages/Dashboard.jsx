import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const api = axios.create({ baseURL: "http://localhost:5000/" })

const Dashboard = () => {
    const [show, setShow] = useState(false)
    const [projectData, setProjectData] = useState({})
    const [allData, setAllData] = useState([])
    const [selectedProject, setSelectedProject] = useState()
    const handleChange = e => {
        const { name, value } = e.target
        setProjectData({ ...projectData, [name]: value })
    }

    const getAllProjects = async () => {
        try {
            const { data } = await api.get("/projects")
            setAllData(data)
        } catch (error) {
            console.log(error)
        }
    }
    const addProjects = async () => {
        try {
            await api.post("/projects", projectData)
            console.log("project create success")
            toast.success("Project Added Success")
            getAllProjects()
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const updateProjects = async () => {
        try {
            await api.put(`/projects/${selectedProject.id}`, selectedProject)
            console.log("project update success")
            getAllProjects()
            toast.success("Project Updated Success")
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const deleteProjects = async id => {
        try {
            await api.delete(`/projects/${id}`)
            console.log("project delete success")
            getAllProjects()
            toast.success("Project Deleted Success")
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(() => {
        setProjectData()
    }, [])
    return <>
        <div className='w-1/2 border mx-auto rounded- my-5'>
            <div className='bg-gray-200 p-4  rounded-t-lg'>Add Project</div>
            <div className='p-4 bg-gray-50'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2' >
                    <input className='form-control' onChange={handleChange} type="text" name="name" placeholder='Enter name' />
                    <input className='form-control' onChange={handleChange} type="text" name="desc" placeholder='Enter desc' />
                    <input className='form-control' onChange={handleChange} type="text" name="link" placeholder='Enter link' />
                    <input className='form-control' onChange={handleChange} type="text" name="thumb" placeholder='Enter thumb' />
                </div>
                <button className='btn bg-slate-700  text-slate-100  mt-3 w-full' onClick={addProjects}>Add Projects</button>
            </div>
        </div>

        <table className=' w-full border overflow-hidden'>
            <thead className='text-left'>
                <tr className='border'>
                    <th className='p-2'>name</th>
                    <th className='p-2'>desc</th>
                    <th className='p-2'>link</th>
                    <th className='p-2'>thumb</th>
                    <th className='p-2'>actions</th>
                </tr>
            </thead>
            <tbody>
                <AnimatePresence>


                    {
                        allData.map(item => <motion.tr
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ x: { duration: 0.5, delay: 0.2 * 2 } }}
                            exit={{ backgroundColor: "#FF0000", x: "100%" }}
                            className='border hover:bg-gray-300 cursor-pointer'
                            key={item.id}
                        >
                            {/* <td className='p-2'>{item.id}</td> */}
                            <td className='p-2'>{item.name}</td>
                            <td className='p-2'>{item.desc}</td>
                            <td className='p-2'>{item.link}</td>
                            <td className='p-2'>{item.thumb}</td>
                            <td className='p-2'>
                                <button className='px-2 py-1 mx-2 rounded-md bg-amber-300'
                                    onClick={e => {
                                        setShow(true)
                                        setSelectedProject(item)
                                    }}
                                >
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className='px-2 py-1 mx-2 rounded-md bg-red-300' onClick={() => deleteProjects(item.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </motion.tr>)
                    }
                </AnimatePresence>
            </tbody>
        </table >

        <AnimatePresence>
            {
                show && <div className='h-screen flex items-center justify-center fixed bg-[rgba(30,30,30,0.5)] bg-gray-400 top-0 left-0 w-full'>

                    <motion.div
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ y: -500, opacity: 0 }}
                        className=' bg-white rounded-lg'>
                        <div className='bg-gray-200 p-4 rounded-t-lg flex justify-between'>Update Project
                            <span className='cursor-pointer' onClick={e => setShow(false)}><i className="bi bi-x-lg"></i></span>
                        </div>
                        <div className='p-4'>
                            <input onChange={e => setSelectedProject({ ...selectedProject, name: e.target.value })} value={selectedProject.name} className='w-full border my-2  p-2 rounded-lg' type="text" placeholder='Enter Project Name' />
                            <input onChange={e => setSelectedProject({ ...selectedProject, desc: e.target.value })} value={selectedProject.desc} className='w-full border my-2  p-2 rounded-lg' type="text" placeholder='Enter Project Desc' />
                            <input onChange={e => setSelectedProject({ ...selectedProject, link: e.target.value })} value={selectedProject.link} className='w-full border my-2  p-2 rounded-lg' type="text" placeholder='Enter Project Link' />
                            <input onChange={e => setSelecProject({ ...selectedProject, thumb: e.target.value })} value={selectedProject.thumb} className='w-full border my-2  p-2 rounded-lg' type="text" placeholder='Enter Project Thumb URL' />
                            <button className='btn bg-orange-500  text-slate-100'
                                onClick={e => {
                                    setShow(false)
                                    updateProjects()
                                }}>Update</button>
                            <button className='btn bg-slate-700 text-slate-100' onClick={e => setShow(false)}>Cancel</button>
                        </div>
                    </motion.div>
                </div >
            }
        </AnimatePresence >
    </>
}

export default Dashboard