import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Award, Coffee, Code } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const aboutSection = aboutRef.current;
        const statsSection = statsRef.current;

        // About content animation
        gsap.fromTo('.about-content',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: aboutSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // About image animation
        gsap.fromTo('.about-image',
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: aboutSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Stats animation
        gsap.fromTo('.stat-item',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsSection,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Counter animation
        gsap.to('.counter', {
            innerText: (index, target) => target.getAttribute('data-count'),
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: statsSection,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

    }, []);

    const stats = [
        {
            icon: <Code className="w-8 h-8" />,
            count: "50",
            suffix: "+",
            label: "Projects Completed"
        },
        {
            icon: <User className="w-8 h-8" />,
            count: "30",
            suffix: "+",
            label: "Happy Clients"
        },
        {
            icon: <Award className="w-8 h-8" />,
            count: "5",
            suffix: "+",
            label: "Years Experience"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            count: "1000",
            suffix: "+",
            label: "Cups of Coffee"
        }
    ];

    return (
        <section id="about" className="relative py-20 bg-gray-800">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={aboutRef}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="about-content">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-emerald-400">Me</span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            {portfolioData.personal.bio}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-gray-300">
                                    <strong className="text-white">Location:</strong> {portfolioData.personal.location}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-gray-300">
                                    <strong className="text-white">Email:</strong> {portfolioData.personal.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-gray-300">
                                    <strong className="text-white">Phone:</strong> {portfolioData.personal.phone}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="about-image">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-2xl blur-lg"></div>

                            <div className="relative bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600">
                                <img
                                    src="https://images.unsplash.com/photo-1658053283477-b985256569bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85"
                                    alt="Avinash Singh's Developer Workspace"
                                    className="w-full h-96 object-cover rounded-lg"
                                />

                                {/* Floating tech stack */}
                                <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-emerald-400/30">
                                    <div className="text-emerald-400 text-sm font-mono">
                                        <div>Tech Stack:</div>
                                        <div className="text-gray-300 text-xs mt-1">
                                            React • Node.js • MongoDB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20" ref={statsRef}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item text-center">
                                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="text-emerald-400 mb-4 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        <span className="counter" data-count={stat.count}>0</span>
                                        <span>{stat.suffix}</span>
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;