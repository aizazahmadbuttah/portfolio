import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import faviconImg from './assets/favicon.png';

// Pages
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function App() {
    const [theme, setTheme] = useState('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Scroll back to top
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme initialization
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (sectionId) => {
        setMobileMenuOpen(false);
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app">
            <header className="header">
                <nav className="nav">
                    <Link to="/" className="logo-link" style={{ textDecoration: 'none' }}>
                        <h1 className="logo"><img src={faviconImg} alt="Logo" className="logo-icon" />Aizaz Ahmad Buttah</h1>
                    </Link>

                    <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                        {isHomePage ? (
                            <>
                                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
                                <li><a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
                                <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a></li>
                                <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
                                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Back to Portfolio</Link></li>
                            </>
                        )}
                    </ul>

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>

            <footer className="footer">
                <p>&copy; 2025 Aizaz Ahmad Buttah. All rights reserved.</p>
                <a href="https://github.com/aizazahmadbuttah" target="_blank" rel="noopener noreferrer" className="footer-github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                </a>
            </footer>

            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                    ↑
                </button>
            )}
        </div>
    )
}

export default App;
