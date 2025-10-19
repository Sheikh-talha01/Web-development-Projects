import React from 'react'
import RightCardContent from "./RightCardContent.jsx";

const RightCard = ({ img, tag, color, intro, index }) => {
    const imageSrc = img || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388";
    return (
        <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl snap-start transition-transform duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl'>
            <img className='h-full w-full object-cover' src={imageSrc} alt={tag || 'Card image'} />

            {/* Readability overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none'></div>

            <RightCardContent tag={tag} intro={intro} color={color} index={index} />

        </div>
    )
}
export default RightCard
