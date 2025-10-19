import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from "./HeroText.jsx";
import ArrowText from "./ArrowText.jsx";

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col w-1/3 justify-between '>
            <HeroText/>
            <ArrowText/>
        </div>
    )
}
export default LeftContent
