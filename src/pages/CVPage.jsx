import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CVPage.css';

function CVPage() {
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
                {/* Header */}
                <header className="cv-header">
                    <h1 className="cv-name">Aizaz Ahmad Buttah</h1>
                    <div className="cv-contact-info">
                        <span>Lahore, Pakistan</span>
                        <span>03207211478</span>
                        <span><a href="mailto:aizazahmadbuttah@gmail.com">aizazahmadbuttah@gmail.com</a></span>
                        <span><a href="https://www.linkedin.com/in/aizaz-ahmad-buttah-a1392020b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aizaz-ahmad-buttah-a1392020b</a></span>
                    </div>
                </header>

                {/* Professional Profile */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Professional Profile</h3>
                    <p className="cv-text">
                        Computer Science graduate with a strong foundation in software development and a growing expertise in React.js and modern web technologies. I bring hands-on experience in building full-stack applications and creating responsive, user-friendly interfaces. Transitioning from academic projects in machine learning to web development, I am eager to apply my analytical problem-solving skills to write clean, maintainable code and build scalable web solutions in a collaborative team environment.
                    </p>
                </section>

                {/* Education */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">Bachelor of Science in Computer Science</h4>
                            <span className="cv-item-date">2021 – 2025</span>
                        </div>
                        <p className="cv-item-subtitle">Government College University (GCU), Lahore, Pakistan</p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Technical Skills</h3>
                    <div className="cv-skills-grid">
                        <div className="cv-skill-group">
                            <strong>Web Technologies:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Context API
                        </div>
                        <div className="cv-skill-group">
                            <strong>Backend &amp; Databases:</strong> .NET Core Web API, SQL Server, MySQL, Firebase
                        </div>
                        <div className="cv-skill-group">
                            <strong>Programming Languages:</strong> Python, C++, Java
                        </div>
                        <div className="cv-skill-group">
                            <strong>Tools &amp; Version Control:</strong> Git, GitHub, Visual Studio Code, Postman
                        </div>
                        <div className="cv-skill-group">
                            <strong>AI &amp; Machine Learning:</strong> TensorFlow, Keras, OpenCV, NumPy, Pandas <em>(Used in academic projects)</em>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Projects</h3>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">Patient Records Management System</h4>
                            <span className="cv-item-tech">React.js, .NET Core, SQL Server</span>
                        </div>
                        <ul className="cv-highlights">
                            <li>Developed a full-stack web application to manage patient data securely, adhering to standard healthcare security practices.</li>
                            <li>Built a responsive, form-based user interface in React for seamless patient intake, data editing, and record retrieval.</li>
                            <li>Created a RESTful backend using .NET Core with secure user authentication, hosted locally via Visual Studio and IIS for testing.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">Health Consultant Application</h4>
                            <span className="cv-item-tech">React.js, CSS, REST APIs</span>
                        </div>
                        <ul className="cv-highlights">
                            <li>Built the frontend of a responsive health consultation web app, prioritizing an intuitive user experience and high cross-browser performance.</li>
                            <li>Implemented modular, reusable components for the Home, Contact Us, Team, and dynamic health service pages.</li>
                            <li>Handled API integrations to display dynamic health service data and process user inquiries effectively.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">Interactive Task Management Board</h4>
                            <span className="cv-item-tech">React.js, Firebase, Context API</span>
                        </div>
                        <ul className="cv-highlights">
                            <li>Developed a drag-and-drop Kanban board allowing users to create, organize, and track daily tasks and project milestones.</li>
                            <li>Utilized React Context API for seamless state management across multiple nested components without prop drilling.</li>
                            <li>Integrated Firebase for real-time database synchronization and secure user authentication.</li>
                        </ul>
                    </div>

                    <div className="cv-item">
                        <div className="cv-item-header">
                            <h4 className="cv-item-title">Pneumonia &amp; Tuberculosis Detection System</h4>
                            <span className="cv-item-tech">Python, TensorFlow, React.js</span>
                        </div>
                        <ul className="cv-highlights">
                            <li>Developed an AI system (Final Year Project) to classify and segment chest X-rays into pneumonia, TB, and normal categories.</li>
                            <li>Trained custom CNN models and utilized transfer learning, building image segmentation masks using U-Net.</li>
                            <li>Designed a responsive frontend UI for seamless file uploading and immediate diagnosis display.</li>
                        </ul>
                    </div>
                </section>

                {/* Soft Skills & Languages */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Soft Skills &amp; Languages</h3>
                    <div className="cv-skills-grid">
                        <div className="cv-skill-group">
                            <strong>Soft Skills:</strong> Problem-Solving, Critical Thinking, Self-Motivated, Quick Learner, Adaptability, Time Management
                        </div>
                        <div className="cv-skill-group">
                            <strong>Languages:</strong> English (Professional Proficiency), Urdu (Native)
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default CVPage;
