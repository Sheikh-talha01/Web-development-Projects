import React from 'react'

import Card from './components/card.jsx'
const App = () => {

    const jobOpenings = [
        {
            brandLogo: "https://logo.clearbit.com/meta.com",
            companyName: "Meta",
            datePosted: "5 days ago",
            post: "Frontend Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$85/hr",
            location: "Menlo Park, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/apple.com",
            companyName: "Apple",
            datePosted: "2 weeks ago",
            post: "Machine Learning Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$90/hr",
            location: "Cupertino, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/amazon.com",
            companyName: "Amazon",
            datePosted: "3 days ago",
            post: "Cloud Solutions Architect",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$100/hr",
            location: "Seattle, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/netflix.com",
            companyName: "Netflix",
            datePosted: "1 week ago",
            post: "Backend Developer",
            tag1: "Part Time",
            tag2: "Junior Level",
            pay: "$70/hr",
            location: "Los Gatos, USA"
        },
        {
            brandLogo: "https://gsma.my.site.com/mwcoem/servlet/servlet.FileDownload?file=00PQt00001fg3ZHMAY",
            companyName: "Google",
            datePosted: "4 days ago",
            post: "Data Scientist",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$95/hr",
            location: "Mountain View, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/microsoft.com",
            companyName: "Microsoft",
            datePosted: "6 days ago",
            post: "AI Research Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$88/hr",
            location: "Redmond, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/openai.com",
            companyName: "OpenAI",
            datePosted: "3 weeks ago",
            post: "Prompt Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$110/hr",
            location: "San Francisco, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/nvidia.com",
            companyName: "NVIDIA",
            datePosted: "2 days ago",
            post: "GPU Software Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$92/hr",
            location: "Santa Clara, USA"
        },
        {
            brandLogo: "https://logo.clearbit.com/tesla.com",
            companyName: "Tesla",
            datePosted: "1 week ago",
            post: "Embedded Systems Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$89/hr",
            location: "Austin, USA"
        },
        {
            brandLogo: "https://yt3.googleusercontent.com/dhVlUr4qzdw97K77mitoVSZk8u3KLl4hWCeiAVNuoqG1W7WmcN86GSIl96Ge1PeauemTwCl5TA=s900-c-k-c0x00ffffff-no-rj",
            companyName: "IBM",
            datePosted: "4 weeks ago",
            post: "DevOps Engineer",
            tag1: "Part Time",
            tag2: "Junior Level",
            pay: "$60/hr",
            location: "Mansehra, Pakistan"
        }
    ];

    return (
        <>
            <div className="header-container">
                <h1>Find Your Next Opportunity</h1>
                <p>Explore thousands of job openings from top companies and find the perfect role for you. Your dream job is
                    just a click away.</p>
            </div>
            <div className='parent'>
                {jobOpenings.map(function (elem, idx) {
                    return <div key={idx}>
                        <Card company={elem.companyName} post={elem.post} logo={elem.brandLogo} posted_date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} pay={elem.pay}/>
                    </div>            } )}
            </div>
        </>

    )
}
export default App
