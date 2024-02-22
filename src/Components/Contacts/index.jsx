import React from 'react'

function Contacts() {
  return (
    <div name="Contactos" className='w-screen h-screen bg-[#e8e8e8] p-4'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contacto</p>
          <p>Completá el formulario si queres que conversemos :)</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-col w-full md:w-1/2'>
            <input type='text'
             name='name'
              placeholder='Escribe tu nombre'
               className='p-2 bg-transparent border-2 rounded-md'/>
              
            <input type='email'
              name='name'
              placeholder='Escribe tu email'
               className='my-4 p-2 bg-transparent border-2 rounded-md'/>
            
            <textarea 
            name='massage' 
            placeholder='Escribe tu mensaje'
            rows='10' 
            className='p-2 bg-transparent border-2 rounded-md'></textarea>
         
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              ¡Hablemos!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Contacts }