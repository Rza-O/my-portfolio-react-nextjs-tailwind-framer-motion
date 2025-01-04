import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
   return (
      <div className='mt-20'>
         <div className='text-center'>
            <a href="#top">
               <h2 className='text-4xl font-semibold'>Reza<span className='text-red-600 text-4xl font-bold'>.</span></h2>
            </a>
            <div className='w-max flex items-center gap-2 mx-auto'>
               <Image src={assets.mail_icon} className='w-6'></Image>
               shahreza.dev@gmail.com
            </div>
         </div>

         <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Shah Reza. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
               <li><a href="https://github.com/Rza-O" target='_blank'>GitHub</a></li>
               <li><a href="https://www.linkedin.com/in/andshahreza/" target='_blank'>LinkedIn</a></li>
               <li><a href="https://x.com/iRezaShohag" target='_blank'>X</a></li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;