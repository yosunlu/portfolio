'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";


export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.1);
  return (
    <motion.section 
        ref = {ref}
        id='contact' 
        className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        viewport={{
            once:true,
        }}
        >
        
        <SectionHeading>Contact me</SectionHeading>

        <p className='text-gray-700 -mt-6'>
            Please contact me directly at {" "}
            <a className='underline' href='mailto:yushanlu1031@gmail.com'>
                yushanlu1031@gmail.com
            </a> {" "}
            or through this form.
        </p>

        <form className='mt-10 flex flex-col'>
            <input 
                className='h-14 px-4 backdrop:rounded-lg border borderBlack' 
                placeholder='Your email'
                type='email'/>
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4'
                placeholder='Your message'/>
            <button 
                type='submit' 
                className='group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white 
                    rounded-full outline-none transition-all focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105'>
                Submit
                <FaPaperPlane 
                    className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-transalte-y-1
                '/> {" "}
            </button>

            
        </form>
    </motion.section>
  )
}
