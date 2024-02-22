import React from "react";
import PhotoPresentation from '../../assets/photo-presentation.jpg';

function AboutMe () {

    return (
            // <div name="Sobre Mi" className="h-screen block bg-gradient-to-b from-[#e8e8e8] via-gray-700 to-gray-800">
            <div className="mx-auto gap-11 flex flex-col items-center justify-center w-screen h-screen px-10 md:flex-row bg-gradient-to-b from-black to-gray-800">
                <div className="flex flex-col justify-center h-full">
                <h1 className="text-3xl sm:text-6xl text-white font-bold">Sobre Mí</h1>
                <p className="text-gray-400 py-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div>
                <img 
                src={PhotoPresentation} 
                alt="Foto profesional de presentación" 
                className="rounded-2xl mx-3 md:w-30 w-2/3"/>  
            </div>
            </div>
            //  </div>
    )
}

export { AboutMe }