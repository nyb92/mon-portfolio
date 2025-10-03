import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.css';
import Stack from './components/Stack';

function App() {
    return (
        <div className="app">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Stack />
            <Contact />
        </div>
    );
}


export default App;
