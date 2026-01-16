"use client"

import { useState, useMemo, useEffect } from "react"
import { Search, X, MapPin, BookOpen, Sparkles, Users, Globe } from "lucide-react"
import { sdgFellows } from "../../../../data/fellows/sdg-fellows"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

function FellowCard({ fellow, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 50)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <div
            className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            onClick={() => onClick(fellow)}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>

            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {fellow.country && (
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-xs font-semibold text-gray-700">{fellow.country}</span>
                        </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <h3 className="text-white text-2xl font-bold mb-1 drop-shadow-lg">
                            {fellow.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow">
                            {fellow.title}
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-95 transition-all duration-500 z-30 flex flex-col items-center justify-center p-6 text-center">
                    <BookOpen className="w-12 h-12 text-white mb-4 animate-bounce" />
                    <p className="text-white font-bold text-lg mb-2">View Full Biography</p>
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">{fellow.bio.substring(0, 120)}...</p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                        <span>Read More</span>
                        <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">→</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FellowDetailModal({ fellow, isOpen, onClose }) {
    if (!isOpen || !fellow) return null

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                    <img
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-full h-full object-cover"
                    />

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                        {fellow.country && (
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-5 h-5 text-white" />
                                <span className="text-white/90 font-medium">{fellow.country}</span>
                            </div>
                        )}
                        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                            {fellow.name}
                        </h2>
                        <p className="text-xl text-white/95 drop-shadow">
                            {fellow.title}
                        </p>
                    </div>
                </div>

                <div className="p-8 overflow-y-auto max-h-96">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-gray-800">Biography</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {fellow.bio}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function SDGFellowsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFellow, setSelectedFellow] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setIsVisible(true)

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleCardClick = (fellow) => {
        setSelectedFellow(fellow)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedFellow(null)
    }

    const filteredFellows = useMemo(() => {
        if (!searchQuery) return sdgFellows
        const query = searchQuery.toLowerCase()
        return sdgFellows.filter(
            (fellow) =>
                fellow.name.toLowerCase().includes(query) ||
                (fellow.country && fellow.country.toLowerCase().includes(query)) ||
                (fellow.title && fellow.title.toLowerCase().includes(query)) ||
                fellow.bio.toLowerCase().includes(query)
        )
    }, [searchQuery])

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
                        style={{
                            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                        style={{
                            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                </div>

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2.5 mb-6 border border-gray-200 shadow-lg">
                                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                                <span className="text-gray-700 text-sm font-semibold tracking-wide">
                                    SDG Fellows Program
                                </span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    SDG Fellows
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 font-light">
                                Contributing to <span className="font-bold text-blue-600">Sustainable Development Goals</span> across various sectors and communities
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-2xl font-bold text-gray-800">{sdgFellows.length}</div>
                                        <div className="text-xs text-gray-500">Active Fellows</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-2xl font-bold text-gray-800">{new Set(sdgFellows.filter(f => f.country).map(f => f.country)).size}</div>
                                        <div className="text-xs text-gray-500">Countries</div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                    <input
                                        type="text"
                                        placeholder="Search by name, country, or expertise..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-14 pr-14 py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-base"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                                {searchQuery && (
                                    <p className="mt-3 text-gray-600 text-sm">
                                        Found <span className="font-bold text-blue-600">{filteredFellows.length}</span> {filteredFellows.length === 1 ? 'fellow' : 'fellows'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {filteredFellows.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredFellows.map((fellow, index) => (
                                <FellowCard
                                    key={fellow.id}
                                    fellow={fellow}
                                    onClick={handleCardClick}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-xl">
                                <Search className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">No Fellows Found</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Try adjusting your search to find what you&apos;re looking for
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

                <FellowDetailModal fellow={selectedFellow} isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>

            <ArinFellowsFooter />


        </>
    )
}