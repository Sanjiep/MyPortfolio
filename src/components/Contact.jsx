import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Contact = () => {
    const handleButtonClick = async () => {
        const cal = await getCalApi({ "namespace": "letstalk" });
        cal("ui", { "styles": { "branding": { "brandColor": "#bef264" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    };

    useEffect(() => {
        handleButtonClick();
    }, [])

  return (
    <section id="contact">
        <div className="mx-auto max-w-6xl">
            <p className="my-10 text-center text-3xl lg:text-8xl">
                Nice to meet you! Lets Connect.
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
        <div className="flex justify-center">
            <button onClick={handleButtonClick} 
                className="border-2 border-lime-300 p-5 text-xl lg:text-2xl rounded-full font-semibold text-lime-300 transition ease-in duration-200 hover:text-black hover:bg-lime-300"
                data-cal-namespace="letstalk"
                data-cal-link="sanjeevmagar/letstalk"
                data-cal-config='{"layout":"month_view"}'>
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