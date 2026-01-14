"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Users, Target, Eye, Globe } from "lucide-react"

const ARINFellowshipAbout = () => {
    return (
        <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main About Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold">
                            MORE ABOUT US
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-[#030f41] leading-tight">
                            Building Africa&apos;s Research Excellence Network
                        </h1>

                        <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                            <p>
                                Over the last decades, Africa has experienced intense research and policy activities in various sectors
                                especially health, agriculture, energy, science and technology, and lately climate change among others.
                                However, research in the continent remains uncoordinated, with little in-continent learning and poor
                                networking among researchers. The continent lacks impact networks – i.e. dedicated platforms for
                                bringing African researchers and policymakers to engage in periodic dialogue, learning, and capability
                                building towards creating research and policy impact.
                            </p>

                            <p className="italic text-gray-600 pl-4 border-l-4 border-[#48a4bb]">
                                &quot;Consequently, there is little understanding of best research practices and impact practices taking
                                place in various African contexts and what works or not.&quot;
                            </p>

                            <p>
                                It is in this context that the ARIN Network launched the ARIN Fellowship program which brings together
                                over 200 researchers from thirty-eight countries in Sub-Saharan Africa. The fellowship program consists
                                of a network of talented researchers and technocrats across Africa who have been undertaking research in
                                various fields including natural resource management, climate change, agriculture, forestry, energy,
                                water, and cities to leverage their knowledge and experiences in promoting research excellence and
                                impact pathways.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#48a4bb]" />
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Need help?</p>
                                    <p className="text-[#030f41] font-semibold">(+254) 20 2271000</p>
                                </div>
                            </div>
                            <Link href="/about">
                                <Button className="bg-[#48a4bb] hover:bg-[#3a8a9a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                                    LEARN MORE ABOUT US
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Core Values Style */}
                    <div className="bg-white rounded-2xl shadow-lg p-10">
                        <h2 className="text-3xl font-bold text-[#030f41] mb-8">Our Impact Network</h2>

                        <div className="space-y-8">
                            {/* Researchers */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                    <Users className="h-6 w-6 text-[#48a4bb]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#030f41] mb-2">200+ Researchers</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Talented researchers and technocrats across 38 Sub-Saharan African countries working in natural
                                        resource management, climate change, agriculture, forestry, energy, water, and cities.
                                    </p>
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                    <Target className="h-6 w-6 text-[#48a4bb]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#030f41] mb-2">Mission</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Identify and leverage evidence to flexibly and innovatively contribute to Africa&apos;s research
                                        transformation, policy analysis and capacity building.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                    <Eye className="h-6 w-6 text-[#48a4bb]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#030f41] mb-2">Vision</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        A future where scientific advancements are seamlessly integrated into public policy to address
                                        Africa&apos;s pressing development challenges.
                                    </p>
                                </div>
                            </div>

                            {/* Countries */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#48a4bb]/10 p-3 rounded-xl flex-shrink-0">
                                    <Globe className="h-6 w-6 text-[#48a4bb]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#030f41] mb-2">38 Countries</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Spanning across Sub-Saharan Africa, our network creates a platform for cross-border collaboration and knowledge exchange among researchers and policymakers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="bg-white rounded-2xl shadow-lg p-12">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                            LEADERSHIP TEAM
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#030f41]">Fellowship Leadership</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Leader 1 */}
                        <Card className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                            <div className="p-8">
                                <div className="relative w-32 h-40 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-200">
                                    <Image
                                        src="/img/Prof-scaled.jpg"
                                        alt="Dr. Joanes Atela"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#030f41] text-lg mb-1">Dr. Joanes Atela</h4>
                                    <p className="text-[#48a4bb] font-medium text-sm">Executive Director</p>
                                </div>
                            </div>
                        </Card>

                        {/* Leader 2 */}
                        <Card className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                            <div className="p-8">
                                <div className="relative w-32 h-40 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-200">
                                    <Image
                                        src="/img/Akinyi2.jpg"
                                        alt="Dr. Akinyi J. Eurallyah"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#030f41] text-lg mb-1">Dr. Akinyi J. Eurallyah</h4>
                                    <p className="text-[#48a4bb] font-medium text-sm">ARIN Fellowship Manager</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARINFellowshipAbout