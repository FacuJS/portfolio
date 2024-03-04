import React from "react"; 
import { Link } from "react-scroll"
import { SocialLinks } from "./SocialLinks.jsx";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function Hero () {
{/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
    return (
        <div className="mx-auto flex flex-col items-center justify-center w-screen h-screen pt-10 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
           <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-6xl font-bold">Soy Facundo</h1>
            <span className="py-4 text-4xl max-w-md">Fronted Developer</span>
            <Link to="Proyectos" smooth duration={500}>
            <button 
                className="group w-40 h-12 px-2 flex justify-center items-center text-white font-semibold  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#cccc] hover:cursor-pointer">
                    Proyectos 
                    <ChevronRightIcon className="pl-3 h-7 w-7 group-hover:rotate-90 duration-300"/>
            </button>
            </Link>
        </div>

        <div className="">
         <SocialLinks /> 
        </div>
    </div>
    )
}

export { Hero }