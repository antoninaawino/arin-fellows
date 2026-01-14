"use client"

import { useState, useEffect } from "react"
import { FileText, Users, Calendar, MapPin, DollarSign, BookOpen, ArrowRight, Globe, Award, ChevronDown } from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

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
                {/* Hero Section with Enhanced Visibility */}
                <div className="relative bg-gradient-to-br from-[#14234d] via-[#1a2f5f] to-[#14234d] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="mb-8 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-6 py-2 border border-white/20">
                                ← Back to Home
                            </button>

                            <div className="mb-10">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                                    <span className="block text-white">Decolonizing Sustainability</span>
                                    <span className="block text-3xl md:text-5xl lg:text-6xl text-cyan-300 mt-3">Research Summer School</span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                                    Exploring methods for informing policy decisions and wider political debates to enable learning,
                                    enrich knowledge, enhance practice and nurture more emancipatory outcomes in the Global South.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <MapPin className="w-7 h-7 text-cyan-300" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">Kenya</div>
                                        <div className="text-sm text-white/70">Location</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <DollarSign className="w-7 h-7 text-cyan-300" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">$500</div>
                                        <div className="text-sm text-white/70">Per Participant</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <Globe className="w-7 h-7 text-cyan-300" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">Global South</div>
                                        <div className="text-sm text-white/70">Focus</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    {/* Background Section */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                            <FileText className="w-7 h-7 text-[#14234d]" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Background</h2>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                                        <p>
                                            In the Global South, 'coloniality' has long been associated with political rule over
                                            subordinated countries. Struggles for 'decoloniality' have evolved from the undoing of colonial rule, to the even more fundamental
                                            challenge of freeing knowledge, practice, and culture from deeper worldwide concentrations of
                                            incumbent power. In keeping with the more
                                            expansive ambitions of the Sustainable Development Goals, a decolonisation framework thus
                                            encompasses some of the most profound and pervasive critiques of globalising structures and
                                            their conditioning effects in every setting.
                                        </p>
                                        <p>
                                            Accordingly, the neglected imperative to 'decolonise methodologies' in research and policy
                                            appraisal, embodies some of the most important and intractable challenges in this sustainability
                                            – offering crucial opportunities for thinking, knowing, and doing alike. The summer school will allow participants
                                            therefore to explore how methods for informing policy decisions and wider political debates can
                                            enable learning, enrich knowledge, enhance practice and nurture more emancipatory outcomes in
                                            the Global South.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <Award className="w-12 h-12 text-[#14234d] mb-3" />
                                    <h3 className="font-bold text-[#14234d] text-lg mb-2">Acclaimed Scholars</h3>
                                    <p className="text-sm text-gray-600">
                                        Learn from international experts in sustainability research and decoloniality
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
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
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
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

                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                                    <DollarSign className="w-7 h-7 text-[#14234d]" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#14234d]">Summer School Fees</h2>
                            </div>
                            <div className="text-center mb-6">
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
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
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500">
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
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#14234d] transition-all duration-300 hover:-translate-y-1"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-[#14234d] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                    <div className="mb-16">
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
                                        className="group cursor-pointer"
                                        onClick={() => handleLinkClick(output.externalUrl)}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        <div className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#14234d] hover:shadow-xl transition-all duration-500 h-full transform hover:-translate-y-2 ${activeCard === index ? 'scale-105' : ''}`}>
                                            <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl text-[#14234d] mb-6 group-hover:bg-[#14234d] group-hover:text-white transition-all duration-500">
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
                {/* <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-600 text-sm">
                        © 2024 <span className="text-[#14234d] font-semibold">ARIN Fellowship</span> • Building Africa's Research Excellence Network
                    </p>
                </div>
            </div> */}
            </div>
            <ArinFellowsFooter />


        </>
    )
}