import React from 'react'
import Navbar  from "./Navbar.jsx";
import Page1Content from "./page1Content.jsx";
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";
const Section1 = () => {
    return (
        <div className='h-screen w-full '>
            <Navbar/>
            <Page1Content/>
            <LeftContent/>
            <RightContent/>
        </div>
    )
}
export default Section1
