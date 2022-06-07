import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/About-me';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reading from './components/Reading';

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <AboutMe />
    <Education />
    <Skills />
    <Experience />
    <Projects />
    <Reading />
    </>
  );
}

export default App;
