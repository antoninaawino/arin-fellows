"use client"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, DollarSign, Users, BookOpen, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const ARINFellowshipActivities = () => {
    const activities = [
        {
            id: 1,
            title: "Summer School",
            description:
                "Intensive research training programs designed to enhance skills and knowledge in various research methodologies and academic writing.",
            icon: GraduationCap,
            link: "/summer-school",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            id: 2,
            title: "Mini grants",
            description:
                "Small-scale funding opportunities to support innovative research projects and capacity building initiatives across Africa.",
            icon: DollarSign,
            link: "/mini-grants",
            iconBg: "bg-green-50",
            iconColor: "text-green-600",
        },
        {
            id: 3,
            title: "NDC Fellowship",
            description:
                "Specialized fellowship program focusing on Nationally Determined Contributions and climate change research.",
            icon: Users,
            link: "/ndc-fellowship",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600",
        },
        {
            id: 4,
            title: "NDC Academy",
            description:
                "Educational platform providing comprehensive training on climate policy, NDCs, and sustainable development practices.",
            icon: BookOpen,
            link: "/ndc-academy",
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600",
        },
        {
            id: 5,
            title: "Friday Reviews",
            description:
                "Weekly research review sessions where fellows present their work and receive feedback from peers and mentors.",
            icon: Calendar,
            link: "/friday-reviews",
            iconBg: "bg-pink-50",
            iconColor: "text-pink-600",
        },
    ]

    return (
        <div id="fellowship-activities" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                        What We Do
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Fellowship Activities</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our comprehensive programs designed to foster research excellence and innovation across Africa
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity) => {
                        const IconComponent = activity.icon
                        return (
                            <Link key={activity.id} href={activity.link}>
                                <Card className="group h-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                                    <CardContent className="p-8 h-full flex flex-col">
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className={`w-16 h-16 ${activity.iconBg} rounded-xl flex items-center justify-center`}>
                                                <IconComponent className={`w-8 h-8 ${activity.iconColor}`} />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {activity.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                            {activity.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-[#48a4bb] font-semibold gap-2 group-hover:gap-3 transition-all duration-300">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ARINFellowshipActivities