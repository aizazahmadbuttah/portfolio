import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import profileImg from '../assets/profile.png';
import './CVPage.css';

function CVPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="cv-page-container">
            <div className="cv-actions hide-on-print">
                <Link to="/" className="back-btn">← Back to Portfolio</Link>
                <button className="cta-button print-btn" onClick={handlePrint}>
                    Download PDF
                </button>
            </div>

            <div className="cv-document">
                <header className="cv-header">
                    <h1 className="cv-name">Aizaz Ahmad Buttah</h1>
                    <h2 className="cv-title">AI/ML Engineer & Full-Stack Developer</h2>

                    <div className="cv-contact-info">
                        <span>📧 aizazahmadbuttah@gmail.com</span>
                        <span>📱 +92 320 7211478</span>
                        <span>📍 Lahore, Pakistan</span>
                        <span>🔗 <a href="https://www.linkedin.com/in/aizaz-ahmad-buttah-a1392020b/">LinkedIn</a></span>
                        <span>🐙 <a href="https://github.com/aizazahmadbuttah">GitHub</a></span>
                        <span>🌐 <Link to="/">Portfolio Website</Link></span>
                    </div>
                </header>

                <section className="cv-section">
                    <h3 className="cv-section-title">Professional Summary</h3>
                    <p className="cv-text">
                        Detail-oriented Computer Science undergraduate from Government College University, Lahore, with strong expertise in Artificial Intelligence, Machine Learning, and Software Development. I specialize in developing deep learning models for image classification and segmentation, as well as building modern web applications using cutting-edge frameworks. With proficiency in Python, TensorFlow, and React.js, I excel at integrating AI models into real-world software solutions and adhering to clean engineering practices.
                    </p>
                </section>

                <section className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">BS, Computer Science</h4>
                            <span className="cv-item-date">2021 – 2025</span>
                        </div>
                        <p className="cv-item-subtitle">Government College University, Lahore, Pakistan</p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3 className="cv-section-title">Skills</h3>
                    <div className="cv-skills-grid">
                        <div className="cv-skill-group">
                            <strong>Languages:</strong> C++, Python, JavaScript, Dart, Java
                        </div>
                        <div className="cv-skill-group">
                            <strong>AI & ML:</strong> TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib, Scikit-learn
                        </div>
                        <div className="cv-skill-group">
                            <strong>Web Development:</strong> React.js, .NET Core, Next.js, HTML/CSS, REST APIs, Tailwind CSS
                        </div>
                        <div className="cv-skill-group">
                            <strong>Databases & Tools:</strong> SQL Server, MySQL, Firebase, Git/GitHub, Google Colab
                        </div>
                    </div>
                </section>

                <section className="cv-section">
                    <h3 className="cv-section-title">Key Projects</h3>
                    {projectsData.map((project) => (
                        <div key={project.id} className="cv-item">
                            <div className="cv-item-header">
                                <h4 className="cv-item-title">{project.title}</h4>
                                <span className="cv-item-date">{project.badge}</span>
                            </div>
                            <p className="cv-text cv-project-desc">{project.description}</p>
                            <ul className="cv-highlights">
                                {project.highlights && project.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                            <div className="cv-tech-stack">
                                <strong>Technologies:</strong> {project.tech.join(', ')}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default CVPage;
