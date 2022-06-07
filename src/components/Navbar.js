import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <div class="nav">
                <ul>
                    <li class="Navbutton"><a href="#Header">Home</a></li>
                    <li class="Navbutton"><a href="#Education">Education</a></li>
                    <li class="Navbutton"><a href="#Skills">Skills</a></li>
                    <li class="Navbutton"><a href="#Experience">Experience</a></li>
                    <li class="Navbutton"><a href="#Projects">Projects</a></li>
                    <li class="Navbutton"><a href="#Reading">Reading</a></li>
                    <li class="Navbutton"><a href="https://github.com/harrisk8">Github</a></li>
                    <li class="Navbutton"><a href="https://www.linkedin.com/in/harriskapoor/">LinkedIn</a></li>

                </ul>
            </div>
    </header>

    )
}

export default Navbar;