import React from 'react'
import logo from '../assets/youtube-logo.png'
import '../index.css'

const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100%] bg-white z-10 h-16'>
            <div className='flex items-center justify-evenly gap-[27rem] pt-4 '>
                <div className='flex items-center justify-center gap-4'>
                <i class="cursor-pointer text-2xl hover:bg-[#f2f2f2] rounded-[50%] px-3 py-2 fa-solid fa-bars" ></i>
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

                <div className='flex items-center justify-center gap-5 pr-4'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="30px" className='cursor-pointer' height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <i class="fa-regular fa-user text-xl text-white bg-black rounded-[50%] cursor-pointer px-2 py-1"></i>
                </div>
            </div>

            {/* Category */}
            <div className='flex overflow-x-scroll overflow-y-hidden bg-white ml-[23rem] items-start justify-start py-6 gap-4'>
                <a href=""><h4 className='text-box'>All</h4></a>
                <a href=""><h4 className='text-box'>Gaming</h4></a>
                <a href=""><h4 className='text-box'>Music</h4></a>
                <a href=""><h4 className='text-box'>Mixes</h4></a>
                <a href=""><h4 className='text-box'>Valorant</h4></a>
                <a href=""><h4 className='text-box'>Coding</h4></a>
                <a href=""><h4 className='text-box'>Martial Arts</h4></a>
                <a href=""><h4 className='text-box'>Live</h4></a>
                <a href=""><h4 className='text-box'>APIs</h4></a>
                <a href=""><h4 className='text-box'>Freestyle rap</h4></a>
                <a href=""><h4 className='text-box'>Editing</h4></a>
                <a href=""><h4 className='text-box'>Rapping</h4></a>
                <a href=""><h4 className='text-box'>Asian Music</h4></a>
                <a href=""><h4 className='text-box'>ELectronic Music</h4></a>
            </div>

        </div>  
    )
}

export default Navbar