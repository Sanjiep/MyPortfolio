import { SparklesCore } from './ui/sparkles';
import { LuImport } from 'react-icons/lu'
import sanjeev from '../assets/sanjeev.webp'

const Hero = () => {
  return (
    <section>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none text-center">
            SANJEEV <br /> MAGAR
          </h1>

          <div className="mt-8 mb-8">
            <a href="/Cv - Sanjeev.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
              <span className=''>Resume.pdf</span>
              <LuImport className='ml-2' />
            </a>
        </div>
        </div>
      <div className='w-full'>
        <img src={sanjeev} alt='Sanjeev Magar' className='h-96 w-full object-cover' />
      </div>
    </section>
  )
}

export default Hero