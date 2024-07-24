import React from 'react';
import about from '../../../image/about.png'
const About = () => {
    return (
        <div>
            <div className="container">
                <div className='display-grid'>
                <img src={about} alt="" />
                <h1 className='absolute top-[220px] left-[650px] text-[36px] font-bold text-green-900 '>About Us</h1>
                </div>
            </div>
        </div>
    );
};

export default About;