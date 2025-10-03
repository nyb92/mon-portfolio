import React from 'react';
import '../styles/components/stack.css';

const stackCategories = [
    {
        title: '💻 Développement',
        color: '#00e0ff',
        items: [
            { label: 'Java', icon: 'devicon-java-plain' },
            { label: 'C++', icon: 'devicon-cplusplus-plain' },
            { label: 'Python', icon: 'devicon-python-plain' },
            { label: 'HTML5', icon: 'devicon-html5-plain' },
            { label: 'CSS3', icon: 'devicon-css3-plain' },
            { label: 'JavaScript', icon: 'devicon-javascript-plain' },
            { label: 'PHP', icon: 'devicon-php-plain' },
            { label: 'SQL', icon: 'devicon-mysql-plain' },
            { label: 'REST API', icon: 'fas fa-link' }
        ]
    },
    {
        title: '🛠️ Outils & Technologies',
        color: '#4a00e0',
        items: [
            { label: 'Git', icon: 'devicon-git-plain' },
            { label: 'MySQL', icon: 'devicon-mysql-plain' },
            { label: 'phpMyAdmin', icon: 'fas fa-database' },
            { label: 'VS Code', icon: 'devicon-vscode-plain' },
            { label: 'IntelliJ IDEA', icon: 'devicon-intellij-plain' },
            { label: 'Eclipse', icon: 'devicon-eclipse-plain' },
            { label: 'Postman', icon: 'devicon-postman-plain' },
            { label: 'GraphQL', icon: 'devicon-graphql-plain' },
            { label: 'Docker', icon: 'devicon-docker-plain' }
        ]
    },
    {
        title: '🎮 Développement de Jeux',
        color: '#ff007a',
        items: [
            { label: 'Unity (C#)', icon: 'devicon-unity-original' },
            { label: 'Unreal Engine', icon: 'devicon-unrealengine-original' },
            { label: 'Visual Paradigm', icon: 'fas fa-project-diagram' }
        ]
    },
    {
        title: '🌍 Langues',
        color: '#00b86b',
        items: [
            { label: 'Français : Langue maternelle', icon: 'fas fa-language' },
            { label: 'Anglais : Intermédiaire (B2)', icon: 'fas fa-language' },
            { label: 'Espagnol : Scolaire', icon: 'fas fa-language' },
            { label: 'Arabe : Courant', icon: 'fas fa-language' }
        ]
    }
];

function Stack() {
    return (
        <section className="stack-section" id="stack">
            <h2>Mes Compétences</h2>
            <div className="stack-cards">
                {stackCategories.map((cat, i) => (
                    <div className="stack-card" key={i}>
                        <h3 style={{ color: cat.color }}>{cat.title}</h3>
                        <ul>
                            {cat.items.map((item, j) => (
                                <li key={j}>
                                    <i className={`${item.icon} stack-icon`} /> {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stack;
