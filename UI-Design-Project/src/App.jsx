import React from 'react'
import Section1 from'./Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const App = () => {

    const users = [
        {
            img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388',
            intro: '',
            color:'royalblue',
            tag: 'Satisfied'
        },
        {
            img:'https://images.unsplash.com/photo-1624797432677-6f803a98acb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386',

            intro: '',
            color:'Lightseagreen',
            tag: 'UnderServed'
        },
        {
            img:'https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435',
            intro: '',
            color:'Pink',
            tag: 'Satisfied'
        },
        {
            img:'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388',
            intro: '',
            color:'Lightgray',
            tag: 'Underbanked'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464',
            intro: '',
            color:'#f59e0b',
            tag: 'UnderServed'
        }
    ]
    return (
        <div>
            <Section1 users={users}/>
            <Section2/>
        </div>

    )
}
export default App
