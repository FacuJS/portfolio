import React from "react"; 
// import './styles.css';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function Hero () {

    return (
        <div className="mx-auto flex flex-col items-center justify-center w-screen h-screen pt-10 bg-[#e8e8e8]">
           <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-6xl font-bold">Soy Facundo</h1>
            <span className="py-4 text-4xl max-w-md">Fronted Developer</span>

            <button 
                to="portafolio" 
                className="group w-40 h-12 px-2 flex justify-center items-center text-white font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#cccc] hover:cursor-pointer">
                    Portafolio 
                    <ChevronRightIcon className="pl-3 h-7 w-7 group-hover:rotate-90 duration-300"/>
            </button>

        </div>
    </div>
    )
}

export { Hero }