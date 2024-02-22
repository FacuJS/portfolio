import React from "react";
import { Navbar } from '../../Components/Navbar/index'
import { Hero } from "../../Components/Hero";
import { AboutMe } from "../../Components/AboutMe";
import { Projects } from "../../Components/Projects";
import { SocialLinks } from "../../Components/SocialLinks";
import { Contacts } from "../../Components/Contacts";
function Home () {

    return (
        <>
        <Navbar />
        <Hero />
        <SocialLinks />
        <AboutMe />
        <Projects />
        <Contacts />
        </>
    )
}
export { Home }