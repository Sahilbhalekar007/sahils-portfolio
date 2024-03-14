import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../pages/Dashboard'
export const PROJECTS = [
    {
        id: 1,
        name: "todo app",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia at accusamus doloribus tempora. Neque reprehenderit quos officiis illo maxime enim ut non, sunt temporibus.",
        link: "https://www.google.com",
        thumb: "https://plus.unsplash.com/premium_photo-1708589337293-283eca955f45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Portfolio app",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia at accusamus doloribus tempora. Neque reprehenderit quos officiis illo maxime enim ut non, sunt temporibus.",
        link: "https://www.google.com",
        thumb: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "SOmething app",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia at accusamus doloribus tempora. Neque reprehenderit quos officiis illo maxime enim ut non, sunt temporibus.",
        link: "https://www.google.com",
        thumb: "https://images.unsplash.com/photo-1708026437324-1a420f9408f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Dummy app",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia at accusamus doloribus tempora. Neque reprehenderit quos officiis illo maxime enim ut non, sunt temporibus.",
        link: "https://www.google.com",
        thumb: "https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Dummy app",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia at accusamus doloribus tempora. Neque reprehenderit quos officiis illo maxime enim ut non, sunt temporibus.",
        link: "https://www.google.com",
        thumb: "https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const Projects = () => {
    // const {isDark}=useContext(Theme)
    const [allProjects, setAllProjects] = useState([])

    const getAllProjects = async () => {
        try {
            const { data } = await api.get("/projects")
            setAllProjects(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getAllProjects() }, [])
    return <div className='dark:bg-slate-300 py-8'>
        <h1 className='text-5xl my-5 text-black font-extrabold text-center mx-8 lg:mx-20'>PROJECTS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8 lg:mx-20 gap-8 overflow-hidden '>
            {
                allProjects.map((item, i) => <Link to={`/project-details/${item.id}`}>

                    <motion.div
                        className='mt-12'
                        initial={{ y: 200, opacity: 0, filter: "grayscale(100)" }}
                        animate={{}}
                        transition={{
                            y: { duration: 2, delay: 0.1 * i },
                            scale: { duration: 0.3 }
                        }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.1, filter: "grayscale(0)" }}

                    >

                        <img src={item.thumb} alt="" className='h-48 object-cover w-full' />
                        <h1 className='bg-slate-100 p-4'>{item.name}</h1>
                    </motion.div>
                </Link>
                )
            }
        </div>
    </div>
}

export default Projects