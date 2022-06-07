import React from 'react';
import ReactDOM from 'react-dom/client';
import './Experience.css';

function Experience() {
    return (
        <div className='Experience' id='Experience'>
           <h1 className='Experience-header'>Experience</h1>

           <div className='Experience-slot'>
                <h2 className='Experience-name'>Home Title Lock - San Diego, CA | Software Engineering Intern</h2>
                <h3 className='Experience-date'>May 2021 - September 2021</h3>
                <ul>
                    <li className='Experience-description'>
                    Headed systems design and development of iOS app to increase customer acquisition and improve existing customer experience
                    </li>
                    <li className='Experience-description'>
                    Mentored by senior engineers on best coding practices, A/B testing, integration testing, data privacy                    </li>
                    <li className='Experience-description'>
                    Worked within a dynamic and highly collaborative team of both technical and non-technical colleagues
                    </li>
                    
                </ul>
           </div>
           <hr></hr>
           <div className='Experience-slot'>
                <h2 className='Experience-name'>Banter (Startup) - Gainesville, FL | Lead Software Engineer & Founder</h2>
                <h3 className='Experience-date'>May 2021 - September 2021</h3>
                <ul>
                    <li className='Experience-description'>
                    Aimed to tap into once-proven market for college-centric anonymous social media, oversaw corporate
                    management/compliance, taxes, financials, legal compliance, and core product engineering from scratch to beta                    
                    </li>
                    <li className='Experience-description'>
                    Lead team of Fortune 500 professionals and one intern to design product and build an auto-scalable platform via
                    Swift, Xcode, and Firebase/GCP with secure authentication, lightning-fast data queries, and intuitive UI/UX
                    </li>
                    <li className='Experience-description'>
                    Shutdown in April 2021 during final beta due to lack of capital and pressure from competition :(
                    </li>
                </ul>
           </div>
           <hr></hr>      
           <div className='Experience-slot'>
                <h2 className='Experience-name'>UF Health Institute for Wound Research, Department of Obstetrics and Gynecology - Gainesville, FL | Lab Technician</h2>
                <h3 className='Experience-date'>January 2017 - January 2020</h3>
                <ul>
                    <li className='Experience-description'>
                    Designed and executed a variety of experiments and clinical trials, generated novel data, worked on public and
                    private sector contracts, collaborated with tenured professors, physicians, post-docs, grad students, etc.
                    </li>
                    <li className='Experience-description'>
                    Focused on identifying agents with biofilm-disrupting capabilities to improve clinical outcomes
                    </li>
                    <li className='Experience-description'>
                    Improved efficiency of lab operations and efficacy of critical protocols (pigskin sterilization) by over 100%
                    </li>
                </ul>
           </div>
           <hr></hr>      
           <div className='Experience-slot'>
                <h2 className='Experience-name'>Alpha Epsilon Delta Honor Society - Gainesville, FL | Executive Webmaster<sup>1</sup> Member/Director<sup>2</sup></h2>
                <h3 className='Experience-date'><sup>1</sup> August 2019 - May 2020 <sup>2</sup>January 2017 - May 2019</h3>
                <ul>
                    <li className='Experience-description'>
                    Volunteered 350+ hours at several local charities and community events
                    </li>
                    <li className='Experience-description'>
                    Maintained website backend and frontend and 300+ user accounts via WordPress, Cloudflare, and DigitalOcean
                    </li>
                    <li className='Experience-description'>
                    Secured organization against DDoS attack in November 2020, implemented DDoS mitigation via firewall
                    </li>
                </ul>
           </div>
           <hr></hr>      
           <div className='Experience-slot'>
                <h2 className='Experience-name'>North Florida Community Resource Guide Initiative - Gainesville, FL  | Editor-in-Chief<sup>1</sup> Research Assistant<sup>2</sup></h2>
                <h3 className='Experience-date'><sup>1</sup> August 2018 - May 2020 <sup>2</sup>August 2017 - May 2018</h3>
                <ul>
                    <li className='Experience-description'>
                    Lead a team of 20 students to create a vast digital community health and social services resource guide utilized
                    by dozens safety net clinics across Alachua County to connect underserved patients with willing providers
                    </li>
                </ul>
           </div>
           <hr></hr>      
           <div className='Experience-slot'>
                <h2 className='Experience-name'>UF Health Shands Hospital - Gainesville, FL   | Student Volunteer</h2>
                <h3 className='Experience-date'>January 2017 - January 2020</h3>
                <ul>
                    <li className='Experience-description'>
                    Created safe and fun opportunities for pediatric oncology patients and their families to smile and laugh
                    </li>
                    <li className='Experience-description'>
                    Made rounds on patients, set up entertainment consoles, board games, arts & crafts, and more
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default Experience;