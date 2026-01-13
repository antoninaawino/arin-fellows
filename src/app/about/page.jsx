"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    GraduationCap,
    DollarSign,
    Users,
    BookOpen,
    Calendar,
    ArrowRight,
    Phone,
    Target,
    Eye,
    Award,
    Globe,
    TrendingUp,
} from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"
import Link from "next/link"
import Image from "next/image"

const ARINFellowshipAbout = () => {
    const activities = [
        {
            id: 1,
            title: "Summer School",
            description:
                "Intensive research training programs designed to enhance skills and knowledge in various research methodologies and academic writing.",
            icon: GraduationCap,
            link: "/summer-school",
            color: "from-blue-500 to-blue-600",
        },
        {
            id: 2,
            title: "Mini grants",
            description:
                "Small-scale funding opportunities to support innovative research projects and capacity building initiatives across Africa.",
            icon: DollarSign,
            link: "/mini-grants",
            color: "from-green-500 to-green-600",
        },
        {
            id: 3,
            title: "NDC Fellowship",
            description:
                "Specialized fellowship program focusing on Nationally Determined Contributions and climate change research.",
            icon: Users,
            link: "/ndc-fellowship",
            color: "from-purple-500 to-purple-600",
        },
        {
            id: 4,
            title: "NDC Academy",
            description:
                "Educational platform providing comprehensive training on climate policy, NDCs, and sustainable development practices.",
            icon: BookOpen,
            link: "/ndc-academy",
            color: "from-orange-500 to-orange-600",
        },
        {
            id: 5,
            title: "Friday Reviews",
            description:
                "Weekly research review sessions where fellows present their work and receive feedback from peers and mentors.",
            icon: Calendar,
            link: "/friday-reviews",
            color: "from-pink-500 to-pink-600",
        },
    ]

    const leadership = [
        {
            name: "Dr. Joanes Atela",
            position: "Executive Director",
            image: "/img/Prof-scaled.jpg",
        },
        {
            name: "Akinyi J. Eurallyah",
            position: "ARIN Fellowship Manager",
            image: "/img/Akinyi2.jpg",
        },
        // {
        //     name: "Edna Kowenje",
        //     position: "ARIN Fellowship Coordinator",
        //     image: "/img/edna.jpg",
        // },
    ]

    const stats = [
        { icon: Users, number: "200+", label: "Researchers", color: "text-blue-500" },
        { icon: Globe, number: "38", label: "Countries", color: "text-green-500" },
        { icon: Award, number: "10+", label: "Years Experience", color: "text-purple-500" },
        { icon: TrendingUp, number: "100+", label: "Research Projects", color: "text-orange-500" },
    ]

    const handleActivityClick = (link) => {
        // For demo purposes, we'll show an alert. In a real app, you'd use React Router
        // window.location.href = link; // Direct navigation
        // or with React Router: navigate(link);
        alert(`Navigating to: ${link}`)
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-[#030f41] via-[#1a2951] to-[#48a4bb] overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#48a4bb]/20 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/3 rounded-full animate-bounce"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 py-24">
                        <div className="text-center space-y-8">
                            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#9bc8ce] text-sm font-medium backdrop-blur-sm">
                                Building Africa&apos;s Research Excellence Network
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                About{" "}
                                <span className="bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] bg-clip-text text-transparent">ARIN</span>
                                <br />
                                Fellowship
                            </h1>

                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Connecting brilliant minds across 38 Sub-Saharan African countries to drive research excellence and
                                create lasting impact in critical sectors
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                                <Button className="bg-white text-[#030f41] hover:bg-gray-100 hover:scale-105 px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300">
                                    Join Our Network
                                </Button>
                                <div className="flex items-center gap-3 text-white/90 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                                    <Phone className="h-5 w-5" />
                                    <span className="font-medium">(+254) 20 2271000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="relative -mt-16 max-w-6xl mx-auto px-6 z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <Card
                                    key={index}
                                    className="p-6 bg-white shadow-xl rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <IconComponent className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </Card>
                            )
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
                    {/* About Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                                    Our Story
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Africa&apos;s Research Landscape</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] rounded-full mb-8"></div>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Over the last decades, Africa has experienced intense research and policy activities in various
                                    sectors especially health, agriculture, energy, science and technology, and lately climate change
                                    among others. However, research in the continent remains uncoordinated, with little in-continent
                                    learning and poor networking among researchers.
                                </p>
                                <p>
                                    The continent lacks impact networks – dedicated platforms for bringing African researchers and
                                    policymakers to engage in periodic dialogue, learning, and capability building towards creating
                                    research and policy impact.
                                </p>
                                <p className="font-medium text-[#030f41]">
                                    The ARIN Fellowship program brings together over 200 researchers from thirty-eight countries, focused
                                    on peer learning and transformative research practices across Africa.
                                </p>
                            </div>

                            <Button className="bg-[#48a4bb] hover:bg-[#9bc8ce] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                Learn More About Our Impact
                            </Button>
                        </div>

                        {/* Enhanced Visual Element */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#030f41] to-[#48a4bb] rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#48a4bb]/30 rounded-full translate-y-16 -translate-x-16"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6">Research Excellence Network</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-3 border-b border-white/20">
                                            <span>Natural Resource Management</span>
                                            <div className="w-2 h-2 bg-[#9bc8ce] rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-white/20">
                                            <span>Climate Change Research</span>
                                            <div className="w-2 h-2 bg-[#9bc8ce] rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-white/20">
                                            <span>Agriculture &amp; Forestry</span>
                                            <div className="w-2 h-2 bg-[#9bc8ce] rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <span>Energy &amp; Water Systems</span>
                                            <div className="w-2 h-2 bg-[#9bc8ce] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission and Vision */}
                    <div className="relative">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                                Our Purpose
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">Mission &amp; Vision</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="relative p-8 bg-gradient-to-br from-[#48a4bb] to-[#9bc8ce] text-white rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="relative z-10">
                                    <Target className="h-12 w-12 mb-6" />
                                    <h3 className="font-bold text-2xl mb-4">Mission</h3>
                                    <p className="leading-relaxed text-lg">
                                        The ARIN Africa Science-Policy Fellowship Programme seeks to identify and leverage on evidence to
                                        flexibly and innovatively contribute to Africa&apos;s research transformation, policy analysis and
                                        capacity building.
                                    </p>
                                </div>
                            </Card>

                            <Card className="relative p-8 bg-gradient-to-br from-[#030f41] to-[#1a2951] text-white rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#48a4bb]/20 rounded-full translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="relative z-10">
                                    <Eye className="h-12 w-12 mb-6" />
                                    <h3 className="font-bold text-2xl mb-4">Vision</h3>
                                    <p className="leading-relaxed text-lg">
                                        The ARIN Africa Science-Policy Fellowship Program envisions a future where scientific advancements
                                        are seamlessly integrated into public policy to address Africa&apos;s most pressing development
                                        challenges.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Fellowship Activities */}
                    <div>
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                                What We Do
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fellowship Activities</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover our comprehensive programs designed to foster research excellence and innovation across Africa
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {activities.slice(0, 3).map((activity) => {
                                const IconComponent = activity.icon
                                return (
                                    <Card
                                        key={activity.id}
                                        className="group relative p-8 bg-white border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                                        onClick={() => handleActivityClick(activity.link)}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                        ></div>

                                        <div className="relative z-10">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                                                {activity.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>

                                            <div className="flex items-center text-[#48a4bb] font-semibold group-hover:gap-3 transition-all duration-300">
                                                For more information
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>

                        {/* Remaining activities in a different layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                            {activities.slice(3).map((activity) => {
                                const IconComponent = activity.icon
                                return (
                                    <Link key={activity.id} href={activity.link} passHref>
                                        <Card className="group relative p-8 bg-white border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                            ></div>

                                            <div className="relative z-10">
                                                <div
                                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 mb-4">{activity.title}</h3>

                                                <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>

                                                <div className="flex items-center text-[#48a4bb] font-semibold group-hover:gap-3 transition-all duration-300">
                                                    For more information
                                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Leadership Team */}
                    <div className="bg-white rounded-3xl p-12 shadow-xl">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                                Our Leaders
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
                            <p className="text-xl text-gray-600">
                                Meet the visionaries driving Africa&apos;s research transformation
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {leadership.map((leader, index) => (
                                <Card
                                    key={index}
                                    className="group p-8 bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg hover:shadow-2xl rounded-3xl text-center transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="relative w-32 h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                                        <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030f41]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">{leader.name}</h4>
                                    <p className="text-[#48a4bb] font-medium">{leader.position}</p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] rounded-full mx-auto mt-4"></div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    )
}

export default ARINFellowshipAbout
