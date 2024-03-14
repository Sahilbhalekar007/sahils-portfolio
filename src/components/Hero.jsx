import React from 'react'
import Navbar from './Navbar'
import user from "./../assets/man.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Hero = () => {
    return <>
        <div className='overflow-hidden relative h-[60vh] lg:h-screen bg-gradient-to-t from-red-500 dark:from-slate-600 dark:to-slate-200'>
            <Navbar />
            <HeroHeading />
            <motion.img src={user} className=' h-[80vh] absolute bottom-0 right-0 object-cover hidden lg:block'
                initial={{ y: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                animate={{ y: 1 }}
                alt="" />


        </div>
    </>
}
const HeroHeading = () => {
    return <>
        <motion.div
            initial={{ rotate: "-10deg", scale: 0.8 }}
            transition={{ duration: 0.3 }}
            animate={{}}
            whileHover={{ rotate: "0deg", scale: 1 }}

            className='bg-red-300 p-4 lg:w-1/3 relative z-10 left-[5%] top-[10%]'>
            <h1 className='text-4xl'>Hi Im <span className='font-bold'>John Doe</span></h1>
            <p className='text-gray-800 font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nam explicabo nostrum quaerat perferendis consequatur itaque unde neque excepturi delectus obcaecati accusantium ducimus ipsa odio vitae pariatur, amet hic officia!</p>
            <div className='flex  bg-red-400 p-4 rounded-lg mt-4 shadow-lg'>

                <button className='bg-slate-500 px-4 py-2 rounded-lg'>Hire Me</button>
                <div className=' flex  gap-5 items-center ml-auto'>
                    <Link to="https://github.com" className='p-4 hover:scale-125 transition-all hover:bg-pink-200 rounded-lg'> <i className="  bi bi-github" ></i></Link>
                    <Link to="https://www.linkedin.com/in/sahil-bhalekar-271a1427b/details/skills/" className='p-4 hover:scale-125 transition-all hover:bg-pink-200 rounded-lg'> <i className="  bi bi-linkedin"></i></Link>
                    <Link to="https://www.instagram.com/sahil__bhalekar07/" className='p-4 hover:scale-125 transition-all hover:bg-pink-200 rounded-lg'> <i className="  bi bi-instagram"></i></Link>
                </div>
            </div>
        </motion.div>
    </>
}

export default Hero