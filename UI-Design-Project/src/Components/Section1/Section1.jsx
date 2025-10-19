import React from 'react'
import Navbar  from "./Navbar.jsx";
import Page1Content from "./page1Content.jsx";
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";
const Section1 = (props) => {
    return (
        <div className='h-screen w-full '>
            <Navbar/>
            <Page1Content users={props.users}/>
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}
export default Section1
