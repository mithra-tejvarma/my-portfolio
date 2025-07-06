import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <h2>Portfolio</h2>
                </div>
                
                <div className="header-actions">
                    <button className="resume-btn">Download Resume</button>
                </div>
            </div>
        </header>
    );
};

export default Header;