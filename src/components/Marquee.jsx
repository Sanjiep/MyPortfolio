import React from 'react'
import { MARQUEE_TEXT } from '../constants'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className='my-4 lg:rounded-t-3xl w-full bg-lime-300 text-black lg:py-6 lg:h-[25vh]'>
        <div className='flex overflow-hidden whitespace-nowrap'>
            {[...Array(2)].map((_, index) => (
                <motion.h1
                initial={{ x : "0"}}
                animate ={{ x : "-100%"}}
                transition={{repeat: Infinity, ease : "linear", duration: 20}}
                key={index} className='py-2 pr-3 text-3xl font-bold leading-none tracking-tighter lg:text-7xl'>
                    {MARQUEE_TEXT}
                </motion.h1>
                ))}
        </div>
    </div>
  )
}

export default Marquee