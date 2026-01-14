"use client"
import { useState, useEffect } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import { ndcFellowshipData } from "../../../data/ndc-fellowship/ndc-fellowship"

export default function NDCFellowshipPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredCard, setHoveredCard] = useState(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleItemClick = (item) => {
        console.log("Navigate to:", item.id)
    }

    const getDisplayDescription = (description) => {
        if (!description) {
            return "A transformative fellowship program designed to empower the next generation of African leaders in sustainable development research and policy. More details coming soon."
        }
        return description.length > 200 ? `${description.substring(0, 200)}...` : description
    }

    return (
        <>
            <ARINNavbar />

            <div className="min-h-screen bg-white">
                {/* Hero Section - White with Blue Animations */}
                <div className="relative bg-white text-gray-900 overflow-hidden">
                    {/* Animated blue ripple effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-[#14234d]/5 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#14234d]/5 rounded-full blur-3xl animate-float-delayed"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-float-slow"></div>

                        {/* Animated dots */}
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow"></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#14234d] rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>

                        {/* Floating geometric shapes */}
                        <div className="absolute top-1/4 right-1/3 w-32 h-32 border-2 border-[#14234d]/10 rounded-full animate-spin-very-slow"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-[#14234d]/10 rounded-lg rotate-45 animate-float-rotate"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight animate-slide-up">
                                    <span className="text-[#14234d] relative inline-block">
                                        NDC Fellowship
                                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#14234d]/10 -rotate-1 -z-10 animate-pulse-slow"></span>
                                    </span>
                                    <span className="block text-3xl lg:text-4xl text-[#14234d]/80 mt-2">Programs</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    Explore our NDC Fellowship programs designed to build capacity and leadership in climate change
                                    adaptation and mitigation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-[#14234d]/40" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {ndcFellowshipData.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {ndcFellowshipData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8">
                                        <div className="mb-4">
                                            <div className="text-sm text-gray-500 mb-2">
                                                Posted on {item.date} • Categories: {item.categories.join(", ")}
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-[#14234d] mb-4 cursor-pointer hover:text-[#1a2f5f] transition-colors duration-200"
                                                onClick={() => handleItemClick(item)}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-6">{getDisplayDescription(item.description)}</p>
                                        <button
                                            onClick={() => handleItemClick(item)}
                                            className="group/btn bg-[#14234d] hover:bg-[#1a2f5f] text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center hover:shadow-lg hover:-translate-y-1"
                                        >
                                            Continue Reading
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 animate-fade-in">
                            <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 max-w-2xl mx-auto">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-[#14234d] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                                        <ArrowRight className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-[#14234d] mb-4">Fellowship Programs Coming Soon</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We are currently developing our NDC Fellowship programs. Please check back soon for exciting
                                    opportunities to contribute to sustainable development in Africa.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}


                <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-25px); }
                }

                @keyframes float-rotate {
                    0%, 100% { transform: translateY(0px) rotate(45deg); }
                    50% { transform: translateY(-15px) rotate(50deg); }
                }

                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(2.5); opacity: 0; }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes spin-very-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
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

                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }

                .animate-float-rotate {
                    animation: float-rotate 7s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                .animate-spin-very-slow {
                    animation: spin-very-slow 30s linear infinite;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out 0.1s both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out both;
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