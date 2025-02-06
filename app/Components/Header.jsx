import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from "motion/react"
import Image from 'next/image';


const Header = ({ isDarkMode }) => {
   return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
         <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
         >
            <Image src={assets.profileImg2} alt='' className='rounded-full w-28 lg:w-32 mt-9'></Image>
         </motion.div>

         <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Shah Reza  <Image src={assets.hand_icon} alt='' className='w-6'></Image></motion.h3>

         <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='text-3xl sm:text-6xl lg:[66px] font-ovo'>Fullstack web developer based in Bangladesh</motion.h1>

         {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='max-w-2xl mx-auto font-ovo'>
            I am a frontend developer from Dhaka, Bangladesh. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges.
         </motion.p> */}

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex items-center gap-3 sm:gap-5'
         >
            <a href="https://github.com/Rza-O" target='_blank'>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.01 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
               >
                  <Image src={isDarkMode ? assets.gitLight : assets.github} className='w-5 sm:w-7'></Image>
               </motion.div>
            </a>

            <a href="https://www.linkedin.com/in/andshahreza/" target='_blank'>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.01 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
               >
                  <Image src={assets.linkedin} className='w-5 sm:w-7'></Image>
               </motion.div>
            </a>

            <a href="https://x.com/iRezaShohag" target='_blank'>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.01 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
               >
                  <Image src={assets.x} className='w-5 sm:w-7'></Image>
               </motion.div>
            </a>

            <a href="https://www.instagram.com/andshahreza/" target='_blank'>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.01 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
               >
                  <Image src={assets.instagram} className=' sm:w-7'></Image>
               </motion.div>
            </a>

         </motion.div>

         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1 }}
               className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent' href="#contact">
               Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'></Image></motion.a>

            <motion.a
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1.2 }}
               href="/fullstack_developer_resume_of_md_shah_ahamed_reza.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
               My Resume<Image src={assets.download_icon} alt='' className='w-4'></Image></motion.a>
         </div>
      </div>
   );
};

export default Header;