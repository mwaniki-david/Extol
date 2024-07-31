import React from 'react'
import Image from 'next/image'
import { TiArrowRightOutline } from "react-icons/ti";
import Link from 'next/link';

const Portfolio = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (

    <div className='h-auto md:h-screen w-screen bg-blue-100 items-center justify-center '>
    <div className=' '>
    <div className='grid grid-flow-row lg:grid-flow-col items-center justify-center  p-6 '>
      <div className=' max-w-[550px] p-2 md:mt-[40px]'>
        <div className='text-black uppercase max-w-[190px] px-4 py-1'>
          <p>Perfect Partner</p>
        </div>
        <div>
          <p className='text-black text-5xl lg:text-7xl uppercase px-4 '>WE HAVE PRIORITY FOR outstanding results.</p>
        </div>
        <div>
          <p className='text-black px-4 py-2'>Explore our portfolio to see how Extol Writers can bring your vision to life with our diverse range of services. Thank you for choosing us – we look forward to working with you!.</p>
        </div>
        <div className=' px-6 py-2 ml-6 -mt-1 '>
        <Link href='#Services'>
          <button className='bg-orange-500 p-4 px-8 md:mt-3 rounded-md text-white '>Portfolio</button>
          </Link>
        </div>
      </div>
      <div className='relative p-2 lg:hidden'>
      <Image
      src="/Portfolio3.jpg"
      width={200}
      height={200}
      alt="Portfolio4"
      className='absolute z-0 ml-[220px] -mt-[40px] rounded-lg'/>
      <Image
      src="/Portfolio4.jpg"
      width={200}
      height={200}
      alt="Portfolio4"
      className=' z-10 ml-[130px] mt-[40px] rounded-lg'/>
      <Image
      src="/Portfolio1.jpg"
      width={200}
      height={200}
      alt="Portfolio1"
      className='relative z-0  -mt-[80px] ml-5 rounded-lg'/>
      </div>
      <div className='relative p-6 hidden lg:block'>
      <Image
      src="/Portfolio3.jpg"
      width={400}
      height={400}
      alt="Portfolio4"
      className='absolute z-0 ml-[100px] -mt-[5px] rounded-lg'/>
      <Image
      src="/Portfolio4.jpg"
      width={400}
      height={400}
      alt="Portfolio4"
      className=' z-10 ml-[50px] mt-[150px] rounded-lg'/>
      <Image
      src="/Portfolio1.jpg"
      width={400}
      height={400}
      alt="Portfolio1"
      className='relative z-0  -mt-[110px]  -ml-[20px] rounded-lg'/>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Portfolio
