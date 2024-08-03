import React from 'react'

const page = () => {
  return (
    <div className='bg-[#0085FF] w-full h-auto p-3  '>
      <form className='flex items-center justify-center flex-col'>
        <h1 className='text-white text-[35px] p-3 lg:text-6xl uppercase px-4 font-extrabold underline underline-offset-8'>
          Academic Writting
        </h1>
        <div className=' grid grid-flow-row p-2 border border-black border-y-[#FF9900] border-x-[#FF9900] border-x-8 border-y-8 rounded-lg shadow-4xl shadow-[#FF9900]'>
          <div className=' p-1'>
            <div className='flex flex-col gap-3 p-2  justify-center items-center'>
              <h1 className='text-white text-[25px] p-1 lg:text-4xl uppercase px-2 font-extrabold'>
             OUR PRIORITY IS FOR outstanding results
              </h1>
              <h2 className='text-white px-3 text-sm md:text-md  md:max-w-[800px]'>
              We offer high-quality software development, transcription, video editing, content writing, graphic design, and digital marketing services.Understanding your unique needs is key to us. Our dedicated team listens and provides personalized solutions with a focus on responsiveness and reliability.Choose Extol Writers for unparalleled customer service and outstanding results. Thank you for choosing us – we look forward to working with you!
              </h2>
              <input className='p-2 border shadow-md rounded-md border-black' type="text" name="name" placeholder='Name' />
              <input className='p-2 border shadow-md rounded-md border-black' type="text" name="name" placeholder='Email' />
            </div>
          </div>
          <div className='text-black flex gap-3 flex-col p-2  justify-center items-center '>
          <input className='p-2 border shadow-md rounded-md border-black ' type="text" name="name" placeholder='Upload Doc' />
          <input className='p-2 border shadow-md rounded-md border-black' type="text" name="name" placeholder='Time Period'/>
          <input className='p-2 border shadow-md rounded-md border-black' type="text" name="name" placeholder='payment method' />
          <button className='px-12 p-2 bg-[#FF9900] rounded-lg uppercase font-bold'>
            submit
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default page
