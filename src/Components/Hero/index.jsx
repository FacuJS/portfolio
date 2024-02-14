import React from "react";


function Hero () {

    return (
        <div className="mx-auto flex flex-col items-center justify-center w-screen h-screen pt-10 bg-[#e8e8e8]">
           <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-6xl font-bold">Soy Facundo</h1>
            <span className="py-4 text-4xl max-w-md">Fronted Developer</span>

            <button 
                type="submit"
                class="w-28 h-12 text-white font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#cccc] hover:cursor-pointer">
                    Enviar
            </button>

        </div>
    </div>
    )
}

export { Hero }