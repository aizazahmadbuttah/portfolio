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
