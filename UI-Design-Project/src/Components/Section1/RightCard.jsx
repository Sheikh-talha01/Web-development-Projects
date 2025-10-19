import React from 'react'

const RightCard = () => {
    return (
        <div className='h-full w-80 overflow-hidden relative bg-red-500 rounded-4xl'>
            <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388" alt="Lady Professional"/>
            <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold'>1</h2>
                <div>
                    <p className='text-lg leading-normal text-white mb-10'>Here is the detail of picture in which we have a lady professional sitting on a chair</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}
export default RightCard
