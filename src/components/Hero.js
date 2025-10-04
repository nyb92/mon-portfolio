import React from 'react';
import '../styles/components/hero.css';
import profile from '../assets/profile2.jpg';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <img src={profile} alt="Naoufal Bouladjeraf" className="profile-img" />
                <h1>Naoufal Bouladjeraf</h1>
                <p>Étudiant passionné en développement informatique</p>
                <a href="#contact" className="btn-primary">Me contacter</a>
            </div>
        </section>
    );
}

export default Hero;
