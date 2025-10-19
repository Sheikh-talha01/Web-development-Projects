import React from 'react'
import RightCard from "./RightCard.jsx";

const RightContent = (props) => {
    const users = Array.isArray(props.users) ? props.users : [];
    return (
        <div id='right' className='h-full overflow-x-auto rounded-4xl w-2/3 p-6 flex flex-nowrap gap-10'>
            {users.map((user, idx) => (
                <RightCard key={idx} img={user.img} tag={user.tag} color={user.color} intro={user.intro} index={idx + 1} />
            ))}
        </div>
    )
}
export default RightContent
