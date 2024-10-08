import { useState, useEffect } from "react"
import { FaTimes, FaBars } from 'react-icons/fa';
import { LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "-100%"
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: "-100%",
            transition: {
                y: {
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    duration: 0.5
                },
                opacity: {
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            }
        }
    } 

    const linkVariants = {
        hidden: {
            opacity: 0,
            y: -50
        },
        visible: {
            opacity: 1,
            y: 0
        },
    }

  return (
    <>
    <nav className="fixed right-0 top-0 z-30 p-4">
        <button onClick={toggleMenu} className="rounded-md p-4">
            {isOpen ? (
                <FaTimes className="h-6 w-6"/>
            ) : (
                <FaBars className="h-6 w-6"/>
            )}
        </button>
    </nav>
    <AnimatePresence>
    {isOpen && (
        <motion.div 
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-20">
        <div className="w-full absolute h-screen pointer-events-none">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={0.8}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
            <ul className="space-y-6 text-3xl">
                {LINKS.map((link) => (
                    <motion.li 
                    variants={linkVariants}
                    key={link.id}>
                        <a href={`#${link.id}`} onClick={toggleMenu} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl">
                            {link.name}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
        )}
        </AnimatePresence>
    </>
  )
}

export default Navbar;