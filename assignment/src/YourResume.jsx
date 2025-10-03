import React from 'react';
import './YourResume.scss'

import Girl from '../public/Girl.svg'
import underline from '../public/underline.svg'
import Star from '../public/star.svg'
import Hat from '../public/hat.svg'

const YourResume = () => {
    return (
        <main className='yourResume-main-container'>
            <div className='yourResume-inner-container'>
                <div className='inner-container-text'>
                    <header className='yourResume-heading-container'>
                        <h1>Your Resume </h1>
                        <div className='yourResume-headingAndUnderline'>
                            <h1><span>Deserves A Yes</span> Let’s</h1>
                            <img src={underline} alt="" />
                        </div>

                        <h1>Make It Happen</h1>
                    </header>
                    <div className='yourResume-paragraph-container'>
                        <p>If your resume isn’t getting responses, it’s time for an upgrade. Get an ATS-optimized resume crafted by HR experts to help you land more interviews. Our resumes are designed to get your foot in the door and place your name at the top of the shortlist.</p>
                    </div>
                    <div className='yourResume-button-container'>
                        <button className='resume-package'>
                            Resume Package
                        </button>

                        <button className='contact-us'>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='inner-container-image'>
                    <img src={Girl} alt="girl">
                    </img>
                    <div className='rating'>
                        <div className='rating-number'>
                            <p>4.9</p>
                        </div>
                        <div className='rating-text'>
                            <div className='rating-text-star'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='rating-text-text'><p>Instructor Rating</p></div>
                        </div>
                    </div>
                    <div className='resume-created'>
                        <div className='resume-created-logo'>
                            <img src={Hat} alt="star" />
                        </div>
                        <div className='resume-creted-other-container '>
                            <div className=' resume-created-number'>
                                <p>260+</p>
                            </div>
                            <div className='resume-created-text '><p>Online Resume Created</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default YourResume;