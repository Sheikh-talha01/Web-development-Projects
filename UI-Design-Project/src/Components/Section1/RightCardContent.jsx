import React from 'react'

const RightCardContent = ({ index, tag, intro, color }) => {
    const bg = color || '#2563eb'; // default to a blue if color is not provided
    return (
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-black rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>{index ?? ''}</h2>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>{intro || 'Here is the detail of picture in which we have a lady professional sitting on a chair giving a bearutiful smile'}</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: bg }} className='text-white font-medium px-8 py-2 rounded-full'>{tag || 'Tag'}</button>
                    <button style={{ backgroundColor: bg }} className='text-white font-medium px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    )
}
export default RightCardContent
