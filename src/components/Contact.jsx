import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants"

const Contact = () => {
  return (
    <section id="contact">
        <div className="mx-auto max-w-6xl">
            <p className="my-10 text-center text-3xl lg:text-8xl">
                Nice to meet you! Lets Connect.
            </p>
            <p className="p-4 text-xl">
                {CONTACT.text}
            </p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="my-4 block text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">
                {CONTACT.email}
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="my-4 block text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-5xl">
                {CONTACT.phone}
            </a>
        </div>
        <div className="flex justify-center">
            <button className="border-2 border-lime-300 p-5 text-xl lg:text-2xl rounded-full font-semibold text-lime-300 transition ease-in duration-200 hover:text-black hover:bg-lime-300">
                Book an Appointment
            </button>
        </div>
        <div className="mt-20 flex item-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} target="_blank" href={link.href} rel="noopener noreferrer" className="transition delay-100 ease-in-out hover:text-lime-300">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="my-8 text-center text-gray-400">
            &copy; Sanjeev. All rights reserved.
        </p>
    </section>
  )
}

export default Contact