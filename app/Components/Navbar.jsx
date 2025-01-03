import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
   return (
      <div>
         <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='' className='w-full'></Image>
         </div>
         <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
            {/* <a href="">
               <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
            </a> */}

            <a href="#top">
               <h2 className='text-4xl font-semibold'>Reza<span className='text-red-600 text-4xl font-bold'>.</span></h2>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 bg-white shadow-sm bg-opacity-50 rounded-full'>
               <li><a className='font-ovo' href="#top">Home</a></li>
               <li><a className='font-ovo' href="#about">About</a></li>
               <li><a className='font-ovo' href="#skills">Skills</a></li>
               <li><a className='font-ovo' href="#work">My Works</a></li>
               <li><a className='font-ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>

               <button className=''>
                  <Image src={assets.moon_icon} alt='' className='w-6'></Image>
               </button>

               <a href="#contact" className='hidden md:flex gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 items-center font-ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt=''/></a>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;