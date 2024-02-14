import React from "react";
import { Navbar } from '../../Components/Navbar/index'
import { Hero } from "../../Components/Hero";
import { AboutMe } from "../../Components/AboutMe";
import Experience from "../../Components/Experience";
function Home () {

    return (
        <>
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
        </>
    )
}
export { Home }