import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TiArrowRightOutline } from "react-icons/ti";

const Herosection = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className='h-auto w-screen bg-[#0085FF]'>
      <div className=' '>
      <div className='grid  md:grid-flow-col items-center justify-center scroll-smooth md:ml-8'>
        <div className=' max-w-[750px] md:p-12 md:mt-8 mt-2'>
          <div className='text-white font-semibold uppercase max-w-[190px] px-4 py-1'>
            <p>WELCOME TO Extol Writers</p>
          </div>
          <div>
            <div className='text-white text-5xl font-extrabold lg:text-6xl uppercase px-4 '>BUILD YOUR ELEGANt  <p className='text-[#FF9900] uppercase'>DREAM work team</p> </div>
          </div>
          <div>
            <p className='text-white px-7 py-1 text-sm p-1 '>Welcome to Extol Writers! We provide top-notch services including software development, transcription, video editing, and more. Contact us today to connect with a team that will bring your vision to life.</p>
          </div>
          <div className=' px-6 py-2 ml-6 '>
          <Link href='#Services'>
          <button className='bg-[#FF9900] font-extrabold p-3 md:px-10 px-8 rounded-md text-white md:py-5 '>CONTACT US</button>
          </Link>
          </div>
        </div>
        <div className=' '>
        <Image
        src="/homepage.png"
        width={750}
        height={800}
        alt="homepage"
        className='md:-ml-[100px] '
        />
        </div>
      </div>
      <div className='flex items-center justify-center bg-[#0085FF] -mt-6 px-3 '>
      <div className=' grid grid-flow-col p-2 md:p-1 text-white   rounded-md w-auto lg:max-w-[1120px] lg:-mt-7'>
        <Link href='Acadamicwriting'>
        <div className=' bg-black p-2 gap-10 text-bold rounded-lg '>
          <h1 className=' flex lg:text-3xl uppercase p-1 md:p-2 font-bold items-center justify-center '>Academic writing</h1>
          <h2 className='text-xs md:text-base md:p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <Link href='Acadamicwriting'>
          <TiArrowRightOutline style={iconStyles} className='p-2 lg:p-1' />
          </Link>
          
        </div>
        </Link>
        <div className='bg-[#59AFFF] p-2 gap-10 rounded-lg'>
          <h1 className='flex items-center justify-center text-1xl lg:text-3xl uppercase p-1 md:p-2 font-bold'>Content Writing</h1>
          <h2 className='text-xs md:text-base md:p-2'>High-quality content creation for blogs, websites, marketing materials, and more. Our writers produce compelling and SEO-friendly content.</h2>
          <TiArrowRightOutline style={iconStyles} 
          className='p-2 lg:p-1'/>
        </div>
        <div className='hidden md:block bg-black p-2 gap-10 rounded-lg'>
          <h1 className='flex items-center justify-center text-1xl lg:text-3xl uppercase p-1 md:p-2 font-bold'>Video Editing</h1>
          <h2 className='text-xs md:text-base md:p-2'>Professional video editing services to create polished and engaging videos for various purposes. We enhance visuals, sound, and special effects.</h2>
          <TiArrowRightOutline style={iconStyles} 
          className='p-2 lg:p-1'/>
        </div>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Herosection
