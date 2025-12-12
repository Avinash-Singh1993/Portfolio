import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const skillsSection = skillsRef.current;

        // Animate section title
        gsap.fromTo('.skills-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: skillsSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate skill categories
        gsap.fromTo('.skill-category',
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: skillsSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate skill bars
        gsap.fromTo('.skill-bar-fill',
            { width: '0%' },
            {
                width: (index, target) => target.getAttribute('data-width'),
                duration: 1.5,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: skillsSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate skill percentages
        gsap.fromTo('.skill-percentage',
            { innerText: 0 },
            {
                innerText: (index, target) => target.getAttribute('data-percentage'),
                duration: 1.5,
                ease: 'power2.out',
                snap: { innerText: 1 },
                stagger: 0.1,
                scrollTrigger: {
                    trigger: skillsSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

    }, []);

    const skillCategories = [
        { name: 'Frontend', skills: portfolioData.skills.frontend, color: 'emerald' },
        { name: 'Backend', skills: portfolioData.skills.backend, color: 'blue' },
        { name: 'Tools & Others', skills: portfolioData.skills.tools, color: 'purple' }
    ];

    const getColorClasses = (color) => {
        const colors = {
            emerald: {
                bg: 'bg-emerald-500',
                border: 'border-emerald-400',
                text: 'text-emerald-400',
                glow: 'shadow-emerald-500/25'
            },
            blue: {
                bg: 'bg-blue-500',
                border: 'border-blue-400',
                text: 'text-blue-400',
                glow: 'shadow-blue-500/25'
            },
            purple: {
                bg: 'bg-purple-500',
                border: 'border-purple-400',
                text: 'text-purple-400',
                glow: 'shadow-purple-500/25'
            }
        };
        return colors[color];
    };

    return (
        <section id="skills" className="relative py-20 bg-gray-900" ref={skillsRef}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="skills-title text-4xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-emerald-400">Skills</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to create amazing digital experiences
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const colorClasses = getColorClasses(category.color);

                        return (
                            <div key={categoryIndex} className="skill-category">
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold ${colorClasses.text} mb-2`}>
                                            {category.name}
                                        </h3>
                                        <div className={`w-16 h-1 ${colorClasses.bg} mx-auto rounded-full`}></div>
                                    </div>

                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="skill-item">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-white font-medium">{skill.name}</span>
                                                    <span className={`${colorClasses.text} font-semibold`}>
                                                        <span
                                                            className="skill-percentage"
                                                            data-percentage={skill.level}
                                                        >
                                                            0
                                                        </span>%
                                                    </span>
                                                </div>

                                                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                    <div
                                                        className={`skill-bar-fill h-full ${colorClasses.bg} rounded-full transition-all duration-300`}
                                                        data-width={`${skill.level}%`}
                                                        style={{ width: '0%' }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tech stack showcase */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Technologies I Love Working With</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[...portfolioData.skills.frontend, ...portfolioData.skills.backend, ...portfolioData.skills.tools]
                            .sort((a, b) => b.level - a.level)
                            .slice(0, 22)
                            .map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
