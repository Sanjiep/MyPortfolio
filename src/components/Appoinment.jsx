import React from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Appoinment = () => {
    const handleButtonClick = async () => {
        const cal = await getCalApi({ "namespace": "letstalk" });
        cal("ui", { "styles": { "branding": { "brandColor": "#bef264" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    };

    useEffect(() => {
        handleButtonClick();
    }, []);

  return (
    <section data-scroll-section data-scroll data-scroll-speed='0.1' data-scroll-sticky data-scroll-target="#letsTalk-target"
    id='letsTalk' className='h-[100vh] bg-lime-300 rounded-t-3xl'>
        <div id='letsTalk-target' className='flex pt-10 lg:pt-30 pb-5 justify-center'>
            <h1 className='text-black text-center uppercase font-bold text-5xl lg:text-[10rem]'>Ready <br /> to start <br /> the Project?</h1>
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