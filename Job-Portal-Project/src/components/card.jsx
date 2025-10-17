import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (pros) => {
    return (
        <div className='card'>
            <div>
                <div className='top'>
                    <img src={pros.logo} alt='amazon picture'/>
                    <button>Save <Bookmark  size={12}/></button>
                </div>
                <div className='center'>
                    <h3>{pros.company} <span>{pros.posted_date}</span></h3>
                    <h2>{pros.post}</h2>
                    <div className='tag'>
                        <h4>{pros.tag1}</h4>
                        <h4>{pros.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{pros.pay}</h3>
                    <p>{pros.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}
export default Card;
