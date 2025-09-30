import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import portfolioData from '../mockData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Animate header on load
        gsap.fromTo('.header-animate',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            gsap.fromTo('.mobile-menu',
                { x: '100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
        } else {
            gsap.to('.mobile-menu',
                { x: '100%', opacity: 0, duration: 0.3, ease: 'power2.in' }
            );
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Services', id: 'services' },
        { name: 'HR & Manager Reviews', id: 'testimonials' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <header
            className={`header-animate fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white">
                        <span className="text-emerald-400">&lt;</span>
                        {portfolioData.personal.name.split(' ')[0]}
                        <span className="text-emerald-400">/&gt;</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Social Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href={portfolioData.personal.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={portfolioData.personal.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu fixed inset-0 top-[64px] z-40 bg-gray-900/95 backdrop-blur-md md:hidden px-6 py-10 flex flex-col items-center space-y-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-white text-xl font-medium hover:text-emerald-400 transition-colors duration-200"
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* Mobile Social Links */}
                    <div className="flex space-x-6 pt-6">
                        <a
                            href={portfolioData.personal.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={portfolioData.personal.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;