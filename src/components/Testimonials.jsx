import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const testimonialsRef = useRef(null);
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

    useEffect(() => {
        const testimonialsSection = testimonialsRef.current;

        gsap.fromTo('.testimonials-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: testimonialsSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo('.testimonial-card',
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: testimonialsSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                (prev + 1) % portfolioData.testimonials.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-400'
                    }`}
            />
        ));
    };

    return (
        <section id="testimonials" className="relative py-20 bg-gray-800" ref={testimonialsRef}>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 opacity-50" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="testimonials-title text-4xl md:text-5xl font-bold text-white mb-6">
                        What Clients <span className="text-emerald-400">Say</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it - here's what some of my clients have to say about working with me
                    </p>
                </div>

                <div className="mb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-emerald-400/20 text-center">
                            <div className="text-emerald-400 mb-6">
                                <Quote className="w-12 h-12 mx-auto" />
                            </div>

                            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
                                "{portfolioData.testimonials[currentTestimonial].content}"
                            </p>

                            <div className="flex justify-center mb-4">
                                {renderStars(portfolioData.testimonials[currentTestimonial].rating)}
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={portfolioData.testimonials[currentTestimonial].image}
                                    alt={portfolioData.testimonials[currentTestimonial].name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                                />
                                <div className="text-left">
                                    <div className="text-white font-semibold text-lg">
                                        {portfolioData.testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-emerald-400">
                                        {portfolioData.testimonials[currentTestimonial].role}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {portfolioData.testimonials[currentTestimonial].company}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-6">
                            {portfolioData.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                        ? 'bg-emerald-400'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {portfolioData.testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <Quote className="w-6 h-6 text-emerald-400 opacity-50" />
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border border-gray-600"
                                />
                                <div>
                                    <div className="text-white font-semibold">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-emerald-400 text-sm">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Join these satisfied clients and let's create something amazing together
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Start Your Project Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
