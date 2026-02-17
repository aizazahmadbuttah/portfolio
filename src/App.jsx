import { useState, useEffect } from 'react'
import './App.css'
import profileImg from './assets/profile.jpg'
import faviconImg from './assets/favicon.png'

function App() {
    const [theme, setTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [typingText, setTypingText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Typing effect
    useEffect(() => {
        const roles = ["AI/ML Engineer", "Full-Stack Developer", "Computer Science Student"];
        const i = loopNum % roles.length;
        const fullText = roles[i];

        const timer = setTimeout(() => {
            setTypingText(isDeleting
                ? fullText.substring(0, typingText.length - 1)
                : fullText.substring(0, typingText.length + 1)
            );

            if (!isDeleting && typingText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typingText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            } else {
                setTypingSpeed(isDeleting ? 30 : 150);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typingText, isDeleting, loopNum, typingSpeed]);

    // Scroll spy + back to top
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme + Intersection Observer
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        if (!name || !email || !message) {
            setFormStatus('error');
            return;
        }

        setIsSubmitting(true);
        setFormStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '22fc384e-9446-40a8-8259-eab23d50029d',
                    name,
                    email,
                    subject: subject || 'New Portfolio Contact',
                    message,
                    from_name: 'Portfolio Website',
                }),
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setFormStatus('api_error');
            }
        } catch {
            setFormStatus('api_error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setFormStatus(''), 5000);
        }
    };

    return (
        <div className="app">
            <header className="header">
                <nav className="nav">
                    <h1 className="logo"><img src={faviconImg} alt="Logo" className="logo-icon" />Aizaz Ahmad Buttah</h1>
                    <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); setMobileMenuOpen(false); }}>About</a></li>
                        <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('education'); setMobileMenuOpen(false); }}>Education</a></li>
                        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); setMobileMenuOpen(false); }}>Skills</a></li>
                        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setMobileMenuOpen(false); }}>Projects</a></li>
                        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setMobileMenuOpen(false); }}>Contact</a></li>
                    </ul>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <div className="profile-img-container">
                            <img src={profileImg} alt="Aizaz Ahmad Buttah" className="profile-img" />
                        </div>
                        <h2 className="hero-title">Hi, I'm Aizaz Ahmad Buttah</h2>
                        <p className="hero-subtitle">
                            I am a <span className="typing-text">{typingText}</span><span className="cursor">|</span>
                        </p>
                        <p className="hero-description">
                            Passionate Computer Science student specializing in Artificial Intelligence, Machine Learning, and Modern Web Development
                        </p>
                        <button className="cta-button" onClick={() => scrollToSection('projects')}>View My Work</button>
                    </div>
                </section>

                <section id="about" className="section hidden">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-content">
                        I'm a detail-oriented Computer Science undergraduate from Government College University, Lahore, with strong expertise in
                        Artificial Intelligence, Machine Learning, and Software Development. I specialize in developing deep learning models for
                        image classification and segmentation, as well as building modern web applications using cutting-edge frameworks.
                        With proficiency in Python, TensorFlow, and React.js, I excel at integrating AI models into real-world software solutions.
                        I'm eager to contribute to professional environments that value innovation, collaboration, and clean engineering practices.
                    </p>
                </section>

                <section id="education" className="section hidden">
                    <h2 className="section-title">Education</h2>
                    <div className="education-card">
                        <h3>BS, Computer Science</h3>
                        <p className="institution">Government College University, Lahore, Pakistan</p>
                        <p className="duration">2021 – 2025</p>
                    </div>
                </section>

                <section id="skills" className="section hidden">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Dart</span>
                                <span className="skill-tag">Java</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>AI & Machine Learning</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">TensorFlow</span>
                                <span className="skill-tag">Keras</span>
                                <span className="skill-tag">OpenCV</span>
                                <span className="skill-tag">NumPy</span>
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">Matplotlib</span>
                                <span className="skill-tag">Scikit-learn</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Web Development</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">React.js</span>
                                <span className="skill-tag">.NET Core</span>
                                <span className="skill-tag">Next.js</span>
                                <span className="skill-tag">HTML/CSS</span>
                                <span className="skill-tag">REST APIs</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Databases & Tools</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">SQL Server</span>
                                <span className="skill-tag">MySQL</span>
                                <span className="skill-tag">Firebase</span>
                                <span className="skill-tag">Git/GitHub</span>
                                <span className="skill-tag">Google Colab</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section hidden">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-header">
                                <h3>Pneumonia & Tuberculosis Detection</h3>
                                <span className="project-badge">Final Year Project</span>
                            </div>
                            <p className="project-description">
                                Developed a deep learning-based system to classify and segment chest X-rays into pneumonia, TB, and normal categories.
                            </p>
                            <ul className="project-highlights">
                                <li>Implemented CNN and transfer learning with TensorFlow/Keras</li>
                                <li>Built UNet segmentation model to highlight regions of interest</li>
                                <li>Applied preprocessing: resizing (256×256), normalization, and augmentation</li>
                                <li>Integrated web interface for uploading and visualizing results</li>
                                <li>Trained models using Google Colab GPU</li>
                            </ul>
                            <div className="project-tech">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">TensorFlow</span>
                                <span className="tech-tag">Keras</span>
                                <span className="tech-tag">OpenCV</span>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <h3>Patient Records Management System</h3>
                                <span className="project-badge in-progress">In Progress</span>
                            </div>
                            <p className="project-description">
                                Full-stack web application for managing patient data securely with modern healthcare standards.
                            </p>
                            <ul className="project-highlights">
                                <li>RESTful backend with authentication using .NET Core Web API</li>
                                <li>Responsive React.js UI for patient intake and editing</li>
                                <li>SQL Server database with secure data handling</li>
                                <li>Follows healthcare security and scalability standards</li>
                            </ul>
                            <div className="project-tech">
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">.NET Core</span>
                                <span className="tech-tag">SQL Server</span>
                                <span className="tech-tag">REST API</span>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <h3>Inventory Management System</h3>
                                <span className="project-badge">Client Project</span>
                            </div>
                            <p className="project-description">
                                Full-featured inventory management system for a sanitary shop with dynamic billing capabilities.
                            </p>
                            <ul className="project-highlights">
                                <li>Built with MEAN stack integrated with MySQL database</li>
                                <li>Real-time invoice generation and PDF export using jsPDF</li>
                                <li>Admin panels for stock, customers, and sales management</li>
                                <li>Secure RESTful API architecture</li>
                            </ul>
                            <div className="project-tech">
                                <span className="tech-tag">Angular</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">MySQL</span>
                                <span className="tech-tag">Express</span>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <h3>AI Model Optimization & Research</h3>
                                <span className="project-badge">Research</span>
                            </div>
                            <p className="project-description">
                                Experimented with various architectures to improve segmentation performance and model generalization.
                            </p>
                            <ul className="project-highlights">
                                <li>Tested SegNet, UNet, and Custom CNNs</li>
                                <li>Fine-tuned pretrained models and optimized hyperparameters</li>
                                <li>Analyzed results to reduce overfitting</li>
                            </ul>
                            <div className="project-tech">
                                <span className="tech-tag">Deep Learning</span>
                                <span className="tech-tag">Model Optimization</span>
                                <span className="tech-tag">Research</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section hidden">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
                    <div className="contact-wrapper">
                        <div className="contact-form-container">
                            <h3 className="contact-form-title">Send Me a Message</h3>
                            <form className="contact-form" onSubmit={handleFormSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email *</label>
                                        <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Project Collaboration" value={formData.subject} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or idea..." value={formData.message} onChange={handleInputChange} required></textarea>
                                </div>
                                <button type="submit" className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <span className="btn-icon">→</span>
                                        </>
                                    )}
                                </button>
                                {formStatus === 'success' && <p className="form-feedback success">✅ Message sent successfully! I'll get back to you soon.</p>}
                                {formStatus === 'error' && <p className="form-feedback error">❌ Please fill in all required fields.</p>}
                                {formStatus === 'api_error' && <p className="form-feedback error">❌ Something went wrong. Please try again or email me directly.</p>}
                            </form>
                        </div>
                        <div className="contact-info-panel">
                            <h3 className="contact-info-title">Contact Information</h3>
                            <p className="contact-info-desc">Feel free to reach out through any of these channels. I typically respond within 24 hours.</p>
                            <div className="contact-details">
                                <a href="mailto:aizazahmadbuttah@gmail.com" className="contact-detail-item">
                                    <div className="contact-detail-icon">📧</div>
                                    <div className="contact-detail-text">
                                        <span className="contact-detail-label">Email</span>
                                        <span className="contact-detail-value">aizazahmadbuttah@gmail.com</span>
                                    </div>
                                </a>
                                <a href="tel:+923207211478" className="contact-detail-item">
                                    <div className="contact-detail-icon">📱</div>
                                    <div className="contact-detail-text">
                                        <span className="contact-detail-label">Phone</span>
                                        <span className="contact-detail-value">+92 320 7211478</span>
                                    </div>
                                </a>
                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">📍</div>
                                    <div className="contact-detail-text">
                                        <span className="contact-detail-label">Location</span>
                                        <span className="contact-detail-value">Lahore, Pakistan</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-social">
                                <h4>Connect with me</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/aizaz-ahmad-buttah-a1392020b/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2025 Aizaz Ahmad Buttah. All rights reserved.</p>
            </footer>

            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                    ↑
                </button>
            )}
        </div>
    )
}

export default App
