"use client"
import { useEffect } from "react";

// for Animate on Scroll library
import AOS from "aos";
import "aos/dist/aos.css";
// My Components
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import MobileCard from "./MobileComponents/Card";
import MobileEducation from "./MobileComponents/Education";
import MobileSkills from "./MobileComponents/Skills";
import MobileProjects from "./MobileComponents/Projects";
import MobileContact from "./MobileComponents/Contact";

const MainPage = () => {
  // useEffect for AOS
  useEffect(() => {
    AOS.init({
      once: false
    })

  }, [])

  return (

    <div>

      {/* Mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">

        {/* Card */}
        <MobileCard />

        {/* Education */}
        <MobileEducation />

        {/* Skills */}
        <MobileSkills />

        {/* Projects */}
        <MobileProjects />

        {/* Contact */}
        <MobileContact />

      </div>


      {/* Desktop view */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        {/* Sidebar */}
        <div className="w-1/5">
          <Sidebar />
        </div>

        {/* main */}
        <div className="w-4/5">
          <Detail />
        </div>

      </div>

    </div>
  )
}

export default MainPage
