import React from 'react'
import logo from '../assets/youtube-logo.png'

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white z-10 flex items-center justify-between h-14 mx-[1rem] pt-6 md:px-5'>
            <div className='flex items-center justify-center gap-6'>
            <i class="cursor-pointer text-2xl fa-solid fa-bars"></i>
                <i class="text-2xl hide-on-pc fa-solid fa-bars"></i>
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} className='w-[40px]' alt="youtube-logo" />
                    <h3 className='text-xl font-medium'>YouTube</h3>
                </div>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <div className='rounded-[25px] border flex items-center justify-center gap-4 py-2 px-4'>
                    <input className='outline-none w-[27vw] border-none' type="text" placeholder='Search' />
                    <i class="fa-solid fa-magnifying-glass hover:cursor-pointer "></i>
                </div>
                <i class="fa-solid fa-microphone border text-xl bg-[#f2f2f2] px-3 py-1 rounded-[50%]"></i>
            </div>

            <div className='flex items-center justify-center gap-7'>
                <i class="fa-solid fa-video text-xl cursor-pointer"></i>
                <i class="fa-solid fa-bell text-xl cursor-pointer"></i>
                <i class="fa-regular fa-user text-xl text-white bg-black rounded-[50%] cursor-pointer px-2 py-1"></i>
            </div>
        </div>
    )
}

export default Navbar