import { ABOUT } from "../constants"
import React from 'react'

const About = () => {

  return (
    <section id="about" className="bg-black py-8 rounded-t-3xl">
        <h2 className="text-center text-3xl lg:text-8xl">About Me</h2>
        <div className="flex items-center justify-center">
            <p className="m-8 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p>
        </div>
    </section>
  )
}

export default About