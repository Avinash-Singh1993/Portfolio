import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import portfolioData from '../mockData';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative bg-gray-900 border-t border-gray-800">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10">
                {/* Main footer content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                        {/* Brand section */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <div className="text-3xl font-bold text-white mb-4">
                                    <span className="text-emerald-400">&lt;</span>
                                    {portfolioData.personal.name.split(' ')[0]}
                                    <span className="text-emerald-400">/&gt;</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed max-w-md">
                                    {portfolioData.personal.tagline}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={portfolioData.personal.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-emerald-500/20 p-3 rounded-lg border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 group"
                                    >
                                        <Github className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                                    </a>
                                    <a
                                        href={portfolioData.personal.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-emerald-500/20 p-3 rounded-lg border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 group"
                                    >
                                        <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                                    </a>
                                    <a
                                        href={`mailto:${portfolioData.personal.email}`}
                                        className="bg-gray-800 hover:bg-emerald-500/20 p-3 rounded-lg border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 group"
                                    >
                                        <Mail className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                            <div className="space-y-3">
                                {quickLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Services</h4>
                            <div className="space-y-3">
                                {portfolioData.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
                                        onClick={() => scrollToSection('services')}
                                    >
                                        {service.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-gray-400 text-sm">
                                © {currentYear} {portfolioData.personal.name}. Made with{' '}
                                <Heart className="inline w-4 h-4 text-red-500 fill-red-500 mx-1" />
                                and lots of coffee ☕
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-gray-400 text-sm">
                                    Built with <span className="text-sky-500">React</span> & <span className="text-emerald-400">GSAP</span>
                                    Built with React & GSAP
                                </div>

                                <button
                                    onClick={scrollToTop}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                                    aria-label="Scroll to top"
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
