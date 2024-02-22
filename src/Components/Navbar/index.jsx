import React, { useState } from "react";
import {Link} from 'react-scroll'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

function Navbar () {
const [nav, setNav] = useState(false);

const links = [
    {
        id: 1,
        link: 'Sobre Mi'
    },
    {
        id: 2,
        link: 'Experiencia'
    },
    {
        id: 3,
        link: 'Proyectos'
    }, 
    {
        id: 4,
        link: 'Contactos'
    }
]

    return (
        <>
        <nav className="flex px-4 justify-between text-white bg-black w-full h-20 items-center fixed">
            <h1 className="text-2xl font-montserrat ml-2">
                Facundo
            </h1>
            <ul className="hidden md:flex">

                {links.map(({id, link}) => (
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize text-gray-400 font-medium hover:scale-105 duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                    
                ))}


            </ul>

            <div 
            onClick={() => setNav(!nav)}
             className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                {nav ? <XMarkIcon className="h-10 w-10"/> : <Bars3Icon className="h-10 w-10"/>}
            </div>
            
        {nav && 
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link}) => (
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
                    
                ))}

            </ul>
        }

        </nav>


        </>
    )
}

export { Navbar }