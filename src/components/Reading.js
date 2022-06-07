import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reading.css';

function Reading() {
    return (
        <div className='Reading' id='Reading'>
            <h1 className='Reading-header'>Reading</h1>
            <h2 className='Reading-header2'>I love to read. Below are a few of my favorite book recommendations!</h2>

            <div className='book-container'>
                <img className='book-picture' src='./assets/Outliers.png'></img>
                <div className='text-container'>
                    <p className='book-title'>Outliers - The Story of Success</p>
                    <p className='book-author'>By: Malcolm Gladwell</p>
                    <p className='book-description'>Gladwell builds within the reader a profound sense of clarity regarding the concept of success. 
                    He brilliantly distinguishes his understanding of success from conventional, apparently short-sighted definitions. 
                    Through brilliant stories and examples, Gladwell builds the case that success cannot simply be reduced to a “function of effort.” 
                    Though immense effort is necessary, Gladwell argues success is far more complex, that it results from the culmination of effort, 
                    luck, circumstance, and persistence in ways that aren't always obvious.</p>
                </div>
            </div>

            <div className='book-container'>
                <img className='book-picture' src='./assets/bfranklin.jpg'></img>
                <div className='text-container'>
                    <p className='book-title'>Benjamin Franklin - An American Life</p>
                    <p className='book-author'>By: Walter Isaacson</p>
                    <p className='book-description'>Isaacson brings to life one of America's move beloved figures in 
                    informative and inspirational fashion. Isaacson is well-researched in his endeavor, to say the least, 
                    as he dives in great detail into Franklin’s life at each stage. Isaacson brings Franklin to life by 
                    colorfully illustrating the experiences that made him the diplomat, scientist, politician, and most 
                    importantly, humble printer, Franklin would be remember for. Most significantly, Isaacson conveys 
                    the strong values Franklin led his life by: Franklin epitomizes industriousness, productivity, 
                    practical wisdom, curiosity, and more. Franklin created a mold in which one can follow to be the 
                    “ideal citizen.”</p>
                </div>
            </div>

            <div className='book-container'>
                <img className='book-picture' src='./assets/liftoff.jpg'></img>
                <div className='text-container'>
                    <p className='book-title'>Liftoff - Elon Musk and the Desperate Early Days that Launched SpaceX</p>
                    <p className='book-author'>By: Eric Berger</p>
                    <p className='book-description'>A must read for any internet-space-geek like myself, 
                    Liftoff vividly tells the story of how 
                 SpaceX came to be, overcoming insurmountable obstacles to become a leader in the aerospace industry 
                 and the usher of humanity's final frontier. Berger follows Musk and the key founding employees of 
                 SpaceX as they challenged the stagnant though powerful aerospace industry at the start of the 
                 century. Through long nights, endless iterations, low company bureaucracy, lots of lawsuits, 
                 and a truly unbelievable amount of faith, SpaceX turned their fourth and final attempt at 
                 reaching orbit into a marvelous success. Berger just can't help but make the reader want to go 
                 be relentless somewhere and shake up an industry.</p>
                </div>
            </div>

            <div className='book-container'>
                <img className='book-picture' src='./assets/predictablyirrational.jpg'></img>
                <div className='text-container'>
                    <p className='book-title'>Predictably Irrational - The Hidden Forces That Shape Our Decisions</p>
                    <p className='book-author'>By: Dan Ariely</p>
                    <p className='book-description'>Dan Ariely makes mind-opening and entertaining cases as to why our minds aren't 
                    as rational as we would like them to be. Turns out we humans often overestimate our analytical capacities in 
                    certain contexts and fall victim to all sorts of tactics businesses often employ to make more money. This book 
                    offers a gentle introduction into the realm of behavioral economics. Great read if you are a curious soul like 
                    myself or a business owner looking to exploit the pitfalls of human “thinking” to increase profits!</p>
                </div>
            </div>


        </div>
    )
}

export default Reading;