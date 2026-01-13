'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, ArrowRight, Award, Globe, Leaf, Sparkles } from "lucide-react"

export default function MultiFellowshipHero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <>
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#03164c] via-[#04205e] to-[#051b4a]">
                {/* Dynamic background effects - Simplified */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#48a4bb]/10 blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#48a4bb]/10 blur-[120px]"></div>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(72,164,187,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(72,164,187,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="relative z-20 container mx-auto px-6 py-16 min-h-screen flex items-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                        {/* Left Content Section */}
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="space-y-6">
                                {/* Badge */}
                                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-5 py-3 border border-white/20 backdrop-blur-sm">
                                    <Sparkles className="w-4 h-4 text-[#48a4bb]" />
                                    <p className="text-white text-sm font-semibold tracking-wide">
                                        Africa Research & Impact Network
                                    </p>
                                </div>

                                {/* Main Heading with gradient */}
                                <div>
                                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-2">
                                        Empowering
                                    </h1>
                                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#48a4bb] via-[#6bc4d8] to-[#48a4bb] bg-clip-text text-transparent">
                                        African Researchers
                                    </h1>
                                </div>

                                {/* Description */}
                                <p className="text-white/90 text-xl leading-relaxed max-w-xl">
                                    Discover our diverse community of fellows from SDG, ARIN, and Accountable Adaptation programs,
                                    driving transformative research across <span className="text-[#48a4bb] font-semibold">38+ Sub-Saharan African countries</span>.
                                </p>

                                {/* Stats Pills - Clean */}
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                                        <Globe className="w-5 h-5 text-blue-300" />
                                        <p className="text-white text-sm font-semibold">SDG Fellows</p>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                                        <Award className="w-5 h-5 text-purple-300" />
                                        <p className="text-white text-sm font-semibold">ARIN Fellows</p>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 transition-all duration-300 hover:bg-white/15">
                                        <Leaf className="w-5 h-5 text-green-300" />
                                        <p className="text-white text-sm font-semibold">Adaptation Fellows</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons - Clean */}
                            <div className="flex flex-wrap gap-4 pt-6">
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection('fellows-overview')}
                                    className="group bg-gradient-to-r from-[#48a4bb] to-[#3d92a6] hover:from-[#3d92a6] hover:to-[#48a4bb] text-white font-bold px-10 py-7 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    EXPLORE FELLOWS
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => scrollToSection('fellowship-activities')}
                                    className="border-2 border-white/30 text-white hover:bg-white hover:text-[#03164c] font-bold px-10 py-7 text-base rounded-xl transition-all duration-300 bg-white/5 cursor-pointer backdrop-blur-sm"
                                >
                                    View Activities
                                </Button>
                            </div>
                        </div>

                        {/* Right Image Section - Clean & Elegant */}
                        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative w-full max-w-[700px]">
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#48a4bb]/20 to-transparent rounded-[2rem] blur-3xl"></div>

                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(72,164,187,0.3)]">
                                    <img
                                        src="/img/fellowship-image.webp"
                                        alt="African Fellowship Network - SDG, ARIN & Adaptation Fellows"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>

                                {/* 200+ Badge - Simplified */}
                                <div className="absolute -top-6 -right-6 z-10">
                                    <div className="bg-gradient-to-br from-[#48a4bb] to-[#3d92a6] rounded-2xl px-8 py-5 shadow-xl">
                                        <div className="flex items-center space-x-3">
                                            <Users className="w-8 h-8 text-white" />
                                            <div className="text-white">
                                                <p className="text-4xl font-black leading-none">200+</p>
                                                <p className="text-xs font-bold uppercase tracking-wider mt-1">Fellows</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Countries Card - Clean */}
                <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
                    <Card className="bg-white border border-[#48a4bb]/20 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                        <CardContent className="p-8 text-center min-w-[180px]">
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-br from-[#48a4bb] to-[#3d92a6] rounded-full p-3">
                                    <BookOpen className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div className="text-[#03164c]">
                                <p className="text-xs font-bold mb-2 uppercase tracking-wider opacity-60">Fellowship Programs</p>
                                <p className="text-xs opacity-70 mb-2">Spanning Across</p>
                                <p className="text-6xl font-black mb-2 bg-gradient-to-br from-[#48a4bb] to-[#3d92a6] bg-clip-text text-transparent">38+</p>
                                <p className="text-sm font-bold uppercase tracking-wide">Countries</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}