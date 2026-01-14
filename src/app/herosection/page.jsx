"use client";
import { useState, useEffect } from 'react'
import { Users, BookOpen, ArrowRight, Award, Globe, Sparkles } from "lucide-react"

export default function MultiFellowshipHero() {
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setIsVisible(true)

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#14234d]/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14234d]/5 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-float-slow"></div>

                {/* Animated dots pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow"></div>
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Parallax moving elements */}
                <div
                    className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#14234d]/10 rounded-full transition-transform duration-1000"
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                    }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-[#14234d]/10 rounded-lg rotate-45 transition-transform duration-1000"
                    style={{
                        transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) rotate(45deg)`
                    }}
                ></div>
            </div>

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-16 lg:py-20 min-h-[85vh]">

                    {/* Left Column - Text Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Top badge with sparkle animation */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#14234d]/5 to-blue-50 rounded-full px-5 py-2 animate-shine">
                            <Sparkles className="w-4 h-4 text-[#14234d] animate-pulse" />
                            <p className="text-[#14234d] text-sm font-medium">
                                Africa Research & Impact Network
                            </p>
                        </div>

                        {/* Main Heading with gradient animation */}
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#14234d] leading-tight mb-6">
                                Empowering{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10">African</span>
                                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#14234d]/10 -rotate-1 animate-pulse"></span>
                                </span>
                                {' '}Researchers
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Connecting 200+ researchers across 38+ Sub-Saharan African countries to drive transformative research and create lasting impact.
                            </p>
                        </div>

                        {/* CTA Buttons with hover effects */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <button
                                onClick={() => scrollToSection('fellows-overview')}
                                className="group relative bg-[#14234d] hover:bg-[#1a2f5f] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 flex items-center text-lg overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                                <span className="relative">Explore Fellows</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform relative" />
                            </button>
                            <button
                                onClick={() => scrollToSection('fellowship-activities')}
                                className="group border-2 border-gray-300 text-gray-700 hover:border-[#14234d] hover:text-[#14234d] hover:bg-[#14234d]/5 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg hover:-translate-y-1"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Hero Image with animations */}
                    <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="relative">
                            {/* Floating decorative elements around image */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#14234d]/20 to-blue-200/20 rounded-2xl animate-float-rotate"></div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-[#14234d]/20 rounded-full animate-float-reverse"></div>
                            <div className="absolute top-1/4 -right-4 w-16 h-16 border-4 border-[#14234d]/10 rounded-full animate-pulse-slow"></div>

                            {/* Main Image Container with 3D hover effect */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-[0_30px_70px_rgba(20,35,77,0.3)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                                <img
                                    src="/img/fellowship-image.webp"
                                    alt="ARIN Fellowship Network"
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14234d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Single elegant badge with animation */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 animate-slide-up">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-3xl font-bold text-[#14234d] mb-1 animate-count-up">200+</p>
                                            <p className="text-sm text-gray-600">Active Fellows</p>
                                        </div>
                                        <div className="h-12 w-px bg-gray-300"></div>
                                        <div className="text-right">
                                            <p className="text-3xl font-bold text-[#14234d] mb-1 animate-count-up" style={{ animationDelay: '0.2s' }}>38+</p>
                                            <p className="text-sm text-gray-600">Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge accent */}
                            <div className="absolute -top-4 -right-4 bg-[#14234d] text-white rounded-full p-3 shadow-lg animate-bounce-slow">
                                <Award className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar with staggered animation */}
                <div className={`pb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: Users, number: '200+', label: 'Fellows', delay: '0s' },
                            { icon: Globe, number: '38+', label: 'Countries', delay: '0.1s' },
                            { icon: BookOpen, number: '5+', label: 'Programs', delay: '0.2s' },
                            { icon: Award, number: '10+', label: 'Years Impact', delay: '0.3s' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center group cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: stat.delay }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 mb-3 group-hover:bg-[#14234d] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <stat.icon className="w-7 h-7 text-[#14234d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <p className="text-3xl font-bold text-[#14234d] mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-30px) translateX(10px); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes float-rotate {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                }

                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                }

                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(2); opacity: 0; }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes shine {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes count-up {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }

                .animate-float-rotate {
                    animation: float-rotate 5s ease-in-out infinite;
                }

                .animate-float-reverse {
                    animation: float-reverse 7s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .animate-shine {
                    background-size: 200% auto;
                }

                .animate-slide-up {
                    animation: slide-up 0.6s ease-out 0.8s both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }

                .animate-count-up {
                    animation: count-up 0.6s ease-out 1s both;
                }
            `}</style>
        </div>
    )
}