import { ABOUT } from "../constants"

const About = () => {
  return (
    <section data-scroll-section data-scroll data-scroll-speed='-0.2'  data-scroll-sticky
    data-scroll-target="#about-target" // The target for sticky behavior
    id="about" className="bg-black py-8 rounded-t-3xl max-h-full">

        <h2 id="about" className="text-center text-3xl lg:text-8xl">About Me</h2>
        <div className="flex items-center justify-center">
            <p className="m-8 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p>
        </div>
    </section>
  )
}

export default About