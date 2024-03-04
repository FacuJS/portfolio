import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
       <FaLinkedin size={30}/>
        </>
      ),
      href: "https://www.linkedin.com/in/facundo-cordoba-nicolas-fcn/",
        style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
        <FaGithub size={30}/>
        </>
      ),
      href: "https://github.com/FacuJS",
    }, 
    {
      id: 3,
      child: (
        <>
       <HiOutlineMail size={30}/>
        </>
      ),
      href: "mailto:cordobacontactos@gmail.com",
    }, 
    {
      id: 4,
      child: (
        <>
         <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: "/cv-cordobafacundo",
      style: "rounded-br-md",
      download: true
    }
  ]

  return (
    <div className='flex mt-10'>
        <ul className='flex'>
          {links.map(({id, child,href, download}) => (

            <li key={id}  
            className='flex justify-center items-center px-3 text-gray-600 cursor-pointer icon-shadow hover:scale-110 duration-200'>
                <a className='flex justify-between items-center' 
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

export { SocialLinks };