import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

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
            className='flex w-full flex-col lg:flex-row items-center lg:items-stretch gap-20 my-20'>
            {/* about image */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6 }}
               className='w-64 sm:w-80 rounded-3xl max-w-none'>
               <Image src={assets.profileImg} alt='shah reza' className='w-full object-cover h-2/3 lg:h-1/2 2xl:h-2/3 rounded-3xl'></Image>
            </motion.div>
            {/* About content */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className='flex-1'>
               <p className='mb-10 max-w-4xl font-ovo'>My journey with computers began when I was in the 4th grade, a curious child in awe of a device my uncle brought home—a simple computer that sparked a lifelong fascination. By the 7th grade, I taught myself C programming, spending hours experimenting with code, fueled by an unrelenting desire to create something of my own. Those early days planted a seed, a dream to one day become a software engineer.
                  <br />
                  Years later, I pursued this dream by enrolling in the University of Manitoba in Canada to study Computer Science. But as fate would have it, the pandemic disrupted my plans, and I found myself returning home before completing my degree. Back in Bangladesh, I took on the role of Assistant General Manager at Supti Chemical Company. The job offered financial security and respect, yet it left me feeling unfulfilled. Deep down, I knew I was far from where I truly wanted to be—creating, building, and solving problems as a software engineer.
                  <br />
                  Even though I started my journey later than most, I remind myself that starting late is better than never starting at all. With this mindset, I transitioned into web development, embracing every challenge with determination and a renewed sense of purpose. Along the way, I’ve cultivated skills not just in coding but also in resilience, self-discipline, and passion for learning.
                  <br />
                  Beyond my professional aspirations, I’m a self-taught guitarist, drawn to the soul-stirring melodies of blues. There’s something magical about losing myself in the rhythm of a blues guitar, my favorite genre to play. And when I’m not coding or strumming, you’ll often find me cheering passionately for FC Barcelona, a team that has taught me the beauty of persistence, teamwork, and unwavering belief.
                  <br />
                  Life hasn’t always followed the path I imagined, but each twist and turn has shaped the person I am today. Through moments of challenge and triumph, I’ve come to see every setback as an opportunity to grow and move closer to the life I’ve always envisioned—one driven by passion, creativity, and purpose.
               </p>

               {/* <motion.ul
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
               </motion.ul> */}

               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 max-w-3xl'>
                  <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                     <IoLocationOutline className='text-2xl' />
                     <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Location</h3>
                     <p className='text-gray-600 text-sm dark:text-white/80'>Dhaka, Bangladesh</p>
                  </div>
                  <a href="https://wa.me/+8801970853705" target='_blank'>
                     <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                        <HiOutlinePhone className='text-2xl' />
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Phone</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80 overflow-auto'>+8801970853705</p>
                     </div>
                  </a>
                  <a href="mailto:shahreza.dev@gmail.com">
                     <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                        <Image src={assets.mail_icon} className='w-6' alt=''></Image>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Email</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80 '>shahreza.dev@gmail.com</p>
                     </div>
                  </a>
               </motion.div>


               {/* <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0.5 }}
                  className='my-6 font-ovo text-gray-700 dark:text-white/80'>Where you can find me</motion.h4> */}


               {/* <motion.ul
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
               </motion.ul> */}


               {/* <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className='flex items-center gap-3 sm:gap-5'
               >
                  <a href="https://github.com/Rza-O" target='_blank'>
                     <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{duration: 0.01}}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                     >
                        <Image src={assets.github} className='w-5 sm:w-7'></Image>
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
                        transition={{duration: 0.01}}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                     >
                        <Image src={assets.instagram} className=' sm:w-7'></Image>
                     </motion.div>
                  </a>

               </motion.div> */}


            </motion.div>
         </motion.div>
      </motion.div>
   );
};

export default About;