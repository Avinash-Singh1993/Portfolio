import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Award, TrendingUp } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const experienceSection = experienceRef.current;

        // Animate section title
        gsap.fromTo('.experience-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: experienceSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate timeline line
        gsap.fromTo('.timeline-line',
            { height: '0%' },
            {
                height: '100%',
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: experienceSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate experience items
        gsap.fromTo('.experience-item',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: experienceSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate timeline dots
        gsap.fromTo('.timeline-dot',
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: experienceSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate achievements
        gsap.fromTo('.achievement-item',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: experienceSection,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

    }, []);

    return (
        <section id="experience" className="relative py-20 bg-gray-900" ref={experienceRef}>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="experience-title text-4xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-emerald-400">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        My professional journey and the companies I've had the privilege to work with
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-700 h-full">
                        <div className="timeline-line w-full bg-gradient-to-b from-emerald-400 to-blue-500 opacity-75"></div>
                    </div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`experience-item relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="timeline-dot absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-emerald-500/25"></div>

                                {/* Experience card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                                        {/* Company and role */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">
                                                    {exp.role}
                                                </h3>
                                                <div className="text-emerald-400 font-semibold mb-2">
                                                    {exp.company}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Duration and location */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded border border-emerald-400/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                                                <Award className="w-4 h-4" />
                                                <span>Key Achievements:</span>
                                            </div>
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <div
                                                    key={achIndex}
                                                    className="achievement-item flex items-start gap-2 text-gray-300 text-sm"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for desktop layout */}
                                <div className="hidden md:block w-2/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills summary */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-400/20">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Professional Growth
                            </h3>
                            <p className="text-gray-400">
                                Throughout my career, I've continuously evolved and expanded my skill set
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                                <p className="text-gray-400 text-sm">
                                    Always staying updated with the latest technologies and best practices
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-blue-400" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Leadership</h4>
                                <p className="text-gray-400 text-sm">
                                    Leading teams and mentoring junior developers to achieve excellence
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-purple-400" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Impact</h4>
                                <p className="text-gray-400 text-sm">
                                    Creating solutions that make a real difference in users' lives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
