"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Building2, Globe, ArrowRight, Mail, Copy, Check } from "lucide-react"

export default function FellowsOverview() {
    const [showEmailModal, setShowEmailModal] = useState(false)
    const [copied, setCopied] = useState(false)

    const emailDetails = {
        email: "e.akinyi@arin-africa.org",
        subject: "Fellowship Application Inquiry",
        name: "Eurallyah Akinyi",
    }

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailDetails.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea")
            textArea.value = emailDetails.email
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const sections = [

        {
            title: "ARIN Fellows",
            description:
                "Explore our ARIN fellowship program participants dedicated to advancing research excellence across Africa",
            link: "/fellows/arin",
            icon: Users,
            color: "from-blue-500 to-blue-600",
            bgColor: "from-[#48a4bb] to-[#9bc8ce]",
            featured: true,

        },
        {
            title: "LEEPS Fellows ",
            description: "Meet our Africa LEEPS Fellows contributing to evidence-informed policymaking and sustainable development across Africa"
            , link: "/fellows/leeps",
            icon: Globe,
            color: "from-green-500 to-green-600",
            bgColor: "from-emerald-500 to-emerald-600",
        },
        {
            title: "Accountable Fellows",
            description:
                "Discover our fellows working on accountability and governance initiatives for transparent development",
            link: "/fellows/accountable-adaptation",
            icon: Building2,
            color: "from-purple-500 to-purple-600",
            bgColor: "from-[#030f41] to-[#1a2951]",
        },
        {
            title: "SDG Fellows",
            description: "Meet our fellows dedicated to achieving Sustainable Development Goals across the continent",
            link: "/fellows/sdg",
            icon: Globe,
            color: "from-green-500 to-green-600",
            bgColor: "from-emerald-500 to-emerald-600",
        },

    ]

    return (
        <>
            <div id="fellows-overview" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-full text-sm font-semibold mb-4">
                            Our Community
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Fellows</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover our diverse community of researchers, policy makers, and change agents driving Africa&apos;s
                            development agenda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sections.map((section, index) => {
                            const IconComponent = section.icon
                            return (
                                <Link key={index} href={section.link} passHref>
                                    <Card
                                        className={`group relative h-full cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 overflow-hidden rounded-3xl border-0 shadow-xl ${section.featured ? `bg-gradient-to-br ${section.bgColor} text-white` : "bg-white text-gray-900"
                                            }`}
                                    >
                                        {/* Gradient overlay for non-featured cards */}
                                        {!section.featured && (
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                            ></div>
                                        )}

                                        {/* Background decorative elements */}
                                        {section.featured ? (
                                            <>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                            </>
                                        ) : (
                                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-100/50 rounded-full translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>
                                        )}

                                        <div className="relative z-10 p-8 h-full flex flex-col">
                                            {/* Icon */}
                                            <div className="mb-6">
                                                <div
                                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${section.featured ? "bg-white/20" : `bg-gradient-to-br ${section.color}`
                                                        }`}
                                                >
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`text-2xl font-bold mb-4 group-hover:text-opacity-90 transition-all duration-300 ${section.featured ? "text-white" : "text-gray-900"
                                                    }`}
                                            >
                                                {section.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className={`leading-relaxed mb-8 flex-grow ${section.featured ? "text-white/90" : "text-gray-600"
                                                    }`}
                                            >
                                                {section.description}
                                            </p>

                                            {/* CTA Button */}
                                            <div className="mt-auto">
                                                <div
                                                    className={`inline-flex items-center font-semibold group-hover:gap-3 transition-all duration-300 ${section.featured ? "text-white" : "text-[#48a4bb]"
                                                        }`}
                                                >
                                                    View Fellows
                                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Featured badge */}
                                        {section.featured && (
                                            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                                                Featured
                                            </div>
                                        )}
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6">Join our network of over 200 researchers across 38 countries</p>
                        <Button
                            onClick={() => setShowEmailModal(true)}
                            className="bg-[#48a4bb] hover:bg-[#9bc8ce] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Become a Fellow
                        </Button>
                    </div>
                </div>
            </div>

            {/* Professional Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-[#48a4bb]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-[#48a4bb]" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                                <p className="text-gray-600">Contact us about fellowship opportunities</p>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Contact Person:</label>
                                    <p className="text-gray-900 font-medium">{emailDetails.name}</p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Email Address:</label>
                                    <div className="flex items-center justify-between bg-white rounded border p-3">
                                        <span className="text-gray-900 font-mono text-sm">{emailDetails.email}</span>
                                        <Button
                                            onClick={handleCopyEmail}
                                            variant="ghost"
                                            size="sm"
                                            className="text-[#48a4bb] hover:bg-[#48a4bb]/10"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="w-4 h-4 mr-1" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4 mr-1" />
                                                    Copy
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Suggested Subject:</label>
                                    <p className="text-gray-900">{emailDetails.subject}</p>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-8">
                                <Button
                                    onClick={() => setShowEmailModal(false)}
                                    variant="outline"
                                    className="flex-1 border-gray-300 hover:bg-gray-50"
                                >
                                    Close
                                </Button>
                                <Button
                                    onClick={() => {
                                        const subject = encodeURIComponent(emailDetails.subject)
                                        const body = encodeURIComponent(
                                            `Dear ${emailDetails.name},\n\nI am interested in learning more about the ARIN Fellowship opportunities.\n\nThank you.`,
                                        )
                                        window.open(`mailto:${emailDetails.email}?subject=${subject}&body=${body}`, "_blank")
                                    }}
                                    className="flex-1 bg-[#48a4bb] hover:bg-[#9bc8ce] text-white"
                                >
                                    Open Email Client
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
