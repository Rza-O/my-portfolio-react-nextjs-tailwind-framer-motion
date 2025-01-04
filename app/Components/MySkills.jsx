import { BorderBeam } from '@/components/ui/border-beam';
import { infoList } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Meteors from '@/components/ui/meteors';

const MySkills = () => {
   return (
      <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-ovo'>What I Offer</h4>
         <h2 className='text-center text-5xl font-ovo mb-8'>My Skills</h2>

         <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
               Border Beam
            </span> */}
            <Meteors number={50} />
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
               {infoList.map(({ icon, iconDark, title, description }, idx) => (
                  <li key={idx} className='border-[0.5px] border-gray-400 rounded-xl px-8 py-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black flex flex-col items-center '>
                     <Image src={icon} alt={title} className='w-12 mt-3'></Image>
                     <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                     {/* <p className='text-gray-600 text-sm'>{description}</p> */}
                  </li>
               )
               )}
            </ul>
            <BorderBeam size={250} duration={12} delay={9} />
         </div>
      </div>
   );
};

export default MySkills;