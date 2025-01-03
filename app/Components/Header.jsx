import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
   return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
         <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32 mt-6'></Image>
         </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Shah Reza  <Image src={assets.hand_icon} alt='' className='w-6'></Image></h3>
         <h1 className='text-3xl sm:text-6xl lg:[66px] font-ovo'>frontend web developer based in Bangladesh</h1>
         <p className='max-w-2xl mx-auto font-ovo'>
            I am a frontend developer from Dhaka, Bangladesh. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges.
         </p>
         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2' href="#contact">Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'></Image></a>
            <a href="/ShahReza.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume<Image src={assets.download_icon} alt='' className='w-4'></Image></a>
         </div>
      </div>
   );
};

export default Header;