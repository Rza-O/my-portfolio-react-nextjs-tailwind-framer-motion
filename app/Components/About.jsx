import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
   return (
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
         <h2 className='text-center text-5xl font-ovo'>About Me</h2>

         <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
               <Image src={assets.user_image} alt='shah reza' className='w-full h-full rounded-3xl'></Image>
            </div>
            <div className='flex-1'>
               <p className='mb-10 max-w-2xl font-ovo'>I am a driven professional with a strong foundation in web development, tech innovation, and team leadership. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges. Currently, I am honing my skills in web development, DSA, and backend technologies, with aspirations to bridge the gap between development and artificial intelligence. I am passionate about continuous learning, creative problem-solving, and contributing to innovative projects that make a difference.</p>

               <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                  {infoList.map(({icon, iconDark, title, description}, idx) => (
                     <li key={idx} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                        <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                     </li>
                  )
                  )}
               </ul>

               <h4 className='my-6 font-ovo text-gray-700'>Tools I use</h4>
               <ul className='flex items-center gap-3 sm:gap-5'>
                  {
                     toolsData.map((tool, idx) => (
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={idx}>
                           <Image src={tool} alt='Tool' className='w-5 sm:w-7'></Image>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </div>
   );
};

export default About;