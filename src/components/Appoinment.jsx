import { getCalApi } from "@calcom/embed-react";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Appoinment = () => {
    const handleButtonClick = async () => {
        const cal = await getCalApi({ "namespace": "letstalk" });
        cal("ui", { "styles": { "branding": { "brandColor": "#bef264" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    };

    useLayoutEffect(() => {
        handleButtonClick();

        gsap.registerPlugin(ScrollTrigger);
        gsap.from("#head h1", {
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#letsTalk",
            start: "top 80%",
            end: "bottom 80%",
            markers: true,
        },
    })
    }, []);

  return (
    <section id="letsTalk" className='bg-lime-300 rounded-t-3xl py-20'>
        <div id="head" className='flex lg:pt-30 pb-5 justify-center'>
            <h1 className='text-black text-center uppercase font-bold text-5xl lg:text-[10rem]'>
                <span>Ready</span> <br /> <span>to start </span><br /> <span> the Project?</span></h1>
        </div>
        <div className="flex justify-center">
            <button onClick={handleButtonClick} 
                className="border-2 border-black px-5 py-4  text-xl lg:text-2xl rounded-full font-semibold text-black transition-all ease-in duration-200 hover:text-lime-300 hover:bg-black"
                data-cal-namespace="letstalk"
                data-cal-link="sanjeevmagar/letstalk"
                data-cal-config='{"layout":"month_view"}'>
                Book an Appointment
            </button>
        </div>
    </section>
  )
}

export default Appoinment