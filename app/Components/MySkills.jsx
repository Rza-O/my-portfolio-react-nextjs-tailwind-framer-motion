import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const MySkills = () => {
   return (
      <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-ovo'>What I Offer</h4>
         <h2 className='text-center text-5xl font-ovo'>My Skills</h2>
         <p className='text-center max-w-2xl mx-auto mt-6 mb-12 font-ovo'>I am a frontend developer from Dhaka, Bangladesh. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges.</p>

         <div className='grid grid-cols-auto gap-6 my-10'>
            {
               serviceData.map(({ icon, title, description, link }, idx) => (
                  <div key={idx} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                     <Image src={icon} alt='' className='w-10'></Image>
                     <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                     <p className='text-sm text-gray-600 leading-5'>{description}</p>
                     <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read More <Image src={assets.right_arrow} className='w-4' alt=''></Image>
                     </a>
                  </div>
               ))
            }
         </div>

      </div>
   );
};

export default MySkills;