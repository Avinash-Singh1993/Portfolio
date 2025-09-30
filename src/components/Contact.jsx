import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import portfolioData from '../mockData';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const contactSection = contactRef.current;

        // Animate section title
        gsap.fromTo('.contact-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contactSection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate contact info cards
        gsap.fromTo('.contact-info-card',
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contactSection,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate form
        gsap.fromTo('.contact-form',
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contactSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate form fields
        gsap.fromTo('.form-field',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: contactSection,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            alert("Message Sent! Thank you for your message. I'll get back to you soon!");

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (e) {
            alert(`Error: Something went wrong. Please try again. ${e.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: portfolioData.personal.email,
            link: `mailto:${portfolioData.personal.email}`
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: portfolioData.personal.phone,
            link: `tel:${portfolioData.personal.phone}`
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: portfolioData.personal.location,
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            name: "GitHub",
            url: portfolioData.personal.social.github
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            name: "LinkedIn",
            url: portfolioData.personal.social.linkedin
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            name: "Twitter",
            url: portfolioData.personal.social.twitter
        }
    ];

    return (
        <section id="contact" className="relative py-20 bg-gray-800" ref={contactRef}>
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 opacity-50" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="contact-title text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Work <span className="text-emerald-400">Together</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="contact-info-card bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-500/20 p-3 rounded-lg border border-emerald-400/30">
                                            <div className="text-emerald-400">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold mb-1">
                                                {info.title}
                                            </div>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-gray-300">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700/50 hover:bg-emerald-500/20 p-3 rounded-lg border border-gray-600 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 group"
                                    >
                                        <div className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-field">
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-vertical"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
