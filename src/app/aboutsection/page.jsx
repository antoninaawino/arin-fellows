import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Users, Target, Eye } from "lucide-react"

const ARINFellowshipAbout = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#48a4bb] tracking-wider uppercase">MORE ABOUT US</h3>
                            <h1 className="text-4xl lg:text-5xl font-bold text-[#030f41] leading-tight">
                                Building Africa&apos;s Research Excellence Network
                            </h1>
                            <div className="w-16 h-1 bg-[#030f41] rounded"></div>
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Over the last decades, Africa has experienced intense research and policy activities in various sectors
                                especially health, agriculture, energy, science and technology, and lately climate change among others.
                                However, research in the continent remains uncoordinated, with little in-continent learning and poor
                                networking among researchers. The continent lacks impact networks – i.e. dedicated platforms for
                                bringing African researchers and policymakers to engage in periodic dialogue, learning, and capability
                                building towards creating research and policy impact.
                            </p>
                            <blockquote className="italic text-gray-500 border-l-4 border-[#48a4bb] pl-4 my-6">
                                &quot;Consequently, there is little understanding of best research practices and impact practices taking
                                place in various African contexts and what works or not.&quot;
                            </blockquote>
                            <p>
                                It is in this context that the ARIN Network launched the ARIN Fellowship program which brings together
                                over 200 researchers from thirty-eight countries in Sub-Saharan Africa. The fellowship program consists
                                of a network of talented researchers and technocrats across Africa who have been undertaking research in
                                various fields including natural resource management, climate change, agriculture, forestry, energy,
                                water, and cities to leverage their knowledge and experiences in promoting research excellence and
                                impact pathways.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
                            <div className="flex items-center gap-3 text-[#030f41]">
                                <Phone className="h-5 w-5" />
                                <div>
                                    <p className="text-sm font-medium">Need help?</p>
                                    <p className="text-[#030f41] font-semibold">(+254) 20 2271000</p>
                                </div>
                            </div>
                            <Link href="/about" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-[#48a4bb] hover:bg-[#9bc8ce] text-white px-16 py-6 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    LEARN MORE ABOUT US
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid gap-6">
                            <Card className="bg-[#030f41] text-white p-8 rounded-3xl overflow-hidden relative">
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <Users className="h-12 w-12 text-[#9bc8ce]" />
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white">200+</div>
                                            <div className="text-sm text-[#9bc8ce] font-medium">RESEARCHERS</div>
                                        </div>
                                    </div>
                                    <p className="text-[#9bc8ce] text-sm leading-relaxed">
                                        Talented researchers and technocrats across 38 Sub-Saharan African countries working in natural
                                        resource management, climate change, agriculture, forestry, energy, water, and cities.
                                    </p>
                                </div>
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#48a4bb] rounded-full opacity-30"></div>
                            </Card>
                            {/* Mission & Vision Cards */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Card className="bg-gradient-to-br from-[#48a4bb] to-[#9bc8ce] text-white p-6 rounded-2xl">
                                    <Target className="h-8 w-8 mb-4" />
                                    <h3 className="font-bold text-lg mb-3">MISSION</h3>
                                    <p className="text-sm leading-relaxed opacity-90">
                                        Identify and leverage evidence to flexibly and innovatively contribute to Africa&apos;s research
                                        transformation, policy analysis and capacity building.
                                    </p>
                                </Card>
                                <Card className="bg-gradient-to-br from-[#9bc8ce] to-[#48a4bb] text-white p-6 rounded-2xl">
                                    <Eye className="h-8 w-8 mb-4" />
                                    <h3 className="font-bold text-lg mb-3">VISION</h3>
                                    <p className="text-sm leading-relaxed opacity-90">
                                        A future where scientific advancements are seamlessly integrated into public policy to address
                                        Africa&apos;s pressing development challenges.
                                    </p>
                                </Card>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            38 Countries
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-sm font-semibold text-[#48a4bb] tracking-wider uppercase mb-2">LEADERSHIP TEAM</h3>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#030f41] mb-4">Fellowship Leadership</h2>
                        <div className="w-16 h-1 bg-[#48a4bb] rounded mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                            <div className="p-8">
                                <div className="relative w-40 h-48 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="/img/Prof-scaled.jpg"
                                        alt="Dr. Joanes Atela"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#030f41] text-xl mb-2">Dr. Joanes Atela</h4>
                                    <p className="text-[#48a4bb] font-medium text-base mb-4">Executive Director</p>
                                    <div className="w-12 h-0.5 bg-[#48a4bb] rounded mx-auto"></div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                            <div className="p-8">
                                <div className="relative w-40 h-48 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="/img/Akinyi2.jpg"
                                        alt="Dr. Akinyi J. Eurallyah"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#030f41] text-xl mb-2">Dr. Akinyi J. Eurallyah</h4>
                                    <p className="text-[#48a4bb] font-medium text-base mb-4">ARIN Fellowship Manager</p>
                                    <div className="w-12 h-0.5 bg-[#48a4bb] rounded mx-auto"></div>
                                </div>
                            </div>
                        </Card>

                        {/* <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                            <div className="p-8">
                                <div className="relative w-40 h-48 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="/img/edna.jpg"
                                        alt="Edna Kowenje"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-[#030f41] text-xl mb-2">Edna Kowenje</h4>
                                    <p className="text-[#48a4bb] font-medium text-base mb-4">ARIN Fellowship Coordinator</p>
                                    <div className="w-12 h-0.5 bg-[#48a4bb] rounded mx-auto"></div>
                                </div>
                            </div>
                        </Card> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARINFellowshipAbout