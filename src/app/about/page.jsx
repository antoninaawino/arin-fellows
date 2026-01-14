import ArinFellowsFooter from '@/components/footer/footer'
import ARINNavbar from '@/components/navbar/navbar'
import { Users, Globe, Award, Target, Eye, GraduationCap, DollarSign, BookOpen, Calendar, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function ARINFellowshipAbout() {
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
                <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-gray-50 text-[#14234d] rounded-lg text-sm font-semibold mb-6">
                            OUR STORY
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-[#14234d]">ARIN Fellowship</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                            Connecting brilliant minds across 38 Sub-Saharan African countries to drive research excellence and create lasting impact in critical sectors
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center gap-2 text-gray-700">
                                <Users className="h-5 w-5 text-[#14234d]" />
                                <span className="font-medium">200+ Researchers</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Globe className="h-5 w-5 text-[#14234d]" />
                                <span className="font-medium">38 Countries</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-[#14234d] hover:bg-[#1a2f5f] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                Get in Touch →
                            </button>
                            <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-[#14234d] hover:text-[#14234d] transition-all duration-300">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main About Section */}
                <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-white text-[#14234d] rounded-lg text-sm font-semibold">
                                    Our Story
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-[#14234d]">Transforming Africa's Research Landscape</h2>

                                <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                                    <p>Over the last decades, Africa has experienced intense research and policy activities in various sectors especially health, agriculture, energy, science and technology, and lately climate change among others.</p>

                                    <p>However, research in the continent remains uncoordinated, with little in-continent learning and poor networking among researchers. The continent lacks impact networks – dedicated platforms for bringing African researchers and policymakers to engage in periodic dialogue, learning, and capability building towards creating research and policy impact.</p>

                                    <div className="bg-white border-l-4 border-[#14234d] p-5 rounded-r-lg shadow-sm">
                                        <p className="italic text-gray-700">"Consequently, there is little understanding of best research practices and impact practices taking place in various African contexts and what works or not."</p>
                                    </div>

                                    <p>It is in this context that the ARIN Network launched the ARIN Fellowship program which brings together over 200 researchers from thirty-eight countries in Sub-Saharan Africa. The fellowship program consists of a network of talented researchers and technocrats across Africa who have been undertaking research in various fields including natural resource management, climate change, agriculture, forestry, energy, water, and cities to leverage their knowledge and experiences in promoting research excellence and impact pathways.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#14234d] mb-8">Our Impact Network</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                                            <Users className="h-6 w-6 text-[#14234d]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#14234d] mb-2">200+ Researchers</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">Talented researchers and technocrats across 38 Sub-Saharan African countries working in natural resource management, climate change, agriculture, forestry, energy, water, and cities.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                                            <Target className="h-6 w-6 text-[#14234d]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#14234d] mb-2">Mission</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">The ARIN Africa Science-Policy Fellowship Programme seeks to identify and leverage on evidence to flexibly and innovatively contribute to Africa's research transformation, policy analysis and capacity building.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                                            <Eye className="h-6 w-6 text-[#14234d]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#14234d] mb-2">Vision</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">The ARIN Africa Science-Policy Fellowship Program envisions a future where scientific advancements are seamlessly integrated into public policy to address Africa's most pressing development challenges.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                                            <Globe className="h-6 w-6 text-[#14234d]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#14234d] mb-2">38 Countries</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">Spanning across Sub-Saharan Africa, creating platforms for cross-border collaboration and knowledge exchange among researchers and policymakers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#14234d] mb-4">Building the Future Together</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">The ARIN Fellowship program brings together over 200 researchers from thirty-eight countries, focused on peer learning and transformative research practices across Africa.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon
                                return (
                                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#14234d] transition-all duration-300">
                                        <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <Icon className="h-8 w-8 text-[#14234d]" />
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
                            <div className="inline-block px-4 py-2 bg-white text-[#14234d] rounded-lg text-sm font-semibold mb-4">What We Do</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#14234d] mb-4">Fellowship Activities</h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Discover our comprehensive programs designed to foster research excellence and innovation across Africa</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {activities.map(activity => {
                                const Icon = activity.icon
                                return (
                                    <div key={activity.id} className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-[#14234d] transition-all duration-300 cursor-pointer">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#14234d] transition-all duration-300">
                                            <Icon className="w-7 h-7 text-[#14234d] group-hover:text-white transition-all duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#14234d] mb-3">{activity.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{activity.description}</p>
                                        <div className="flex items-center text-[#14234d] font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
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
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#14234d] mb-2">Get in Touch</h3>
                            <p className="text-gray-600">We're here to answer your questions and support your research journey</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 hover:border-[#14234d] hover:shadow-lg transition-all">
                                <div className="bg-gray-50 p-3 rounded-full mb-3">
                                    <Phone className="h-6 w-6 text-[#14234d]" />
                                </div>
                                <p className="text-sm text-gray-600 mb-1">Call Us</p>
                                <p className="font-semibold text-[#14234d]">(+254) 20 2271000</p>
                            </div>

                            <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 hover:border-[#14234d] hover:shadow-lg transition-all">
                                <div className="bg-gray-50 p-3 rounded-full mb-3">
                                    <Mail className="h-6 w-6 text-[#14234d]" />
                                </div>
                                <p className="text-sm text-gray-600 mb-1">Email Us</p>
                                <p className="font-semibold text-[#14234d]">info@arin-africa.org</p>
                            </div>

                            <div className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-6 hover:border-[#14234d] hover:shadow-lg transition-all">
                                <div className="bg-gray-50 p-3 rounded-full mb-3">
                                    <MapPin className="h-6 w-6 text-[#14234d]" />
                                </div>
                                <p className="text-sm text-gray-600 mb-1">Visit Us</p>
                                <p className="font-semibold text-[#14234d]">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <ArinFellowsFooter />

        </>



    )
}