import React from 'react';
import '../styles/components/contact.css';
import CV from '../assets/CV.pdf';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <p className="subtitle">Tu veux me parler d’un projet ou d’un stage ? Écris-moi directement !</p>

            <form className="contact-form">
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message..." rows="5" required />
                <button type="submit">
                    <i className="fas fa-paper-plane" /> Envoyer
                </button>
            </form>

            <div className="contact-links">
                <a
                    href="https://github.com/nyb92"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github" /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/youssef-bouladjeraf-165224349"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin" /> LinkedIn
                </a>
                <a href={CV} download>
                    <i className="fas fa-file-download" /> Télécharger mon CV
                </a>
            </div>
        </section>
    );
}

export default Contact;
