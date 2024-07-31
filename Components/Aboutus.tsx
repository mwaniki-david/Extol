import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div className='flex items-center justify-center bg-white h-screen -mt-[120px] md:-mt-[100px] '>
      <div className='grid md:grid-flow-col items-center justify-center gap-2 p-3 mt-[350px] md:mt-[450px]'>
        <div className='p-2'>
        <Image
        src="/Aboutus.jpg"
        width={900}
        height={900}
        alt="Aboutus1"
        className='rounded-lg ml-3 md:hidden'
        />
        <Image
        src="/Aboutus1.jpg"
        width={800}
        height={700}
        alt="Aboutus1"
        className='rounded-lg ml-3 hidden lg:block'
        />
        </div>
        <div className='md:-mt-[200px] '>
            <div className='text-black uppercase max-w-[190px] px-4 py-1'>
            WHO WE ARE
            </div>
            <div className='text-black text-5xl lg:text-7xl uppercase px-4  md:max-w-[750px]'>
            WE ARE PERFECT TEAM FOR high-quality services
            </div>
            <div className='text-black px-7 py-3 text-sm md:text-md  md:max-w-[800px]'>
            We offer high-quality software development, transcription, video editing, content writing, graphic design, and digital marketing services.Understanding your unique needs is key to us. Our dedicated team listens and provides personalized solutions with a focus on responsiveness and reliability.Choose Extol Writers for unparalleled customer service and outstanding results. Thank you for choosing us – we look forward to working with you!
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus