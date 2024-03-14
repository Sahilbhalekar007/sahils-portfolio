import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return <>
        <div className='grid grid-cols-2 bg-gray-100 p-8 mx-8 lg:mx-20 h-[50vh] mt-20'>
            <div className='flex flex-col justify-between '>
                <div>
                    <h1 className='text-3xl font-bold'>John Doe</h1>
                    <p className='text-gray-700 my-2'>john@gmail.com</p>
                    <p className='text-gray-700 my-2'>+91-98786-89093</p>
                </div>
                <div className='flex gap-3  text-blue-500'>
                    <i className='bi bi-github'></i>
                    <i className='bi bi-linkedin'></i>
                    <i className='bi bi-skype'></i>
                </div>
            </div>
            <div className='flex justify-around'>
                <div>
                    <h1 className='text-2xl font-bold'>FrontEnd</h1>
                    <p className='ml-1 text-gray-900 my-3'>HTML</p>
                    <p className='ml-1 text-gray-900 my-3'>CSS</p>
                    <p className='ml-1 text-gray-900 my-3'>JS</p>
                    <p className='ml-1 text-gray-900 my-3'>React JS</p>
                    <p className='ml-1 text-gray-900 my-3'>Angular</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>BackEnd</h1>
                    <p className='ml-1 text-black my-3'>Node Js</p>
                    <p className='ml-1 text-black my-3'>Express JS</p>
                    <p className='ml-1 text-black my-3'>MongoDB</p>
                    <p className='ml-1 text-black my-3'>PostgreSQL</p>
                    <p className='ml-1 text-black my-3'>Web Socket</p>
                </div>
                <div>
                    <Link to="/dashboard">Admin</Link>
                </div>
            </div>
        </div>
    </>
}

export default Footer