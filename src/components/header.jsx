import React, { useState, useEffect, useRef } from 'react';

let logo = "/assets/images/logofinalfinalfinal.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className='headermain'>
            <header>
                <a href="/">
                    <div className="logo">
                        <img src={logo} width="180" alt="logo" />
                    </div>
                </a>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    <a href="/" >Home</a>
                    <a href="/about" >About</a>
                    <a href="/advertising" >Advertising</a>
                    <a href="/gallery" >Gallery</a>
                    <a href="/contact" >Contact Us</a>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Off-Canvas Mobile Menu */}
                <nav
                    ref={mobileMenuRef}
                    className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
                >
                    <a href="/" onClick={toggleMenu}>Home</a>
                    <a href="/about" onClick={toggleMenu}>About Us</a>
                    <a href="/advertising" onClick={toggleMenu}>Advertising</a>
                    <a href="/gallery" onClick={toggleMenu}>Gallery</a>
                    <a href="/contact" onClick={toggleMenu}>Contact Us</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;
