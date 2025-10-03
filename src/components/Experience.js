import React from 'react';
import '../styles/components/experience.css';

const experiences = [
    {
        company: "Service Sportif Municipal",
        role: "Éducateur sportif",
        period: "2022",
        description: [
            "Formation et encadrement des jeunes joueurs.",
            "Transmission des valeurs du sport et renforcement de l’esprit d’équipe.",
            "Gestion des entraînements hebdomadaires et accompagnement lors des compétitions."
        ]
    },
    {
        company: "Entreprise de livraison locale",
        role: "Livreur",
        period: "En cours",
        description: [
            "Livraison tout en assurant un service client irréprochable.",
            "Gestion de la relation avec les clients pour garantir leur satisfaction."
        ]
    },
    {
        company: "Stage Développeur web full stack",
        role: "Développement d'applications web (front + back)",
        period: "2025 (prévu - 3 mois)",
        description: [
            "Développement et maintenance d'applications web (front-end et back-end).",
            "Intégration de bases de données et optimisation des performances.",
            "Collaboration avec l’équipe sur la conception et la mise en production de projets web."
        ]
    }
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <h2>Expériences Professionnelles</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <div className="exp-header">
                                <h3>{exp.company}</h3>
                                <span className="exp-date">{exp.period}</span>
                            </div>
                            <h4>{exp.role}</h4>
                            <ul>
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
