import React from 'react';
import './WhatYouGet.scss'

// importing images
import cardOneImage from '../public/card_1.svg'
import cardTwoImage from '../public/card_2.svg'
import cardThreeImage from '../public/card_3.svg'
import cardFourImage from '../public/card_4.svg'

const WhatYouGet = () => {

    const cardData = [
        {
            url: cardOneImage,
            heading: 'A Resume That Passes ATS Filters',
            description: 'Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.'
        },
        {
            url: cardTwoImage,
            heading: 'A Cover Letter That Gets Read',
            description: 'Stand out with a cover letter that speaks directly to the role and reflects your strengths.'
        },
        {
            url: cardThreeImage,
            heading: 'A LinkedIn Profile That Works For You',
            description: 'Attract the right eyes, start conversations, and show up in recruiter searches.'
        },
        {
            url: cardFourImage,
            heading: 'Interview Confidence',
            description: 'Interview preperation with real HR professionals so you speak clearly,confidently, and convincingly.'
        },

    ]

    return (
        <div className='what-you-get-main-contianer'>
            <div className='container-one'>
                <button>What You Get</button>
                <h2>You’re not just another applicant and your resume shouldn’t look like one</h2>
            </div>
            <div className='container-two'>
                {cardData.map((item, index) => {
                    return (
                        <div key={index} className='card'>
                            <div className='card-upper-section'>
                                <div className='card-upper-section-image-container'> 
                                    <img src={item?.url} alt="card_image" />
                                </div>
                                <div >
                                    <p>
                                        {item.heading}
                                    </p>
                                </div>
                            </div>
                            <div className='card-lower-section'>
                                <p>
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    );
};

export default WhatYouGet;