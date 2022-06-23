import React from 'react';
import ReactDOM from 'react-dom/client';
import './Projects.css';

function Projects() {
    return (


        <div className='Projects' id='Projects'>
            <h1 className='Projects-header'>Projects</h1>


            <div className='Project-container'>
            <img className='Project-picture' src='./assets/Banter_Logo.png'></img>
                <div className='text-container'>
                    <p className='Project-title'>Banter</p>
                    <p className='Tech-stack'>Swift, JavaScript, Firebase, Xcode, Storyboard/SwiftUI, Adobe XD</p>
                    <p className='Project-description'>Banter was an innovative social media platform
                    designed for college campuses. Banter featured secure authentication, login persistence,
                    local data persistence via Core Data, a horizontally auto-scaling backend via Firebase,
                    and an intuitive user interface. Banter took about 1 year to build.</p>
                    <p className='Project-description'><strong>Lessons learned: </strong></p>
                    <ul className='lessons-list'>
                        <li className='lesson'>Data schema design can make life easier or a LOT harder later on as more features are added. Take time to make it right.</li>
                        <li className='lesson'>Don't jump into writing code too quickly without taking enough time to plan what you are going to code.</li>
                        <li className='lesson'>Writing clean code takes effort but is critical as a codebase grows and new people join the project. Don't neglect
                            this or you WILL pay the price for it later.
                        </li>
                        <li className='lesson'>Writing documentation isn't super exciting but neither
                        is the frusutration of not having good documentation when you need it.</li>
                        <li className='lesson'>It's a good idea to containerize one's build and test on
                        various machines early on, not just one or two devices.</li>
                        <li className='lesson'>If certain logic doesn't absolutely need to be on the client-side,
                        then put it in the backend or else you uncessarily decrease performance.</li>

                    </ul>
                </div>

            </div>

            <div className='Project-container'>
            <img className='Project-picture' src='./assets/maze.png'></img>
                <div className='text-container'>
                    <p className='Project-title'>Pathfinder - Dijkstra's Algorithm Visualizer</p>
                    <p className='Tech-stack'>JavaScript, React.js, HTML, CSS, AWS Amplify</p>
                    <p className='Project-description'>This project presents the user with a grid and prompts them to select a start node, end node, and set walls. The project
                    will then illustrate the underlying algorithm as it determines and presents the shortest path between two nodes.</p>
                    <a id='pathfinder-link' href='https://master.d18thz8cnxal2z.amplifyapp.com/'>Click here to use Pathfinder</a>
                    <p className='Project-description'><strong>Lessons learned: </strong></p>
                    <ul className='lessons-list'>
                        <li className='lesson'>Initially, the grid was represented by a matrix of '0' or '1' to represent the type of node in that position. Inspired by Clement Mihailescu,
                        I realized it made sense to store objects in the matrix which then conferred advantage to managing state.</li>        
                        <li className='lesson'>Destructuring in JavaScript is surprisingly useful. Helps make code much cleaner. </li>   
                        <li className='lesson'>Be careful about referencing the same object when your intention is to work with a value instead. This
                        confusion led to a few frustrating bugs.</li>    
 
                    </ul>
                    <video autoPlay loop muted id='Pathfinder-video'>
                        <source src='./assets/Pathfinder_video.mp4' type='video/mp4'></source>
                </video>
                </div>
                

            </div>
            

            <div className='Project-container'>
            <img className='Project-picture' src='./assets/Headshot-circle.png'></img>
                <div className='text-container'>
                    <p className='Project-title'>Portfolio Website</p>
                    <p className='Tech-stack'>JavaScript, React.js, HTML, CSS, AWS Amplify</p>
                    <p className='Project-description'>The very website you are on right now. A simple page which offers a deeper look into who I am, 
                    what I do, and what I'm interested in.</p>
                    <p className='Project-description'><strong>Lessons learned: </strong></p>
                    <ul className='lessons-list'>
                        <li className='lesson'>Modular code is important. Especially when designing a frontend with
                        reusable components.</li>        
                        <li className='lesson'>Try not to deviate too much from basic principles of design. The same data can be perceived
                        very differently based on how it is presented.</li>    
                    </ul>
                </div>

            </div>
            
            <div className='Project-in-progress-container'>
                
                <div className='text-container'>
                    <p className='Project-title'>Projects in Progress:</p>
                    <ul className='lessons-list'>
                        <li className='lesson'><strong>Stock/Crypto altfolio</strong> - Built with JavaScript, HTML, CSS, React.js,
                        this project will demonstrate utilization of APIs to fetch market data and manipulate it
                        into visually-appealing graphs. Project will feature authentication and data persistence.
                        </li>    
 
                      
                    </ul>
                </div>

            </div>

            


        </div>
    )
}

export default Projects;