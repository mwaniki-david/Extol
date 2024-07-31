import Aboutus from '@/Components/Aboutus'
import Herosection from '@/Components/Herosection'
import Portfolio from '@/Components/Portfolio'
import Services from '@/Components/Services'
import Testimonial from '@/Components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div className='w-full overflow-y-scroll no-scrollbar'>
      <Herosection/>
      <Aboutus/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default page
