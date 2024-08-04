import React from 'react'
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link'

const Navbar = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className=' h-auto  p-3  bg-[#0085FF] border-b-2'>
      <div className='flex items-center justify-center p-2 px-6'>
        <div className='flex justify-between gap-[250px] md:gap-[550px] lg:gap-20 '>
            <div className='flex gap-1 P-2 Px-3 '>
                <p className='text-4xl font-extrabold text-gray-900 dark:text-white '>Extol</p>
            </div>
            <div className='flex'>
                <div className=' px-5 py-2 hidden lg:block'>
                  <ul className='flex gap-10 text-white text-[15px] font-bold'>
                    <Link href="#" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900]  ">HOME</Link>
                    <Link href="#Aboutus" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900] md:me-6 ">ABOUT US</Link>
                    <Link href="#Services" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900] md:me-6 ">OUR SERVICES</Link>
                    <Link href="#Services" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900] md:me-6 ">OUR PROJECTS</Link>
                    <Link href="#Portfolio" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900] md:me-6 ">PORTFOLIO</Link>
                    <Link href="#" className="me-4 hover:underline underline-offset-[7px] decoration-[#FF9900] md:me-6 ">PAGES</Link>
                  </ul>
                </div>
                <div className='flex'>
                <TiThMenu style={iconStyles}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
