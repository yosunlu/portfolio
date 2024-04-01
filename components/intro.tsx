'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                  initial = {{opacity: 0, scale: 0}}
                  animate = {{opacity: 1, scale: 1}}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                >
                  <Image src="/portrait.png" alt="portrait" width="192" height="192" quality="100" priority={true}
                  className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl"/>
                  <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}  
                    transition={{
                      type: "spring",
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
          <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}

          >
          <span className="font-bold">Hi there! I'm Yushan.</span>  I am currently pursuing a Master's degree in Computer Science at UW-Madison. 
              I am a <span className="font-bold">full-stack developer </span>  
               who enjoys <span className="font-bold">learning</span> and <span className="font-bold">building stuffs!</span>
          </motion.p>
        </div>
    </section>
  )
}

// if we're using images online, need to modify next.config.js
// section is same as div, but has more semantic meaning
// if everything belong to the same semantic meaning, better to use section

// emoji positioning:
// className="relative" on the <div>: 
// This sets the position of the <div> container to relative.
// It doesn't move the container itself but makes it the reference point (positioning context) for any absolutely positioned child elements. 
// This means that when you use absolute positioning on a child element, its position will be calculated relative to this <div>'s edges,
// not the entire page or its nearest positioned ancestor.

// className="absolute bottom-0 right-0" on the <span>:
// This applies absolute positioning to the <span>, removing it from the normal document flow.
// It's positioned in relation to the nearest positioned ancestor, which in this case, is the <div> with relative positioning.

// bottom-0: This moves the <span> to the bottom of the <div>, aligning its bottom edge with the bottom edge of the <div>.
// right-0: Similarly, this aligns the right edge of the <span> with the right edge of the <div>.

// !leading-[1.5] overwrites the space between line