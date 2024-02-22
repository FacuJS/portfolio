import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";


export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
        LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href: "https://www.linkedin.com/in/facundo-cordoba-nicolas-fcn/",
        style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
        GitHub <FaGithub size={30}/>
        </>
      ),
      href: "https://github.com/FacuJS",
    }, 
    {
      id: 3,
      child: (
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: "mailto:cordobacontactos@gmail.com",
    }, 
    {
      id: 4,
      child: (
        <>
        CV <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: "/cv-cordobafacundo",
      style: "rounded-br-md",
      download: true
    }
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          {links.map(({id, child,href, style, download}) => (

            <li key={id}  
            className={'flex justify-between items-center w-40 h-14 bg-gray-500 text-white cursor-pointer px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + ' ' + style}>
                <a className='flex justify-between items-center w-full' 
                href={href} 
                download={download} 
               target='_blank' 
               rel='noreferrer'> 
                    <>
                    {child}
                    </>
                </a>
            </li>

          ))}
        </ul>
    </div>
  )
}
