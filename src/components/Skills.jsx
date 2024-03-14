import { motion } from 'framer-motion'

const Skills = () => {
    const BACKEND = [
        <i class="text-8xl  text-green-500 devicon-nodejs-plain"></i>,
        <i class="text-8xl  text-purple-400 devicon-express-original"></i>,
        <i class="text-8xl  text-green-600 devicon-mongodb-plain"></i>,
        <i class="text-8xl  text-blue-400 devicon-postgresql-plain"></i>,
        <i class="text-8xl  text-black devicon-socketio-original"></i>,
        <i class="text-8xl  text-pink-500 devicon-graphql-plain"></i>,
        <i class="text-8xl  text-red-600 devicon-redis-plain"></i>
    ]
    return <div className='h-screen my-12 mx-8 lg:mx-20 flex flex-col justify-between'>
        <div className='flex justify-between'>
            <h1 className='text-6xl font-extrabold'>Frontend</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-orange-700 devicon-html5-plain"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-blue-700 devicon-css3-plain"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-yellow-300 devicon-javascript-plain"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-blue-500 devicon-react-original"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-purple-700 devicon-redux-original"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-9xl text-black devicon-nextjs-original-wordmark"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-red-500 devicon-angularjs-plain"></motion.i>
                <motion.i
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{}}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    class="text-8xl text-blue-500 devicon-typescript-plain"></motion.i>

            </div>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-7xl font-extrabold text-'>BackEnd</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    BACKEND.map((item, i) => <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{}}
                        transition={{ duration: 1, delay: 0.2 * i }}
                        whileInView={{ opacity: 1, scale: 1, rotate: "720deg" }}
                        key={i}>
                        {item}
                    </motion.span>)
                }
            </div>
        </div>
    </div >
}

export default Skills