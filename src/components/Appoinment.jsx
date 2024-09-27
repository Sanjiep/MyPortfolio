import { getCalApi } from "@calcom/embed-react";
import React from "react";

const Appoinment = () => {
    const handleButtonClick = async () => {
        const cal = await getCalApi({ "namespace": "letstalk" });
        cal("ui", { "styles": { "branding": { "brandColor": "#bef264" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    };

  return (
    <section id="letsTalk" className='bg-lime-300 rounded-3xl py-20'>
        <div id="head" className='flex pb-5 justify-center'>
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