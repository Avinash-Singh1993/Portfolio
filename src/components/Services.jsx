import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Server, Globe, Palette, ArrowRight, Check } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef(null);

    useEffect(() => {
        const servicesSection = servicesRef.current;

        // Animate section title
        gsap.fromTo('.services-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: servicesSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate service cards
        gsap.fromTo('.service-card',
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: servicesSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate service features
        gsap.fromTo('.service-feature',
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: servicesSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

    }, []);

    const getIcon = (iconName) => {
        const icons = {
            Code: <Code className="w-8 h-8" />,
            Server: <Server className="w-8 h-8" />,
            Globe: <Globe className="w-8 h-8" />,
            Palette: <Palette className="w-8 h-8" />
        };
        return icons[iconName] || <Code className="w-8 h-8" />;
    };

    return (
        <section id="services" className="relative py-20 bg-gray-900" ref={servicesRef}>
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="services-title text-4xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-emerald-400">Services</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        I offer comprehensive web development services to help bring your ideas to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioData.services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
                        >
                            {/* Service header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-500/20 p-4 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/30 transition-all duration-300">
                                    <div className="text-emerald-400">
                                        {getIcon(service.icon)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <div className="text-emerald-400 font-semibold mt-1">
                                        {service.price}
                                    </div>
                                </div>
                            </div>

                            {/* Service description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Service features */}
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="service-feature flex items-center gap-3"
                                    >
                                        <div className="bg-emerald-500/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-400/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Looking for Something Custom?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Every project is unique, and I love taking on new challenges.
                            Let's discuss your specific requirements and create something amazing together.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Let's Talk About Your Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
