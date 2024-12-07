import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button } from './ui/button';

function AboutUs() {
  return (
   <>
    <section className='w-full
        py-[48px] xsm:py-[112px] 
        text-center
        bg-headerColor'>
        <h1 className='my_h1 mb-[24px]'> Our team</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        {/* Card Div */}
        <div className='w-full
        h-[723px] xsm:h-auto
        grid
        grid-cols-1 xsm:grid-cols-3
        xsm:grid-rows-2
        gap-x-[48px]
        gap-y-[64px] 
        mt-[48px]  xsm:mt-[80px]
        overflow-y-auto'>

        {[...Array(6)].map((_ ,index)=>(
             <div className=' flex flex-col justify-center' key={index}>
             <div className='inline-block m-auto mb-[24px]'>
               <Image src="/team1.png" alt="logo" width={80} height={80}></Image >
               <h1 className='text-[20px] leading-[150%] font-semibold'>James nduku</h1>
               <p className='text-[18px] leading-[150%]  mb-[24px]'>Marketing  Cordinator</p>
    
               <div className='flex gap=[14px] justify-center m-auto'>
               <FaLinkedin size={24}/>
               <FaTwitterSquare  size={24}/>
               <FaGlobeAmericas  size={24}/>
               </div>
               </div>
            </div>
        ))}
        </div>

        <Button variant={'transparentBtn'} className=
        'mt-[48px] xsm:hidden'>View All</Button>
   </section>
   </>
  )
}

export default AboutUs