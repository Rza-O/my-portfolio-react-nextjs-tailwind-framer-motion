import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
   return (
      <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{duration: 1}}
      >
         <motion.h4
            initial={{ opacity: 0, y:-20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-ovo'>My Portfolio</motion.h4>

         <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-ovo'>My Latest Projects</motion.h2>

         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='text-center max-w-2xl mx-auto mt-6 mb-12 font-ovo'>I am a frontend developer from Dhaka, Bangladesh. My expertise lies in fostering collaboration, optimizing resources, and embracing new technologies to solve real-world challenges.</motion.p>

         {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
            {
               workData.map((project, idx) => (
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     transition={{duration: 0.3}}
                     className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={idx} style={{ backgroundImage: `url(${project.bgImage})` }}>
                     
                     <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                           <h2 className='font-semibold'>{project.title}</h2>
                           <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <Image src={assets.arrow_icon} alt='' className='w-5'></Image>
                        </div>
                     </div>
                  </motion.div>)
               )
            }
         </motion.div> */}


         <div>
            
         </div>



         <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show More <Image src={isDarkMode? assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='' className='w-4'></Image>
         </motion.a>
      </motion.div>
   );
};

export default Projects;