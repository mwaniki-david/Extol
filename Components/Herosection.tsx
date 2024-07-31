import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TiArrowRightOutline } from "react-icons/ti";

const Herosection = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className='h-auto w-screen bg-blue-700'>
      <div className=' '>
      <div className='grid  md:grid-flow-col items-center justify-center p-1'>
        <div className=' max-w-[550px] p-2 '>
          <div className='text-white uppercase max-w-[190px] px-4 py-1'>
            <p>WELCOME TO Extol Writers</p>
          </div>
          <div>
            <p className='text-white text-5xl lg:text-6xl uppercase px-4 '>BUILD YOUR ELEGANt  <p className='text-orange-500 uppercase'>DREAM work team</p> </p>
          </div>
          <div>
            <p className='text-white px-7 py-1 text-sm '>Welcome to Extol Writers! We provide top-notch services including software development, transcription, video editing, and more. Contact us today to connect with a team that will bring your vision to life.</p>
          </div>
          <div className=' px-6 py-2 ml-6 -mt-1'>
          <Link href='#Services'>
          <button className='bg-orange-500 p-3 px-8 md:mt-3 rounded-md text-white '>CONTACT US</button>
          </Link>
          </div>
        </div>
        <div className=' '>
        <Image
        src="/homepage.png"
        width={600}
        height={700}
        alt="homepage"/>
        </div>
      </div>
      <div className='flex items-center justify-center bg-blue-700 -mt-2 px-3 '>
      <div className=' grid grid-flow-col p-1 text-white   rounded-md w-auto lg:max-w-[1120px] lg:-mt-5'>
        <div className=' bg-black p-2 gap-10 text-bold rounded-lg '>
          <h1 className='text-1xl lg:text-3xl uppercase p-1 md:p-2 text-bold'>graphic design</h1>
          <h2 className='text-sm md:text-base md:p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='' />
        </div>
        <div className='bg-blue-300 p-2 gap-10 rounded-lg'>
          <h1 className='text-1xl lg:text-3xl uppercase p-1 md:p-2 text-bold'>graphic design</h1>
          <h2 className='text-sm md:text-base md:p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} />
        </div>
        <div className=' bg-black p-2 gap-10 rounded-lg'>
          <h1 className='text-1xl lg:text-3xl uppercase p-1 md:p-2 text-bold'>graphic design</h1>
          <h2 className='text-sm md:text-base md:p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} />
        </div>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Herosection
