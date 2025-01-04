import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import { BorderBeam } from '@/components/ui/border-beam';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

const MySkills = ({ isDarkMode }) => {
   return (
      <motion.div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
         <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-center mb-2 text-lg font-ovo'>What I Offer</motion.h4>
         <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-center text-5xl font-ovo'>My Skills</motion.h2>

         {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='text-center max-w-2xl mx-auto mt-6 mb-12 font-ovo'>I am a frontend developer from Dhaka, Bangladesh. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges.</motion.p> */}

         {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className='grid grid-cols-auto gap-6 my-10'>
            {
               serviceData.map(({ icon, title, description, link }, idx) => (
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     key={idx} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                     <Image src={icon} alt='' className='w-10'></Image>
                     <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                     <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                     <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read More <Image src={assets.right_arrow} className='w-4' alt=''></Image>
                     </a>
                  </motion.div>
               ))
            }
         </motion.div> */}

         {/* <div className='w-11/12 mx-auto p-9  items-center justify-center relative rounded-xl my-6 hidden lg:flex'>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1.5, delay: 0.6 }}
               className='grid grid-cols-1 md:flex  items-center gap-4 sm:gap-5 space-y-3'
            >
               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 mt-3 '
                  >
                     <Image src={assets.js} className='w-5 sm:w-7'></Image>

                  </motion.div>
                  <p className='text-sm'>JavaScript</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.react} className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>React JS</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={isDarkMode ? assets.nodeLight : assets.nodeDark} className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Node Js</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={isDarkMode ? assets.expressLight : assets.express} className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Express JS</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.mongodb} className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Mongo DB</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.nextjs} alt='' className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Next JS</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.tailwind} alt='' className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Tailwind CSS</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.motion} alt='' className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>Framer</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.html} alt='' className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>HTML 5</p>
               </div>

               <div className='flex flex-col items-center gap-2'>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.01 }}
                     className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  >
                     <Image src={assets.css} className='w-5 sm:w-7'></Image>
                  </motion.div>
                  <p className='text-sm'>CSS 3</p>
               </div>

            </motion.div>
            <BorderBeam size={150} duration={18} delay={9} />
         </div> */}

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-auto gap-6 max-w-6xl mx-auto  my-8'>
            
            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.js}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>JavaScript</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.react}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>React Js</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={isDarkMode? assets.nodeLight : assets.nodeDark}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Node JS</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={isDarkMode ? assets.expressLight : assets.express}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Express Js</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.mongo}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Mongo DB</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.nextjs}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Next JS</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.tailwind}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Tailwind CSS</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.motion}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Framer Motion</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.html}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>HTML 5</h3>
            </div>

            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex-col flex items-center justify-evenly'>
               <Image src={assets.css}></Image>
               <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>CSS 3</h3>
            </div>
            
         </motion.div>

      </motion.div>
   );
};

export default MySkills;