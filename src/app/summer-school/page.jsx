"use client";
"use client"

import { useState, useEffect } from "react"
import { FileText, Users, Calendar, MapPin, DollarSign, BookOpen, ArrowRight, Globe, Award, ChevronDown } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar";
import ArinFellowsFooter from "@/components/footer/footer";

export default function SummerSchoolPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const outputs = [
        {
            title: "Summer School Program",
            description: "Comprehensive program overview and schedule",
            icon: <Calendar className="w-6 h-6" />,
            externalUrl: "https://www.arin-africa.org/wp-content/uploads/2021/08/ARIN-ASH-Summer-School-2021-AGENDA.pdf",
        },
        {
            title: "Facilitators Padlet",
            description: "Interactive collaboration platform for facilitators",
            icon: <Users className="w-6 h-6" />,
            externalUrl: "https://padlet.com/jonyango3/arin-ash-summer-school-ew9iatbpnx2q4xot",
        },
        {
            title: "Participants Portfolio",
            description: "Showcase of participant projects and achievements",
            icon: <BookOpen className="w-6 h-6" />,
            externalUrl: "https://www.arin-africa.org/wp-content/uploads/2021/08/Portfolio-of-Summer-School-Participants.pdf",
        },
    ]

    const deliveryMethods = [
        "Roundtable discussions and lectures",
        "Joint lectures every morning delivered by different international scholars",
        "Case study course sessions delivered by different international scholars",
        "Workshop groups in the afternoon to discuss the research projects contributing to Decoloniality of Sustainability Research of each participant addressed to small groups of 10 to 15 participants",
    ]

    const handleLinkClick = (externalUrl) => {
        window.open(externalUrl, "_blank")
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section - White Background with Blue Animations */}
                <div className="relative bg-white text-gray-900 overflow-hidden">
                    {/* Animated blue ripple effects in background */}
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

                    <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 z-10">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="mb-8 text-gray-600 hover:text-[#14234d] hover:bg-gray-100 transition-all duration-300 rounded-full px-6 py-2 border border-gray-200">
                                ← Back to Home
                            </button>

                            <div className="mb-10">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight animate-slide-up">
                                    <span className="block text-[#14234d] relative inline-block">
                                        Decolonizing Sustainability
                                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#14234d]/10 -rotate-1 -z-10 animate-pulse-slow"></span>
                                    </span>
                                    <span className="block text-3xl md:text-5xl lg:text-6xl text-[#14234d]/80 mt-3">Research Summer School</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    Exploring methods for informing policy decisions and wider political debates to enable learning,
                                    enrich knowledge, enhance practice and nurture more emancipatory outcomes in the Global South.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-[#14234d] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <MapPin className="w-7 h-7 text-[#14234d]" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-[#14234d]">Kenya</div>
                                        <div className="text-sm text-gray-600">Location</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-[#14234d] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <DollarSign className="w-7 h-7 text-[#14234d]" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-[#14234d]">$500</div>
                                        <div className="text-sm text-gray-600">Per Participant</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-100 hover:border-[#14234d] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <Globe className="w-7 h-7 text-[#14234d]" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-[#14234d]">Global South</div>
                                        <div className="text-sm text-gray-600">Focus</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-[#14234d]/40" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    {/* Background Section */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2 animate-slide-in-left">
                                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                            <FileText className="w-7 h-7 text-[#14234d]" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Background</h2>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                                        <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                            In the Global South, &apos;coloniality&apos; has long been associated with political rule over
                                            subordinated countries. Struggles for &apos;decoloniality&apos; have evolved from the undoing of colonial rule, to the even more fundamental
                                            challenge of freeing knowledge, practice, and culture from deeper worldwide concentrations of
                                            incumbent power. In keeping with the more
                                            expansive ambitions of the Sustainable Development Goals, a decolonisation framework thus
                                            encompasses some of the most profound and pervasive critiques of globalising structures and
                                            their conditioning effects in every setting.
                                        </p>
                                        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                            Accordingly, the neglected imperative to &apos;decolonise methodologies&apos; in research and policy
                                            appraisal, embodies some of the most important and intractable challenges in this sustainability
                                            – offering crucial opportunities for thinking, knowing, and doing alike. The summer school will allow participants
                                            therefore to explore how methods for informing policy decisions and wider political debates can
                                            enable learning, enrich knowledge, enhance practice and nurture more emancipatory outcomes in
                                            the Global South.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 animate-slide-in-right">
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-[#14234d] transition-all duration-300 hover:-translate-y-2">
                                    <Award className="w-12 h-12 text-[#14234d] mb-3" />
                                    <h3 className="font-bold text-[#14234d] text-lg mb-2">Acclaimed Scholars</h3>
                                    <p className="text-sm text-gray-600">
                                        Learn from international experts in sustainability research and decoloniality
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-[#14234d] transition-all duration-300 hover:-translate-y-2">
                                    <Users className="w-12 h-12 text-[#14234d] mb-3" />
                                    <h3 className="font-bold text-[#14234d] text-lg mb-2">Collaborative Learning</h3>
                                    <p className="text-sm text-gray-600">
                                        Small group workshops with 10-15 participants for personalized attention
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <BookOpen className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">About the Summer School</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                                <p>
                                    Drawing from the lessons on the{" "}
                                    <em className="text-[#14234d] font-medium">Decoloniality of Methods</em> webinar series (practices),
                                    and book project (theory), the summer school will provide a practical opportunity for participants
                                    to explore how methods have been (can be) used to inform, impact and transform policies, societies
                                    and economies. At the end of the training sessions, the participants will participate in the STEPS
                                    methods year workshop, as part of their post-summer school alumni engagement.
                                </p>
                                <p>
                                    The summer school takes into consideration a learner centered approach, allowing for theory,
                                    practice, and practical approaches. The summer school will be held in Kenya, however, due to the
                                    COVID-19 Pandemic restrictions, we are exploring the possibilities of online participation in some
                                    of the activities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Target Participants & Fees */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-scale-in">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Users className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#14234d]">Target Participants</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The participants in the summer school will be drawn from multiple stakeholders and sectors, and will
                                    cut across various actor groups of interest to decolonization of methods, and valorization of next
                                    generation of practical methods.
                                </p>
                                <p>
                                    Specifically the summer school targets Post graduate students and early career researchers, policy
                                    makers, and practitioners contributing to sustainability.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <DollarSign className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#14234d]">Summer School Fees</h2>
                            </div>
                            <div className="text-center mb-6">
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-gray-100 transition-all duration-300">
                                    <div className="text-6xl font-bold text-[#14234d] mb-2">$500</div>
                                    <div className="text-gray-600 text-lg">Per Participant</div>
                                </div>
                            </div>
                            <div className="text-gray-700 leading-relaxed">
                                <p>
                                    Summer school fee will be $500 per participant. Applicants are required to indicate whether they are
                                    government/institution/organization sponsored, scholarship or self-sponsored or any other.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methods of Delivery */}
                    <div className="mb-20 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <Calendar className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Methods of Delivery</h2>
                            </div>
                            <div className="mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The school will bring together acclaimed scholars of the field of sustainability research,
                                    decoloniality, and methods, aiming to offer each participant the opportunity to follow:
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {deliveryMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#14234d] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-[#14234d] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-bold">{index + 1}</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{method}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Outputs */}
                    <div className="mb-16 animate-fade-in">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <FileText className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Outputs</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                {outputs.map((output, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer animate-scale-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onClick={() => handleLinkClick(output.externalUrl)}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        <div className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#14234d] hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 ${activeCard === index ? 'scale-105' : ''}`}>
                                            <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl text-[#14234d] mb-6 group-hover:bg-[#14234d] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                {output.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#14234d] mb-4">
                                                {output.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">{output.description}</p>
                                            <div className="flex items-center text-[#14234d] font-semibold group-hover:gap-3 transition-all duration-300">
                                                <span className="mr-2">Explore</span>
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-[#14234d] text-center text-lg">
                                    <strong>Interactive Outputs:</strong> Click on any card above to explore the detailed resources and
                                    materials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600 text-sm">
                            © 2024 <span className="text-[#14234d] font-semibold">ARIN Fellowship</span> • Building Africa&apos;s Research Excellence Network
                        </p>
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