import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';

function Header() {
    return (
        <div id='Header' className='Header-container'>
            <video autoPlay loop muted id='Header-video'>
                <source src='./assets/Header-video.mp4' type='video/mp4'></source>
            </video>
            <img className='Header-picture' src='./assets/Headshot-cropped.png'></img>
        </div>
    )
}

export default Header;