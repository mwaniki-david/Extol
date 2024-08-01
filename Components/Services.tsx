
import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";

const Services = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div  id='Services' className='flex bg-white h-auto md:h-screen mt-[35px] md:mt-[300px] items-center justify-center p-2 '>
      <div className='p-2 px-12'>
        <div>
          <div>
            <p  className='text-black uppercase max-w-[190px] px-4 font-semibold '>How We Work</p>
            <h1  className='text-black text-5xl lg:text-6xl uppercase px-4 font-extrabold'>OUR sERVICES</h1>
          </div>
          <div className='grid grid-flow-row  md:grid-flow-col md:grid-rows-2 text-white    rounded-lg w-auto p-6 gap-8'>
        <div className=' bg-[#FF9900] rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='md:text-2xl text-1xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className=' md:text-1xl   p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-[#59AFFF] rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl text-1xl uppercase p-2 text-bold'>Content Writing</h1>
          <h2 className='text-1xl p-2'>High-quality content creation for blogs, websites, marketing materials, and more. Our writers produce compelling and SEO-friendly content.</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl text-1xl uppercase p-2 text-bold'>Video Editing</h1>
          <h2 className='text-1xl p-2'>Professional video editing services to create polished and engaging videos for various purposes. We enhance visuals, sound, and special effects.</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl text-1xl uppercase p-2 text-bold'>Software Development</h1>
          <h2 className='text-1xl p-2'>Custom software solutions tailored to your business needs, from web applications to mobile apps. Our team ensures seamless integration and functionality.</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-[#59AFFF] rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl text-1xl uppercase p-2 text-bold'>Transcription Services</h1>
          <h2 className='text-1xl p-2'>Accurate and timely transcription of audio and video files into text format. We handle various languages and specialized terminology.</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-[#FF9900] rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl text-1xl uppercase p-2 text-bold'>Digital Marketing</h1>
          <h2 className='text-1xl p-2'>Comprehensive digital marketing strategies to boost your online presence and reach your target audience. Our campaigns are data-driven and results-oriented.</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>

      </div>
        </div>
      </div>
    </div>
  )
}

export default Services
