import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <Image src="/portrait.png" alt="portrait" width="192" height="192" quality="100" priority={true}
                className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl"/>
                <span className="absolute bottom-0 right-0 text-4xl">
                👻
                </span>            
            
            </div>

        </div>
    </section>
  )
}

// if we're using images online, need to modify next.config.js
// section is same as div, but has more semantic meaning
// if everything belong to the same semantic meaning, better to use section

//emoji positioning:
// className="relative" on the <div>: 
//This sets the position of the <div> container to relative.
// It doesn't move the container itself but makes it the reference point (positioning context) for any absolutely positioned child elements. 
// This means that when you use absolute positioning on a child element, its position will be calculated relative to this <div>'s edges,
//not the entire page or its nearest positioned ancestor.

// className="absolute bottom-0 right-0" on the <span>:
// This applies absolute positioning to the <span>, removing it from the normal document flow.
//It's positioned in relation to the nearest positioned ancestor, which in this case, is the <div> with relative positioning.

// bottom-0: This moves the <span> to the bottom of the <div>, aligning its bottom edge with the bottom edge of the <div>.
// right-0: Similarly, this aligns the right edge of the <span> with the right edge of the <div>.