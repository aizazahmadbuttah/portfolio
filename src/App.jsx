import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import './App.css';
import faviconImg from './assets/favicon.png';

// Pages
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CVPage from './pages/CVPage';

function App() {
    const [theme, setTheme] = useState('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const isCVPage = location.pathname === '/cv';

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
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <div className="app">
            <header className={`header ${isCVPage ? 'hide-on-print' : ''}`}>
                <nav className="nav">
                    <Link to="/" className="logo-link" style={{ textDecoration: 'none' }}>
                        <h1 className="logo">
                            <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            AIZAZ.
                        </h1>
                    </Link>

                    <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Desktop nav links — hidden on mobile via CSS */}
                    <ul className="desktop-nav-links">
                        {isHomePage ? (
                            <>
                                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>ABOUT</a></li>
                                <li><a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>EDUCATION</a></li>
                                <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>SKILLS</a></li>
                                <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>PROJECTS</a></li>
                                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>CONTACT</a></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/cv">RESUME</Link></li>
                            </>
                        )}
                    </ul>

                    <div className="nav-actions">
                        <button
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? (
                                /* Sun icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                                </svg>
                            ) : (
                                /* Moon icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                                </svg>
                            )}
                        </button>
                        <button className="hire-me-nav-btn" onClick={() => handleNavClick('contact')}>
                            HIRE ME
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile nav panel — outside header so position:fixed works correctly */}
            {mobileMenuOpen && (
                <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)} />
            )}
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                {isHomePage ? (
                    <>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>ABOUT</a></li>
                        <li><a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>EDUCATION</a></li>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>SKILLS</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>PROJECTS</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>CONTACT</a></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
                        <li><Link to="/cv" onClick={() => setMobileMenuOpen(false)}>RESUME</Link></li>
                    </>
                )}
            </ul>

            <Toaster position="top-right"
                toastOptions={{
                    style: {
                        background: 'var(--card-bg)',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        backdropFilter: 'blur(10px)'
                    }
                }}
            />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="/cv" element={<CVPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </AnimatePresence>

            <footer className={`footer ${isCVPage ? 'hide-on-print' : ''}`}>
                <p>&copy; 2026 Aizaz Ahmad Buttah. All rights reserved.</p>
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
