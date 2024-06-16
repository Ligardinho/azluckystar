import React from 'react'
import { InputWithButton } from './Email'
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import Link from 'next/link';
import { SiGooglemaps } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className='w-full md:mt-[75px] md:h-[150px] flex flex-row items-center justify-between mt-[100px] mb-5 md:mb-0'>
        <div className='flex flex-col justify-center gap-2 text-right mx-7'>
            <img src='/assets/Logo (Black Text).png' className='md:h-[75px] md:w-[175px] h-[40px] w-[90px]'></img>
            <p className='md:text-[12px] text-[5px]'>© 2024, by AZ Lucky Star Automotive</p>
        </div>
        <div className='mx-7 flex flex-col md:gap-4 gap-2 items-center'>
            <p className='font-semibold'>Contact Us</p>
            <div className='flex flex-row md:text-2xl text-md gap-1'>
                <Link href="https://www.facebook.com/people/AZ-Lucky-Star-Automotive/100095527569779/?mibextid=LQQJ4d"><FaFacebookF/></Link>
                <Link href="https://www.yelp.com/biz/az-lucky-star-mesa"><FaYelp/></Link>
                <Link href="https://www.google.com/maps/place/AZ+Lucky+Star+Automotive+Repair+Mesa/@33.3648418,-111.84298,17z/data=!4m6!3m5!1s0x872ba831910b8901:0x44ec2b5b02ae514c!8m2!3d33.3648405!4d-111.8429783!16s%2Fg%2F1tdn943y?entry=ttu"><SiGooglemaps/></Link>
                <Link href="https://www.azluckystar.com/"><CgWebsite/></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer