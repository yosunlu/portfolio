'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs' 
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                  initial = {{opacity: 0, scale: 0}}
                  animate = {{opacity: 1, scale: 1}}
                  transition={{
                    type: 'tween',
                    duration: 0.2,
                  }}
                >
                  <Image src='/me-modified.png' alt='portrait' width='192' height='192' quality='100' priority={true}
                  className='h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl'/>
                  <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}  
                    transition={{
                      type: 'spring',
                      stiffness: 125,
                      delay: 0.1,
                      duration: 0.7,
                    }}                
                  >
                  👻
                  </motion.span>      
                </motion.div>
      
            </div>

        </div>
        <div>
          <motion.h1 className='mb-10 mt-4 px-3.5 text-2xl font-medium !leading-[1.5] sm:text-2xl'
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}>

          <span className='font-bold'>Hi there! I'm Yushan.</span>  I am currently a graudatue studentat UW-Madison studying Computer Science. 
              My interests lie in <span className='font-bold'>full-stack development </span> and
            <span className='font-bold'> Data Engineering</span>.
          </motion.h1>
          
          <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition={{delay: 0.1}}>          
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1.5 transition'
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
            />
            </Link>
            
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  
            active:scale-105 transition cursor-pointer border border-black/20' href='/CV.pdf' download>Download CV 
            <HiDownload className='opacity-60 group-hover:translate-y-1 transition '/></a>
            
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  
            active:scale-105 transition cursor-pointer border border-black/20' href='https://www.linkedin.com/in/yushanlu1031/' target='_blank'><BsLinkedin/></a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  
            active:scale-105 transition cursor-pointer border border-black/20' href='https://github.com/yosunlu' target='_blank'><FaGithubSquare /></a>
          </motion.div>
        </div>
    </section>
  )
}

// if we're using images online, need to modify next.config.js
// section is same as div, but has more semantic meaning
// if everything belong to the same semantic meaning, better to use section

// emoji positioning:
// className='relative' on the <div>: 
// This sets the position of the <div> container to relative.
// It doesn't move the container itself but makes it the reference point (positioning context) for any absolutely positioned child elements. 
// This means that when you use absolute positioning on a child element, its position will be calculated relative to this <div>'s edges,
// not the entire page or its nearest positioned ancestor.

// className='absolute bottom-0 right-0' on the <span>:
// This applies absolute positioning to the <span>, removing it from the normal document flow.
// It's positioned in relation to the nearest positioned ancestor, which in this case, is the <div> with relative positioning.

// bottom-0: This moves the <span> to the bottom of the <div>, aligning its bottom edge with the bottom edge of the <div>.
// right-0: Similarly, this aligns the right edge of the <span> with the right edge of the <div>.

// !leading-[1.5] overwrites the space between line

// flex-col sm:flex-row>: for smaller layout, use col, for largerm use row

// outline-none 會把原本變大的效果取消 focus:scale-110 會讓靠近的時候加強