import { LuImport } from 'react-icons/lu'
import sanjeev from '../assets/sanjeev.webp'
import { FlipWords } from './ui/flip-word'
import { motion } from 'framer-motion'

const Hero = () => {
  const words = ['A Web Developer', 'A FullStack Developer', 'A UI/UX Designer', 'A Creative Designer']
  return (
    <section>
      <div className="relative flex  flex-col items-center justify-center">
        <motion.h1 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{ease:[0.5, 1, 0.89, 1], duration:2}} 
        className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none text-center">
          SANJEEV <br /> MAGAR
        </motion.h1>

          <h2 className="pt-4 lg:text-4xl text-2xl text-left font-medium">
            <FlipWords words={words} />
          </h2>

        <div className="mt-8 mb-8">
          <a href="/Cv - Sanjeev.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
            <span className=''>Resume.pdf</span>
            <LuImport className='ml-2' />
          </a>
        </div>
      </div>
      <motion.div initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{ease:[0.5, 1, 0.89, 1], duration:2}}  className='w-full'>
        <img src={sanjeev} alt='Sanjeev Magar' className='h-96 w-full object-cover' />
      </motion.div>
    </section>
  )
}

export default Hero