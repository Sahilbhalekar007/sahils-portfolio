import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
    return <div className='dark:bg-slate-400'>
        {/* <Navbar /> */}
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>

}

export default Home