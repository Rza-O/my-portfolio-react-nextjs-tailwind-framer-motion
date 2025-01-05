import { assets, projects } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import { IoGlobeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Works = ({ isDarkMode }) => {
   return (
      <motion.div
         
         className='max-w-7xl mx-auto'>
         <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-ovo'>My Portfolio</motion.h4>

         <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-ovo mb-12'>My Latest Projects</motion.h2>
         <div className='w-11/12 mx-auto'>
            {
               projects.map((project, idx) => (
                  <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                     key={idx} className='mb-12 border-b pb-6 flex flex-wrap lg:justify-center gap-8 items-center'>
                     <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='w-full lg:w-1/4'>
                        <Image src={project.image} alt='' className='mb-6 rounded'></Image>
                     </motion.div>
                     <motion.div
                        initial={{ opacity: 0, x: 20}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 1 }}
                        className='w-full max-w-2xl lg:w-3/4 '>
                        <h6 className='mb-2 font-semibold text-xl'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {
                           project.technologies.map((tech, idx) => (
                              <span key={idx} className={`mr-2 rounded ${isDarkMode ? 'border text-lightHover' : 'bg-lightHover'} px-2 py-1 text-sm font-medium`}>{tech}</span>
                           ))
                        }

                     </motion.div>
                     <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
                        <motion.a
                           initial={{ y: 30, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.3, delay: 0.3 }}
                           className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent' href={project.liveLink} target='_blank'>
                           Live Demo <IoGlobeSharp className='text-xl' /></motion.a>

                        <motion.a
                           initial={{ y: 30, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.4 }}
                           href={project.repo} download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black' target='_blank'>
                           Github Repo <FaGithub className='text-xl' /></motion.a>
                     </div>
                     {/* <div className='space-x-2 flex items-center justify-center'>
                        <Button>Live Demo</Button>
                        <RainbowButton className={'bg-white'}>Live Demo</RainbowButton>
                        <RainbowButton className={'bg-white'}>GitHub Repo</RainbowButton> 
                     </div> */}



                  </motion.div>
               ))
            }
         </div>
      </motion.div>
   );
};

export default Works;