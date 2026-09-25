import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../App.css'; // Reusing global styles, we'll add specific page styles here too if needed

function ProjectPage() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="app project-page-container not-found">
                <h2>Project Not Found</h2>
                <Link to="/" className="cta-button">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="app project-page-container">
            <header className="header project-header-bar">
                <nav className="nav">
                    <Link to="/" className="back-link">
                        <span className="back-arrow">←</span> Back to Portfolio
                    </Link>
                </nav>
            </header>

            <main className="project-detail-main">
                <section className="project-detail-hero">
                    <div className="project-title-wrapper">
                        <h1 className="project-title-large">{project.title}</h1>
                        <span className={`project-badge large-badge ${project.badgeClass || ''}`}>
                            {project.badge}
                        </span>
                    </div>

                    <p className="project-description-large">{project.description}</p>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            VIEW LIVE DEMO
                        </a>
                    )}

                    <div className="project-tech-large">
                        {project.tech.map((tech, idx) => (
                            <span key={idx} className="tech-tag large-tag">{tech}</span>
                        ))}
                    </div>
                </section>

                <section className="project-detail-content">
                    <div className="project-highlights-box">
                        <h2>Key Features & Highlights</h2>
                        <ul className="project-highlights large-list">
                            {project.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    {project.images && project.images.length > 0 && (
                        <div className="project-full-gallery">
                            <h2>Project Screenshots</h2>
                            <div className="gallery-grid">
                                {project.images.map((img, idx) => (
                                    <div key={idx} className="gallery-image-wrapper">
                                        <img src={img.src} alt={img.alt} loading="lazy" />
                                        <p className="image-caption">{img.alt}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default ProjectPage;
