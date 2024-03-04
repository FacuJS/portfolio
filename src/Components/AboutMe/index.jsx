import React from "react";
import PhotoPresentation from '../../assets/photo-presentation.jpg';

function AboutMe () {

    return (
            // <div name="Sobre Mi" className="h-screen block bg-gradient-to-b from-[#e8e8e8] via-gray-700 to-gray-800">
            <div name="Sobre Mi" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-screen h-screen">

            <div className="flex items-center gap-8 md:flex-row sm:flex-col">
                <p className="text-gray-500 py-4"> <span className="font-bold flex-none text-6xl text-black">Sobre Mí</span> <br />
                Me especializo en crear experiencias de usuario excepcionales. Con habilidades en <span className="text-[#63e] font-semibold">HTML, CSS, JavaScript, React, Tailwind, NextJS y TypeScript</span>, me enorgullece diseñar interfaces atractivas y funcionales. Aunque mi experiencia laboral en programación es joven, he desafiado con éxito proyectos freelance gracias a mis conocimientos y dedicación. Mi fascinación por el desarrollo front-end me impulsa a buscar constantemente oportunidades para crecer y aprender. Estoy emocionado por la posibilidad de aportar mi creatividad y compromiso a un equipo de trabajo y contribuir al éxito de sus proyectos.</p>
                <img 
                src={PhotoPresentation} 
                alt="Foto profesional de presentación" 
                className="h-2/6 rounded-full"/>  
            </div>
            </div>
    )
}

export { AboutMe }
