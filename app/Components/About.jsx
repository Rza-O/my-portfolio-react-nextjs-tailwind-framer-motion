import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
   return (
      <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
         <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
         <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-ovo'>About Me</motion.h2>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6 }}
               className='w-64 sm:w-80 rounded-3xl max-w-none'>
               <Image src={assets.user_image} alt='shah reza' className='w-full h-full rounded-3xl'></Image>
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className='flex-1'>
               <p className='mb-10 max-w-2xl font-ovo'>I am a driven professional with a strong foundation in web development, tech innovation, and team leadership. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges. Currently, I am honing my skills in web development, DSA, and backend technologies, with aspirations to bridge the gap between development and artificial intelligence. I am passionate about continuous learning, creative problem-solving, and contributing to innovative projects that make a difference.</p>

               <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                  {infoList.map(({ icon, iconDark, title, description }, idx) => (
                     <motion.li
                        whileHover={{ scale: 1.05 }}
                        key={idx} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                     </motion.li>
                  )
                  )}
               </motion.ul>

               <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0.5 }}
                  className='my-6 font-ovo text-gray-700 dark:text-white/80'>Tools I use</motion.h4>
               <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className='flex items-center gap-3 sm:gap-5'>
                  {
                     toolsData.map((tool, idx) => (
                        <motion.li
                           whileHover={{ scale: 1.1 }}
                           className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={idx}>
                           <Image src={tool} alt='Tool' className='w-5 sm:w-7'></Image>
                        </motion.li>
                     ))
                  }
               </motion.ul>
            </motion.div>
         </motion.div>
      </motion.div>
   );
};

export default About;