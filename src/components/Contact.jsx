import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants"

const Contact = () => {

  return (
    <section id="contact" className="rounded-t-3xl py-2">
        <div className="mx-auto max-w-6xl">
            <p className="py-5 text-center text-3xl lg:text-8xl">
            Lets Connect.
            </p>
            <p className="p-4 text-xl">
                {CONTACT.text}
            </p>
            <div className="flex flex-col items-center">
            <a href="mailto:whoissanjiep@gmail.com" rel="noopener noreferrer" className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">
                {CONTACT.email}
            </a>
            <a href="tel:+358-415776010" rel="noopener noreferrer" className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-5xl">
                {CONTACT.phone}
            </a>
            </div>
        </div>
        <div className="mt-14 flex item-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} target="_blank" href={link.href} rel="noopener noreferrer" className="transition delay-100 ease-in-out hover:text-lime-300">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="py-8 text-center text-gray-400">
            &copy; Sanjeev. All rights reserved.
        </p>
    </section>
  )
}

export default Contact