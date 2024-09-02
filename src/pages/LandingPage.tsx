
import React, { useRef } from "react"



import HomeSection from "@/components/Section/HomeSection"




function LandingPage() {
    return (
        <div className="flex flex-col">

            <section id="home" className="relative py-4 container mx-auto flex justify-center items-center ">
                <HomeSection />
            </section>

            {/* <section id="services" className="relative py-4 mt-80 md:my-0 bg-[#040c19] text-white ">
                <h1 className="text-center text-4xl font-light mt-20 font-sans">Services</h1>
                <OurServiceSection />
            </section>
            <div id="contact" className="h-[20vh] bg-[#000000]">
                <h1 className="text-center text-4xl font-bold mt-20">Contact Us</h1>
            </div> */}
        </div>

    )
}

export default LandingPage