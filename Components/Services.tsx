
import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";

const Services = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div  id='Services' className='flex bg-white h-auto mt-[220px] md:mt-[300px] items-center justify-center p-2 '>
      <div className='p-2 px-12'>
        <div>
          <div>
            <p  className='text-black uppercase max-w-[190px] px-4 py-2 '>How We Work</p>
            <h1  className='text-black text-3xl lg:text-7xl uppercase px-4'>OUR sERVICES</h1>
          </div>
          <div className='grid grid-flow-row md:grid-flow-col grid-rows-2 text-white    rounded-lg w-auto p-6 gap-8'>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>
        <div className=' bg-black rounded-3xl p-2 gap-10 text-bold'>
          <h1 className='text-2xl uppercase p-2 text-bold'>graphic design</h1>
          <h2 className='text-1xl p-2'>Creative and eye-catching designs for logos, brochures, social media, and other visual content. We help you build a strong  brand identity</h2>
          <TiArrowRightOutline style={iconStyles} className='p-2' />
        </div>

      </div>
        </div>
      </div>
    </div>
  )
}

export default Services
