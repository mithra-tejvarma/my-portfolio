import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const screenWidth = window.outerWidth;
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
            let stickyThreshold;

            if (screenWidth > 768) {
                stickyThreshold = 63;
            }
            else if (screenWidth > 425) {
                stickyThreshold = 53;
            }
            else{
                 stickyThreshold = 53;
            }
            if (scrollTop >= stickyThreshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
        setActiveSection(sectionId);
    };

    const handleOutsideClick = (e) => {
        if (isMobileMenuOpen && !e.target.closest('.navbar')) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMobileMenuOpen]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar-container">
                <div className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a
                                href="#home"
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('home');
                                }}
                            >
                                <span className="nav-icon">🏠</span>
                                <span className="nav-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('about');
                                }}
                            >
                                <span className="nav-icon">👨‍💻</span>
                                <span className="nav-text">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#skills"
                                className={activeSection === 'skills' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('skills');
                                }}
                            >
                                <span className="nav-icon">⚡</span>
                                <span className="nav-text">Skills</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#projects"
                                className={activeSection === 'projects' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('projects');
                                }}
                            >
                                <span className="nav-icon">💼</span>
                                <span className="nav-text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                <span className="nav-icon">📧</span>
                                <span className="nav-text">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
