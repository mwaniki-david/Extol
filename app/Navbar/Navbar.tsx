import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className=' h-auto  p-3 bg-blue-700 '>
      <div className='flex items-center justify-center p-2 px-3'>
        <div className='grid grid-flow-col gap-[300px] md:gap-[550px] lg:gap-20'>
            <div className='flex gap-1 P-2 Px-3 '>
                <p className='text-4xl font-extrabold text-gray-900 dark:text-white '>Extol</p>
            </div>
            <div className='flex'>
                <div className=' px-5 py-2 hidden lg:block'>
                  <ul className='flex gap-10 text-white text-md'>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">HOME</a>
                    </li>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">ABOUT US</a>
                    </li>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">OUR SERVICES</a>
                    </li>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">OUR PROJECTS</a>
                    </li>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">PORTFOLIO</a>
                    </li>
                    <li>
                    <a href="#" className="me-4 hover:underline md:me-6 ">PAGES</a>
                    </li>
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
