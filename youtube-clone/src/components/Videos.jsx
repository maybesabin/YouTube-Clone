import React from 'react'
import thumb1 from '../assets/thumbnails/thumb1.jpg'
import thumb2 from '../assets/thumbnails/thumb2.jpg'
import thumb3 from '../assets/thumbnails/thumb3.jpg'
import thumb4 from '../assets/thumbnails/thumb4.jpg'
import thumb5 from '../assets/thumbnails/thumb5.jpg'
import thumb6 from '../assets/thumbnails/thumb6.jpg'
import thumb7 from '../assets/thumbnails/thumb7.jpg'
import thumb8 from '../assets/thumbnails/thumb8.avif'
import thumb9 from '../assets/thumbnails/thumb9.jpg'
import thumb10 from '../assets/thumbnails/thumb10.jpg'
import logo1 from '../assets/pfp1.png'
import logo2 from '../assets/pfp2.png'
import logo3 from '../assets/pfp3.png'
import logo4 from '../assets/pfp4.png'
import logo5 from '../assets/pfp5.png'
import logo6 from '../assets/pfp6.png'

const Videos = () => {
  return (
    <div className='absolute top-[17%] left-[60%] gap-1 overflow-x-hidden translate-x-[-50%] w-[80%] pb -6 overflow-y-scroll flex items-start justify-start flex-wrap'>
        {/* Cards */}

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb1} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>YouTube Secrets you didn't know !</h3>
                    <h4 className='text-[14px] opacity-70'>Markiplier</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb2} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to make the best thumbnail.</h3>
                    <h4 className='text-[14px] opacity-70'>Video Editing</h4>
                    <h4 className='text-[14px] opacity-70'>12k views &#183; 1 day ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb3} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Add Music to your YT videos.</h3>
                    <h4 className='text-[14px] opacity-70'>TechFind</h4>
                    <h4 className='text-[14px] opacity-70'>15k views &#183; 10 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb4} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Despacito ~ Louis Fonsi ft. Daddy Yankee</h3>
                    <h4 className='text-[14px] opacity-70'>Louis Fonsi</h4>
                    <h4 className='text-[14px] opacity-70'>9.2B views &#183; 7 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb5} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo5} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Instantly download any videos!</h3>
                    <h4 className='text-[14px] opacity-70'>TechGuide</h4>
                    <h4 className='text-[14px] opacity-70'>225k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb6} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo6} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Secret YouTube App !</h3>
                    <h4 className='text-[14px] opacity-70'>Tech Burner</h4>
                    <h4 className='text-[14px] opacity-70'>500k views &#183; 7 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb7} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>TechTalk: With NVIDIA CEO</h3>
                    <h4 className='text-[14px] opacity-70'>TEDx Talks</h4>
                    <h4 className='text-[14px] opacity-70'>345k views &#183; 2 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb8} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Camera & Recording Guide</h3>
                    <h4 className='text-[14px] opacity-70'>Cinematography</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb9} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to manage time.</h3>
                    <h4 className='text-[14px] opacity-70'>OSI Talks</h4>
                    <h4 className='text-[14px] opacity-70'>24k views &#183; 4 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb10} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Triggered Insaan Unblocked me!</h3>
                    <h4 className='text-[14px] opacity-70'>EZsnippet</h4>
                    <h4 className='text-[14px] opacity-70'>600k views &#183; 6 months ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb1} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>YouTube Secrets you didn't know !</h3>
                    <h4 className='text-[14px] opacity-70'>Markiplier</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb2} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to make the best thumbnail.</h3>
                    <h4 className='text-[14px] opacity-70'>Video Editing</h4>
                    <h4 className='text-[14px] opacity-70'>12k views &#183; 1 day ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb3} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Add Music to your YT videos.</h3>
                    <h4 className='text-[14px] opacity-70'>TechFind</h4>
                    <h4 className='text-[14px] opacity-70'>15k views &#183; 10 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb4} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Despacito ~ Louis Fonsi ft. Daddy Yankee</h3>
                    <h4 className='text-[14px] opacity-70'>Louis Fonsi</h4>
                    <h4 className='text-[14px] opacity-70'>9.2B views &#183; 7 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb5} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo5} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Instantly download any videos!</h3>
                    <h4 className='text-[14px] opacity-70'>TechGuide</h4>
                    <h4 className='text-[14px] opacity-70'>225k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb6} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo6} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Secret YouTube App !</h3>
                    <h4 className='text-[14px] opacity-70'>Tech Burner</h4>
                    <h4 className='text-[14px] opacity-70'>500k views &#183; 7 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb7} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>TechTalk: With NVIDIA CEO</h3>
                    <h4 className='text-[14px] opacity-70'>TEDx Talks</h4>
                    <h4 className='text-[14px] opacity-70'>345k views &#183; 2 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb8} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Camera & Recording Guide</h3>
                    <h4 className='text-[14px] opacity-70'>Cinematography</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb9} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to manage time.</h3>
                    <h4 className='text-[14px] opacity-70'>OSI Talks</h4>
                    <h4 className='text-[14px] opacity-70'>24k views &#183; 4 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb10} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Triggered Insaan Unblocked me!</h3>
                    <h4 className='text-[14px] opacity-70'>EZsnippet</h4>
                    <h4 className='text-[14px] opacity-70'>600k views &#183; 6 months ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb1} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>YouTube Secrets you didn't know !</h3>
                    <h4 className='text-[14px] opacity-70'>Markiplier</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb2} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to make the best thumbnail.</h3>
                    <h4 className='text-[14px] opacity-70'>Video Editing</h4>
                    <h4 className='text-[14px] opacity-70'>12k views &#183; 1 day ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb3} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Add Music to your YT videos.</h3>
                    <h4 className='text-[14px] opacity-70'>TechFind</h4>
                    <h4 className='text-[14px] opacity-70'>15k views &#183; 10 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb4} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Despacito ~ Louis Fonsi ft. Daddy Yankee</h3>
                    <h4 className='text-[14px] opacity-70'>Louis Fonsi</h4>
                    <h4 className='text-[14px] opacity-70'>9.2B views &#183; 7 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb5} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo5} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Instantly download any videos!</h3>
                    <h4 className='text-[14px] opacity-70'>TechGuide</h4>
                    <h4 className='text-[14px] opacity-70'>225k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb6} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo6} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Secret YouTube App !</h3>
                    <h4 className='text-[14px] opacity-70'>Tech Burner</h4>
                    <h4 className='text-[14px] opacity-70'>500k views &#183; 7 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb7} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>TechTalk: With NVIDIA CEO</h3>
                    <h4 className='text-[14px] opacity-70'>TEDx Talks</h4>
                    <h4 className='text-[14px] opacity-70'>345k views &#183; 2 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb8} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Camera & Recording Guide</h3>
                    <h4 className='text-[14px] opacity-70'>Cinematography</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb9} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to manage time.</h3>
                    <h4 className='text-[14px] opacity-70'>OSI Talks</h4>
                    <h4 className='text-[14px] opacity-70'>24k views &#183; 4 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb10} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Triggered Insaan Unblocked me!</h3>
                    <h4 className='text-[14px] opacity-70'>EZsnippet</h4>
                    <h4 className='text-[14px] opacity-70'>600k views &#183; 6 months ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb1} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>YouTube Secrets you didn't know !</h3>
                    <h4 className='text-[14px] opacity-70'>Markiplier</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb2} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to make the best thumbnail.</h3>
                    <h4 className='text-[14px] opacity-70'>Video Editing</h4>
                    <h4 className='text-[14px] opacity-70'>12k views &#183; 1 day ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb3} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo3} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Add Music to your YT videos.</h3>
                    <h4 className='text-[14px] opacity-70'>TechFind</h4>
                    <h4 className='text-[14px] opacity-70'>15k views &#183; 10 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb4} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo4} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>Despacito ~ Louis Fonsi ft. Daddy Yankee</h3>
                    <h4 className='text-[14px] opacity-70'>Louis Fonsi</h4>
                    <h4 className='text-[14px] opacity-70'>9.2B views &#183; 7 years ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb1} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo1} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>YouTube Secrets you didn't know !</h3>
                    <h4 className='text-[14px] opacity-70'>Markiplier</h4>
                    <h4 className='text-[14px] opacity-70'>125k views &#183; 3 days ago</h4>
                </div>
            </div>
        </div>

        <div className='w-[370px] cursor-pointer pb-9 flex gap-4 flex-col items-start justify-center'>
            <img src={thumb2} className='w-[350px] h-[200px] rounded-[15px]' alt="" />
            <div className='flex items-start gap-4 justify-center'>
                <img src={logo2} className='w-[45px]' alt="" />
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-[16px] font-medium'>How to make the best thumbnail.</h3>
                    <h4 className='text-[14px] opacity-70'>Video Editing</h4>
                    <h4 className='text-[14px] opacity-70'>12k views &#183; 1 day ago</h4>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center hover:bg-[#f2f2f2] rounded-[15px] cursor-pointer pl-2'>
          <i class="fa-solid fa-chevron-down"></i>
          <h3 className='text-[16px] p-2'>Show more</h3>
        </div>
    </div>
  )
}

export default Videos