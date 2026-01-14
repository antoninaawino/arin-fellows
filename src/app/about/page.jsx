"use client";
import { useState, useEffect } from 'react'
import { Users, Globe, Award, Target, Eye, GraduationCap, DollarSign, BookOpen, Calendar, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import ARINNavbar from '@/components/navbar/navbar';
import ArinFellowsFooter from '@/components/footer/footer';

export default function ARINFellowshipAbout() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const activities = [
        {
            id: 1,
            title: "Summer School",
            description: "Intensive research training programs designed to enhance skills and knowledge in various research methodologies and academic writing.",
            icon: GraduationCap,
        },
        {
            id: 2,
            title: "Mini Grants",
            description: "Small-scale funding opportunities to support innovative research projects and capacity building initiatives across Africa.",
            icon: DollarSign,
        },
        {
            id: 3,
            title: "NDC Fellowship",
            description: "Specialized fellowship program focusing on Nationally Determined Contributions and climate change research.",
            icon: Users,
        },
        {
            id: 4,
            title: "NDC Academy",
            description: "Educational platform providing comprehensive training on climate policy, NDCs, and sustainable development practices.",
            icon: BookOpen,
        },
        {
            id: 5,
            title: "Friday Reviews",
            description: "Weekly research review sessions where fellows present their work and receive feedback from peers and mentors.",
            icon: Calendar,
        },
    ]

    const stats = [
        { icon: Users, number: "200+", label: "Researchers", desc: "Combined team experience in research and policy activities" },
        { icon: Globe, number: "38", label: "Countries", desc: "Countries represented across Sub-Saharan Africa" },
        { icon: Award, number: "10+", label: "Years Experience", desc: "Years of promoting research excellence" },
    ]

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Floating background elements */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#14234d]/5 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#14234d]/5 rounded-full blur-3xl animate-float-delayed"></div>

                    <div className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-block px-4 py-2 bg-gray-50 text-[#14234d] rounded-lg text-sm font-semibold mb-6 animate-fade-in">
                            OUR STORY
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
                            About <span className="text-[#14234d] relative inline-block">
                                ARIN Fellowship
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#14234d]/10 -rotate-1 -z-10"></span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Connecting brilliant minds across 38 Sub-Saharan African countries to drive research excellence and create lasting impact in critical sectors
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                                <Users className="h-5 w-5 text-[#14234d]" />
                                <span className="font-medium">200+ Researchers</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                                <Globe className="h-5 w-5 text-[#14234d]" />
                                <span className="font-medium">38 Countries</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <button className="group bg-[#14234d] hover:bg-[#1a2f5f] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                                <span className="relative">Get in Touch →</span>
                            </button>
                            <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-[#14234d] hover:text-[#14234d] transition-all duration-300 hover:-translate-y-1">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main About Section */}
                <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 animate-slide-in-left">
                                <div className="inline-block px-4 py-2 bg-white text-[#14234d] rounded-lg text-sm font-semibold">
                                    Our Story
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Transforming Africa&apos;s Research Landscape</h2>

                                <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                                    <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Over the last decades, Africa has experienced intense research and policy activities in various sectors especially health, agriculture, energy, science and technology, and lately climate change among others.</p>

                                    <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>However, research in the continent remains uncoordinated, with little in-continent learning and poor networking among researchers. The continent lacks impact networks – dedicated platforms for bringing African researchers and policymakers to engage in periodic dialogue, learning, and capability building towards creating research and policy impact.</p>

                                    <div className="bg-white border-l-4 border-[#14234d] p-5 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                        <p className="italic text-gray-700">&quot;Consequently, there is little understanding of best research practices and impact practices taking place in various African contexts and what works or not.&quot;</p>
                                    </div>

                                    <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>It is in this context that the ARIN Network launched the ARIN Fellowship program which brings together over 200 researchers from thirty-eight countries in Sub-Saharan Africa. The fellowship program consists of a network of talented researchers and technocrats across Africa who have been undertaking research in various fields including natural resource management, climate change, agriculture, forestry, energy, water, and cities to leverage their knowledge and experiences in promoting research excellence and impact pathways.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slide-in-right">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#14234d] mb-8">Our Impact Network</h2>

                                <div className="space-y-6">
                                    {[
                                        { icon: Users, title: "200+ Researchers", desc: "Talented researchers and technocrats across 38 Sub-Saharan African countries working in natural resource management, climate change, agriculture, forestry, energy, water, and cities." },
                                        { icon: Target, title: "Mission", desc: "The ARIN Africa Science-Policy Fellowship Programme seeks to identify and leverage on evidence to flexibly and innovatively contribute to Africa&apos;s research transformation, policy analysis and capacity building." },
                                        { icon: Eye, title: "Vision", desc: "The ARIN Africa Science-Policy Fellowship Program envisions a future where scientific advancements are seamlessly integrated into public policy to address Africa&apos;s most pressing development challenges." },
                                        { icon: Globe, title: "38 Countries", desc: "Spanning across Sub-Saharan Africa, creating platforms for cross-border collaboration and knowledge exchange among researchers and policymakers." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0 group-hover:bg-[#14234d] transition-all duration-300">
                                                <item.icon className="h-6 w-6 text-[#14234d] group-hover:text-white transition-all duration-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#14234d] mb-2 group-hover:text-[#1a2f5f] transition-colors">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#14234d] mb-4 animate-fade-in">Building the Future Together</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">The ARIN Fellowship program brings together over 200 researchers from thirty-eight countries, focused on peer learning and transformative research practices across Africa.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon
                                return (
                                    <div
                                        key={i}
                                        className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-[#14234d] transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                        <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-[#14234d] transition-all duration-300 group">
                                            <Icon className="h-8 w-8 text-[#14234d] group-hover:text-white transition-all duration-300" />
                                        </div>
                                        <div className="text-4xl font-bold text-[#14234d] mb-2">{stat.number}</div>
                                        <div className="text-base font-semibold text-gray-900 mb-3">{stat.label}</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{stat.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Activities */}
                <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-block px-4 py-2 bg-white text-[#14234d] rounded-lg text-sm font-semibold mb-4 animate-fade-in">What We Do</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#14234d] mb-4 animate-fade-in">Fellowship Activities</h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">Discover our comprehensive programs designed to foster research excellence and innovation across Africa</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {activities.map((activity, index) => {
                                const Icon = activity.icon
                                return (
                                    <div
                                        key={activity.id}
                                        className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-[#14234d] transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-scale-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onMouseEnter={() => setActiveCard(activity.id)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        <div className={`w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#14234d] transition-all duration-300 ${activeCard === activity.id ? 'scale-110 rotate-6' : ''}`}>
                                            <Icon className="w-7 h-7 text-[#14234d] group-hover:text-white transition-all duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#14234d] mb-3">{activity.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{activity.description}</p>
                                        <div className="flex items-center text-[#14234d] font-semibold text-sm gap-2 group-hover:gap-4 transition-all">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#14234d] mb-2">Get in Touch</h3>
                            <p className="text-gray-600">We&apos;re here to answer your questions and support your research journey</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Phone, label: "Call Us", value: "(+254) 20 2271000" },
                                { icon: Mail, label: "Email Us", value: "info@arin-africa.org" },
                                { icon: MapPin, label: "Visit Us", value: "Nairobi, Kenya" }
                            ].map((contact, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 hover:border-[#14234d] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="bg-gray-50 p-3 rounded-full mb-3 hover:bg-[#14234d] transition-all duration-300 group">
                                        <contact.icon className="h-6 w-6 text-[#14234d] group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{contact.label}</p>
                                    <p className="font-semibold text-[#14234d]">{contact.value}</p>
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
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out 0.1s both;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out both;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out 0.2s both;
                }

                .animate-scale-in {
                    animation: scale-in 0.6s ease-out both;
                }
            `}</style>
            </div>
            <ArinFellowsFooter />


        </>
    )
}