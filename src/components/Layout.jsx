import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Coffee, Phone, Mail, Clock, MapPin, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import './Layout.css';
import './Footer.css';

const Layout = ({ children }) => {
    // Add viewport meta tag and handle mobile menu
    useEffect(() => {
        // Set viewport meta tag
        const viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewportMeta);
        
        // Prevent horizontal scroll on mobile
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
        
        return () => {
            document.head.removeChild(viewportMeta);
            document.documentElement.style.overflowX = '';
            document.body.style.overflowX = '';
        };
    }, []);
    
    // Handle footer accordion on mobile
    const toggleFooterSection = (index) => {
        if (window.innerWidth <= 767) {
            const sections = document.querySelectorAll('.footer-section');
            sections[index].classList.toggle('collapsed');
        }
    };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    }, [location]);

    // Toggle mobile menu with body scroll lock
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.classList.toggle('menu-open', !mobileMenuOpen);
        
        // Prevent body scroll when mobile menu is open
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/menu', label: 'Menu' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <div className="site-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-container">
                    <div className="top-bar-left">
                        <span><Phone size={14} /> +1 (234) 567-8900</span>
                        <span><Mail size={14} /> hello@brewandbites.com</span>
                    </div>
                    <div className="top-bar-right">
                        <span><Clock size={14} /> Mon-Fri: 7AM - 9PM | Sat-Sun: 8AM - 10PM</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="header">
                <div className="container header-container">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <Coffee size={32} />
                        <span>Brew & Bites</span>
                    </Link>

                    {/* Navigation */}
                    <nav 
                        id="main-navigation"
                        className={`nav ${mobileMenuOpen ? 'active' : ''}`}
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu */}
                    <div className="header-right">
                        <Link to="/contact" className="btn btn-primary header-cta">
                            Book a Table
                        </Link>
                        <button
                            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                            onClick={toggleMobileMenu}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="main-navigation"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="footer-section footer-brand">
                            <a href="#" className="footer-logo">
                                <Coffee size={24} />
                                <span>Brew & Bites</span>
                            </a>
                            <p>Experience the perfect blend of coffee and cuisine in a cozy atmosphere that feels like home.</p>
                            <div className="footer-social">
                                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                            </div>
                        </div>
                        
                        <div className="footer-section">
                            <h4 onClick={() => toggleFooterSection(1)}>Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
                                <li><Link to="/menu" onClick={() => window.scrollTo(0, 0)}>Our Menu</Link></li>
                                <li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link></li>
                                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4 onClick={() => toggleFooterSection(2)}>Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <MapPin size={16} />
                                    <span>123 Coffee Street, City, Country</span>
                                </li>
                                <li>
                                    <Phone size={16} />
                                    <span>+1 (234) 567-8900</span>
                                </li>
                                <li>
                                    <Mail size={16} />
                                    <span>hello@brewandbites.com</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4 onClick={() => toggleFooterSection(3)}>Opening Hours</h4>
                            <ul className="hours-list">
                                <li><span className="hours-day">Monday - Friday</span> <span className="hours-time">7:00 AM - 9:00 PM</span></li>
                                <li><span className="hours-day">Saturday</span> <span className="hours-time">8:00 AM - 10:00 PM</span></li>
                                <li><span className="hours-day">Sunday</span> <span className="hours-time">8:00 AM - 9:00 PM</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

