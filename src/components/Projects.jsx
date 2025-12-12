import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = useRef(null);
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(portfolioData.projects);

    useEffect(() => {
        const projectsSection = projectsRef.current;

        // Animate section title
        gsap.fromTo('.projects-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: projectsSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate filter buttons
        gsap.fromTo('.filter-button',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: projectsSection,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate project cards
        gsap.fromTo('.project-card',
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: projectsSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(portfolioData.projects);
        } else {
            setFilteredProjects(portfolioData.projects.filter(project => project.category === filter));
        }
    }, [filter]);

    const categories = ['All', 'Frontend', 'Backend', 'Full-Stack'];

    return (
        <section id="projects" className="relative py-20 bg-gray-800" ref={projectsRef}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="projects-title text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-emerald-400">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`filter-button px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === category
                                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600 hover:border-gray-500'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group bg-gray-700/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
                        >
                            {/* Project image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Project content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-800/50 text-emerald-400 px-2 py-1 rounded border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-500">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${project.liveUrl ? 'flex-none' : 'flex-1'} bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                                    >
                                        <Github size={16} className={project.liveUrl ? '' : 'inline mr-2'} />
                                        {project.liveUrl ? '' : 'View Code'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more projects */}
                <div className="text-center mt-12">
                    <a
                        href={portfolioData.personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        <Github size={20} />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
