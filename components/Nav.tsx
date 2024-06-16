import React from 'react'
import { BsTelephoneInboundFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className='h-[90px] md:h-[110px] bg-black fixed flex flex-row justify-between w-screen'>
        <a className='flex items-center mx-7' href='https://www.azluckystar.com/'>
            <img src='/assets/Logo (White Text).png.webp' className='h-[50px] md:h-[65px]'></img>
        </a>
        <div className='flex flex-row items-center gap-6'>
            <div className='flex flex-row items-center gap-2 md:gap-4'>
                <div className='text-white text-xl md:text-3xl'>
                    <BsTelephoneInboundFill/>
                </div>
                <div className='text-white flex flex-col text-center'>
                    <h1 className='text-lg md:text-2xl font-semibold'>480 674-3338</h1>
                    <p className='text-[5px] md:text-xs'>Always here to answer your calls</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Nav