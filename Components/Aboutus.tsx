import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

const Aboutus = () => {
  return (
    <div  className='flex items-center justify-center bg-white h-screen  md:-mt-[120px] '>
      <div id='Aboutus' className='grid md:grid-flow-col items-center justify-center gap-2 p-3 mt-[45px] md:mt-[400px]'>
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
        width={500}
        height={400}
        alt="Aboutus1"
        className='rounded-lg ml-3 hidden lg:block'
        />
        </div>
        <div className='md:-mt-[40px] '>
            <div className='text-black font-semibold uppercase max-w-[190px] px-4'>
            WHO WE ARE
            </div>
            <div className='text-black font-extrabold text-[45px] lg:text-6xl uppercase px-4  md:max-w-[750px]'>
            WE ARE PERFECT TEAM FOR high-quality services
            </div>
            <div className='text-black px-7 py-3 text-sm md:text-md  md:max-w-[800px]'>
            We offer high-quality software development, transcription, video editing, content writing, graphic design, and digital marketing services.Understanding your unique needs is key to us. Our dedicated team listens and provides personalized solutions with a focus on responsiveness and reliability.Choose Extol Writers for unparalleled customer service and outstanding results. Thank you for choosing us – we look forward to working with you!
            </div>
            <div>
              <div className='hidden md:grid grid-flow-col '>
                <div className='ml-12'>
                  <ul className='p-3'>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Flexible Time</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Perfect Work</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Client Priority</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Flexible Time</h1>
                  </ul>
                </div>
                <div className='-ml-[190px]'>
                  <ul className='p-3'>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Flexible Time</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Perfect Work</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Client Priority</h1>
                    <h1 className='flex flex-row p-2 gap-2'><TiTick />Flexible Time</h1>
                  </ul>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus