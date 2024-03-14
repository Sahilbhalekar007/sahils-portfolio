import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
    const api = axios.create({ baseURL: "http://localhost:5000/" })
    const [conatctData, setConatctData] = useState({})

    const addContact = async () => {
        try {
            await api.post("/contacts", conatctData)
            console.log("contact added success")
            toast.success("Thank You For Enquiry")

        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = e => {
        const { name, value } = e.target
        setConatctData({ ...conatctData, [name]: value })

    }
    // useEffect(() => { () }, [])
    return <div className='grid grid-cols-1 md:grid-cols-2 mx-20 gap-8'>
        <div className='hidden md:flex flex-col justify-between bg-gray-50 p-4'>
            <h1 className='text-black font-semibold text-2xl'>John Doe</h1>
            <span className='text-black font-bold text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vitae numquam expedita consequatur delectus nihil tempore eos veritatis officiis asperiores, quo tenetur nam nisi soluta optio doloremque nobis exercitationem? Recusandae.
            </span>
        </div>
        <div className='border rounded-lg'>
            <h3 className='bg-slate-200 text-black font-extrabold text-center text-3xl p-4 rounded-t-lg'>Contact Us</h3>
            <div className=' p-6'>
                <input className='form-control my-2 ' onChange={handleChange} type="text" name='name' placeholder='Enter Name' />
                <input className='form-control my-2 ' onChange={handleChange} type="text" name='email' placeholder='Enter Email' />
                <input className='form-control my-2 ' onChange={handleChange} type="text" name='message' placeholder='Enter Message' />
                <button className='btn bg-slate-700 text-slate-50' onClick={addContact}>Enquiry Now</button>
            </div>
        </div>
    </div>
}

export default Contact