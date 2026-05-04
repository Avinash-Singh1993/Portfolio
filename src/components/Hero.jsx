import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, ChevronDown } from 'lucide-react';
import portfolioData from '../mockData';

const Hero = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        let resizeHandler;

        // gsap.context scopes selectors to avoid affecting other components/pages.
        const ctx = gsap.context(() => {
            const container = particlesRef.current;
            if (!container) return;

            const particles = container.querySelectorAll('.particle');

            // Set will-change and pointer-events for performance & no interaction
            particles.forEach(p => {
                p.style.willChange = 'transform, opacity';
                p.style.pointerEvents = 'none';
            });

            // initialize positions inside container bounds
            function initParticles() {
                const rect = container.getBoundingClientRect();
                particles.forEach((p) => {
                    const x = Math.random() * rect.width;
                    const y = Math.random() * rect.height;
                    gsap.set(p, {
                        x,
                        y,
                        opacity: Math.random() * 0.5 + 0.1,
                    });
                });
            }

            // create (or recreate) particle float animation
            function startParticleAnimation() {
                gsap.killTweensOf(particles);

                gsap.to(particles, {
                    y: '+=-40',
                    duration: () => Math.random() * 3 + 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    stagger: {
                        amount: 2,
                        from: 'random',
                    },
                });
            }

            initParticles();
            startParticleAnimation();

            // Recalculate on resize so no particle sits outside container
            resizeHandler = () => {
                initParticles();
                startParticleAnimation();
            };
            window.addEventListener('resize', resizeHandler);

            // --- Hero entrance & other animations (scoped to this component) ---
            const tl = gsap.timeline();
            tl.fromTo('.hero-title',
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            )
                .fromTo('.hero-subtitle',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                    '-=0.8'
                )
                .fromTo('.hero-description',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.hero-buttons',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.4'
                )
                .fromTo('.hero-image',
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
                    '-=1'
                );

            // Floating hero image
            gsap.to('.hero-image', {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // Scroll indicator
            gsap.fromTo('.scroll-indicator',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2 }
            );

            gsap.to('.scroll-indicator', {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

        }, particlesRef); // scope to node

        // cleanup on unmount
        return () => {
            ctx.revert();
            if (resizeHandler) window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Animated background particles - note extra class 'particles-container' */}
            <div className="absolute inset-0 particles-container" ref={particlesRef}>
                {[...Array(200)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-2 h-2 bg-emerald-400/20 rounded-full"
                    />
                ))}
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="text-left">
                            <div className="hero-title">
                                <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-4">
                                    <span className="block">I'm</span>
                                    <span className="text-emerald-400 block">
                                        {portfolioData.personal.name.split(' ')[0]}
                                    </span>
                                </h1>
                            </div>

                            <div className="hero-subtitle">
                                <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                                    {portfolioData.personal.title}
                                </h2>
                            </div>

                            <div className="hero-description">
                                <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                    {portfolioData.personal.tagline}
                                </p>
                            </div>

                            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                                >
                                    View My Services
                                </button>
                                <a
                                    href={portfolioData.personal.resume}
                                    download
                                    className="bg-transparent border-2 border-gray-600 hover:border-emerald-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <Download size={20} />
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="hero-image relative">
                            <div className="relative">
                                {/* Glowing border effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl opacity-20 blur-lg" />

                                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85"
                                        alt="Web Developer Workspace"
                                        className="w-full h-80 object-cover rounded-lg"
                                    />

                                    {/* Code snippet overlay */}
                                    <div className="absolute top-12 right-12 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30">
                                        <div className="text-emerald-400 text-sm font-mono">
                                            <div className="text-gray-500">// Welcome to my portfolio</div>
                                            <div>const developer = &#123;</div>
                                            <div className="ml-4">name: "{portfolioData.personal.name}",</div>
                                            <div className="ml-4">skills: ["React", "Node.js"],</div>
                                            <div className="ml-4">passion: "Creating amazing apps"</div>
                                            <div>&#125;;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={scrollToAbout}
                    className="flex flex-col items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ChevronDown className="animate-bounce" size={24} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
