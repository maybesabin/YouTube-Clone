import React from 'react'
import pfp1 from '../assets/pfp1.png'
import pfp2 from '../assets/pfp2.png'
import pfp3 from '../assets/pfp3.png'
import pfp4 from '../assets/pfp4.png'
import pfp5 from '../assets/pfp5.png'
import pfp6 from '../assets/pfp6.png'



const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 overflow-y-scroll h-[100vh] w-[320px] pb-4 pt-[6rem] z-9'>

      <div className='pl-6 flex flex-col gap-2 bg-white'>
        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-house"></i>
          <h3 className='text-[16px]'>Home</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class="text-xl fa-solid fa-circle-play"></i>
          <h3 className='text-[16px]'>Shorts</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-money-bill"></i>
          <h3 className='text-[16px]'>Subscriptions</h3>
        </div>
      </div>

      {/* Divider */}
      <div className='w-[100%] h-[1px] bg-[#d5d4d4] my-4'></div>

      <div className='pl-6 flex flex-col gap-2'>
        <h2 className='pl-2 text-xl hover:bg-[#f2f2f2] rounded-[15px] p-2 cursor-pointer'>You &nbsp;<i class="text-[15px] fa-solid fa-chevron-right"></i></h2>
        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-user"></i>
          <h3 className='text-[16px]'>Your Channel</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class="text-xl fa-solid fa-clock-rotate-left"></i>
          <h3 className='text-[16px]'>History</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-music"></i>
          <h3 className='text-[16px]'>Playlists</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-clock"></i>
          <h3 className='text-[16px]'>Watch Later</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-thumbs-up"></i>
          <h3 className='text-[16px]'>Liked Videos</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-download"></i>
          <h3 className='text-[16px]'>Downloads</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <i class=" text-xl fa-solid fa-scissors"></i>
          <h3 className='text-[16px]'>Your Clips</h3>
        </div>
      </div>

      {/* Divider */}
      <div className='w-[100%] h-[1px] bg-[#d5d4d4] my-4'></div>

      <div className='pl-6 flex flex-col gap-2'>
        <h2 className='pl-2 text-xl p-2'>Subscriptions</h2>
        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp1} className='w-[35px]' alt="" />
          <h3 className='text-[16px]'>1Faith</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp2} className='w-[32px]' alt="" />
          <h3 className='text-[16px]'>004-Minato</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp3} className='w-[32px]' alt="" />
          <h3 className='text-[16px]'>Aayin</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp4} className='w-[32px]' alt="" />
          <h3 className='text-[16px]'>Aly</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp5} className='w-[32px]' alt="" />
          <h3 className='text-[16px]'>Anmolfx</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp6} className='w-[32px]' alt="" />
          <h3 className='text-[16px]'>Azooz</h3>
        </div>

        <div className='flex items-center justify-start cursor-pointer gap-4 hover:bg-[#f2f2f2] rounded-[15px] p-2'>
          <img src={pfp1} className='w-[35px]' alt="" />
          <h3 className='text-[16px]'>1Faith</h3>
        </div>

        <div className='flex items-center justify-start hover:bg-[#f2f2f2] rounded-[15px] cursor-pointer pl-2'>
          <i class="fa-solid fa-chevron-down"></i>
          <h3 className='text-[16px] p-2'>Show more</h3>
        </div>
      </div>

    </div>
  )
}

export default Sidebar