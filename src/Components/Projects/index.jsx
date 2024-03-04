import React from 'react'
import Dolarito from '../../assets/dolarito.jpg'



function Projects() {
  const portfolios = [
    {
      id:1,
      src: Dolarito
    }, 
    {
      id:2,
      src: Dolarito
    }, 
    {
      id:3,
      src: Dolarito
    }, 
    {
      id:4,
      src: Dolarito
    }, 
    {
      id:5,
      src: Dolarito
    }
  ]

  return (
        <div name="Proyectos" 
        className='w-screen bg-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#63e]'>Proyectos</p>
              <p className='py-6'>Estos son algunas de las aplicaciones con las que estuve trabajando.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mb-12 sm:px-0'>
            {
              portfolios.map(({id, src}) => (

              <div key={id} className='shadow-md shadow-[#63e] rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Código</button>
                </div>
              </div>


              ))
              }
              </div>

          </div>
        </div>
  )
}

export { Projects }