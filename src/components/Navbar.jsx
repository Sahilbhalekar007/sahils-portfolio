import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { motion } from "framer-motion"

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const { isDark, toggleTheme } = useContext(ThemeContext)
    return <>
        <div className='flex justify-between  px-4 md:px-32 h-16 items-center overflow-hidden '>
            <motion.div
                initial={{ y: -100 }}
                transition={{ duration: 0.5 }}
                animate={{ y: 0 }}
            >Logo</motion.div>
            <div className='gap-8 hidden md:flex'>
                <motion.div initial={{ y: 100 }} transition={{ duration: 0.5, delay: 0.2 }} animate={{ y: 0 }}>Home</motion.div>
                <motion.div initial={{ y: 100 }} transition={{ duration: 0.5, delay: 0.4 }} animate={{ y: 0 }}>About</motion.div>
                <motion.div initial={{ y: 100 }} transition={{ duration: 0.5, delay: 0.6 }} animate={{ y: 0 }}>Skiils</motion.div>
                <motion.div initial={{ y: 100 }} transition={{ duration: 0.5, delay: 0.8 }} animate={{ y: 0 }}>Projects</motion.div>
                <motion.div initial={{ y: 100 }} transition={{ duration: 0.5, delay: 1 }} animate={{ y: 0 }}>Contacts</motion.div>
            </div>
            <div
                onClick={toggleTheme}
                className='hidden md:flex cursor-pointer  p-2 rounded-full size-8 items-center dark:hover:bg-slate-400 dark:hover:text-slate-800'>
                {
                    isDark
                        ? <i className="bi bi-moon"></i>
                        : <i className="bi bi-sun"></i>
                }
            </div>
            <div className='md:hidden text-2xl cursor-pointer rounded-full hover:bg-slate-300 size-10 flex items-center justify-center hover:text-slate-800' onClick={e => setShowMobileNav(!showMobileNav)}>
                <i className="bi bi-list"></i>
            </div>
        </div>

        {
            showMobileNav && <div className='bg-slate-200  md:hidden'>
                <div className='p-2 hover:text-slate-200  hover:bg-slate-600 cursor-pointer'>Home</div>
                <div className='p-2 hover:text-slate-200  hover:bg-slate-600 cursor-pointer'>About</div>
                <div className='p-2 hover:text-slate-200  hover:bg-slate-600 cursor-pointer'>Skiils</div>
                <div className='p-2 hover:text-slate-200  hover:bg-slate-600 cursor-pointer'>Projects</div>
                <div className='p-2 hover:text-slate-200  hover:bg-slate-600 cursor-pointer'>Contacts</div>
            </div>
        }
    </>
}

export default Navbar