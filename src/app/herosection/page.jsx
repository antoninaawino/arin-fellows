"use client";
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { Users, BookOpen, ArrowRight, Award, Globe, Sparkles, Play, Volume2 } from "lucide-react"
import peopleData from '../../../public/pdfs/fellows.json';

// Dynamically import the map component (no SSR for Leaflet)
const AfricaMap = dynamic(() => import('../people-distribution/Africaleafletmap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-white/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#14234d] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading interactive map...</p>
            </div>
        </div>
    ),
});

export default function MultiFellowshipHero() {
    const [isVisible, setIsVisible] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        setIsVisible(true)

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            })
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

    const stats = [
        { icon: Users, number: '200+', label: 'Active Fellows', color: 'from-blue-500 to-cyan-500', desc: 'Researchers making impact' },
        { icon: Globe, number: '38+', label: 'Countries', color: 'from-purple-500 to-pink-500', desc: 'Across Sub-Saharan Africa' },
        { icon: BookOpen, number: '5+', label: 'Programs', color: 'from-orange-500 to-red-500', desc: 'Specialized fellowships' },
        { icon: Award, number: '10+', label: 'Years Impact', color: 'from-green-500 to-emerald-500', desc: 'Of transformative work' }
    ]

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#14234d]/10 to-blue-400/10 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>

                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, #14234d 1px, transparent 1px),
                            linear-gradient(to bottom, #14234d 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#14234d]/20 rounded-full animate-float-particle"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle-delayed"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full animate-float-particle-slow"></div>
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#14234d]/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="relative">
                            <Sparkles className="w-4 h-4 text-[#14234d] animate-pulse" />
                            <div className="absolute inset-0 bg-[#14234d]/20 blur-md animate-pulse"></div>
                        </div>
                        <span className="text-[#14234d] text-sm font-semibold tracking-wide">
                            ARIN Fellows - Africa Research & Impact Network
                        </span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Main Title with Gradient Effect */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-[#14234d] via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient mb-3">
                            ARIN Fellows
                        </span>
                        <span className="block text-[#14234d] text-4xl md:text-5xl lg:text-6xl">
                            Empowering African Researchers
                        </span>
                    </h1>

                    <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                        Connecting <span className="font-bold text-[#14234d]">200+ researchers</span> across <span className="font-bold text-[#14234d]">38+ countries</span> to drive transformative research and create lasting impact
                    </p>

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                        <button
                            onClick={() => scrollToSection('fellows-overview')}
                            className="group relative bg-gradient-to-r from-[#14234d] to-[#1a2f5f] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center">
                                Explore Fellows
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={() => scrollToSection('fellowship-activities')}
                            className="group relative border-3 border-[#14234d] text-[#14234d] font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-[#14234d] hover:text-white hover:-translate-y-2 shadow-lg hover:shadow-xl"
                        >
                            Learn More
                        </button>

                        <div className="flex items-center gap-2 text-sm text-gray-500 ml-4">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                            </div>
                            <span className="font-medium">Join 200+ ARIN Fellows</span>
                        </div>
                    </div>
                </div>

                {/* Video Section - Enhanced with Glassmorphism */}
                <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="relative">

                        {/* Glow Effect Behind Video */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#14234d]/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60"></div>

                        {/* Video Container with Glassmorphism */}
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-2 md:p-3 border border-white/20">

                            <div className="relative rounded-2xl overflow-hidden">
                                {!showVideo ? (
                                    <div className="relative cursor-pointer group" onClick={() => setShowVideo(true)}>
                                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                            <img
                                                src="/img/thumbnail.png"
                                                alt="Watch Our Impact Story"
                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="relative mb-8">
                                                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

                                                    <div className="relative bg-white rounded-full p-8 md:p-10 shadow-2xl group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transition-all duration-300">
                                                        <Play className="w-14 h-14 md:w-20 md:h-20 text-[#14234d] fill-[#14234d] ml-2" />
                                                    </div>
                                                </div>

                                                <div className="text-center px-6">
                                                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                                                        ARIN Fellows Impact Story
                                                    </h2>
                                                    <p className="text-white/90 text-lg md:text-xl mb-4 drop-shadow">
                                                        See how ARIN Fellows are transforming African research
                                                    </p>
                                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                                        <Volume2 className="w-4 h-4 text-white" />
                                                        <span className="text-white text-sm font-medium">Audio Available</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-base font-bold flex items-center gap-2 shadow-lg">
                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                8:00
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
                                                <div className="flex items-center justify-between text-white text-sm">
                                                    <span className="font-medium">ARIN Fellows Impact Video</span>
                                                    <span className="opacity-80">Click to play</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.youtube.com/embed/GYrEMHVHzyo?autoplay=1&rel=0"
                                            title="ARIN Fellows Impact Story"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Floating Elements Around Video */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-2xl rotate-12 blur-sm animate-float"></div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-float-delayed"></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-lg rotate-45 blur-sm animate-float-slow"></div>
                    </div>
                </div>

                {/* Interactive Stats Cards */}
                <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Card Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                                {/* Card Content */}
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">

                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                                <stat.icon className="w-8 h-8 text-[#14234d]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <p className="text-5xl font-bold bg-gradient-to-r from-[#14234d] to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </p>

                                    {/* Label */}
                                    <p className="text-[#14234d] font-bold text-lg mb-1">{stat.label}</p>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm">{stat.desc}</p>

                                    {/* Hover Arrow */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight className="w-5 h-5 text-[#14234d]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW: Interactive Map Section */}
                <div className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#14234d]/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2.5 mb-6 border border-white/20 shadow-lg">
                            <Globe className="w-4 h-4 text-[#14234d]" />
                            <span className="text-[#14234d] text-sm font-semibold tracking-wide">
                                GLOBAL NETWORK
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                            <span className="bg-gradient-to-r from-[#14234d] via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Fellows Across Africa
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                            Explore our interactive map to see where our 200+ fellows are making an impact across 38+ countries
                        </p>
                    </div>

                    {/* Map Container with Enhanced Styling */}
                    <div className="relative">
                        {/* Glow Effect Behind Map */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#14234d]/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60"></div>

                        {/* Map Wrapper with Glassmorphism */}
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-6 border border-white/20 overflow-hidden">
                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#14234d]/5 to-transparent rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full"></div>

                            {/* Map Content with unique key to prevent re-initialization */}
                            <div className="relative z-10 rounded-2xl overflow-hidden" style={{ height: '600px' }}>
                                <AfricaMap peopleData={peopleData} key="hero-africa-map" />
                            </div>

                            {/* Map Legend/Info Bar */}
                            <div className="mt-6 flex flex-wrap gap-4 justify-center items-center text-sm">
                                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">Fellows Location</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-700 font-medium">Click countries for details</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements Around Map */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-2xl rotate-12 blur-sm animate-float"></div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-float-delayed"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-5deg); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(45deg); }
                    50% { transform: translateY(-15px) rotate(50deg); }
                }

                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
                    50% { transform: translateY(-100px) translateX(50px); opacity: 0.8; }
                }

                @keyframes float-particle-delayed {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    50% { transform: translateY(-80px) translateX(-40px); opacity: 0.7; }
                }

                @keyframes float-particle-slow {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
                    50% { transform: translateY(-60px) translateX(30px); opacity: 0.6; }
                }

                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }

                .animate-float-particle {
                    animation: float-particle 8s ease-in-out infinite;
                }

                .animate-float-particle-delayed {
                    animation: float-particle-delayed 10s ease-in-out infinite;
                }

                .animate-float-particle-slow {
                    animation: float-particle-slow 12s ease-in-out infinite;
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 5s ease infinite;
                }
            `}</style>
        </div>
    )
}