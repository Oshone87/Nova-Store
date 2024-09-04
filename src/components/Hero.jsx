import React from 'react'
import {  NavLink } from 'react-router-dom'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'

const Hero = () => {
  return (
   <section className='relative bg-hero bg-center bg-no-repeat h-screen w-full bg-cover'>
    <div className='max_padd_container relative top-32 xs:top-52'>
        <h1 className='h1 capitalize max-w-[37rem]'>The Future Of Shopping</h1>
        <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>Welcome to Nova, where style meets innovation. Shop the latest trends and timeless classics, all curated for the modern fashion enthusiast. Whether you're looking for a statement piece or everyday essentials, we have something for everyone!</p>
        <div className='flexStart items-start gap-x-4 my-10'>
            <div className='regular-24 flexCenter gap-x-3'>
                <MdStar/>
                <MdStar/>
                <MdStar/>
                <MdStar/>
            </div>
            <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
        </div>
        <div className='max-xs:flex-col flex gap-2'>
            <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
            <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
        </div>
    </div>
   </section>
  )
}

export default Hero
