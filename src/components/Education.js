import React from 'react';
import ReactDOM from 'react-dom/client';
import './Education.css';

function Education() {
    return (
        <div className='Education' id='Education'>
            <div className='edu-container'>
                <h1 className='Education-text'>Education</h1>

                <div className='Column-container'>
                    <div className='School-column'>
                        <h1 className='Level-name'>Undergraduate Studies</h1>
                        <p className='School'>University of Florida</p>
                        <p className='School'>2016 - 2020</p>                
                        <p>-Bachelor's of Science in Microbiology</p>
                        <p>-Bachelor's of Science in Neuroscience</p>                   
                        <p>-Minor in Health Disparities in Society</p>
                    </div>
                    <div className='Gator-pic-column'>
                        <img className='Gator-logo' src='./assets/Florida_Gators_logo.png'></img>
                    </div>
                    <div className='School-column'>
                        <h1 className='Level-name'>Graduate Studies</h1>
                        <p className='School'>University of Florida</p>
                        <p className='School'>2020 - 2022</p>                
                        <p>-Master's of Science in Information Systems and Operations Management</p>
                        <p>-Concentration in Data Science</p>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;