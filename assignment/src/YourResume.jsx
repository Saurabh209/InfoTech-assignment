import React from 'react';
import './YourResume.scss'

import Girl from '../public/Girl.svg'
import underline from '../public/underline.svg'

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
                        <button>
                            Resume Package
                        </button>

                        <button>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='inner-container-image'>
                    <img src={Girl} alt="girl" />
                </div>
            </div>
        </main>
    );
};

export default YourResume;