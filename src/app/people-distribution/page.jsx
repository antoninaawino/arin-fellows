"use client";
import dynamic from 'next/dynamic';
import peopleData from '../../../public/pdfs/fellows.json';
import { Users, Globe, Award, TrendingUp, MapPin, Activity } from 'lucide-react';
import { useMemo } from 'react';

// Dynamically import the map component (no SSR for Leaflet)
const AfricaMap = dynamic(() => import('./Africaleafletmap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#1a4b8b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading interactive map...</p>
            </div>
        </div>
    ),
});

// Main page component
export default function PeopleDistributionPage() {
    // Regional/non-country entries to filter out
    const REGIONAL_ENTRIES = [
        'East Africa', 'West Africa', 'Southern Africa', 'North Africa', 'Central Africa',
        'Diaspora', 'Germany', 'Germany/Nigeria', 'New Jersey', 'United Kingdom'
    ];

    // Calculate statistics
    const statistics = useMemo(() => {
        let totalFellows = 0;
        let totalCountries = 0;
        let maxFellowsInCountry = 0;
        let topCountry = '';
        const countryData = [];

        Object.entries(peopleData).forEach(([country, people]) => {
            if (REGIONAL_ENTRIES.includes(country)) return;

            const count = Array.isArray(people) ? people.length : 0;
            if (count > 0) {
                totalFellows += count;
                totalCountries++;
                countryData.push({ country, count });

                if (count > maxFellowsInCountry) {
                    maxFellowsInCountry = count;
                    topCountry = country;
                }
            }
        });

        // Sort countries by fellow count
        countryData.sort((a, b) => b.count - a.count);
        const topCountries = countryData.slice(0, 5);

        return {
            totalFellows,
            totalCountries,
            topCountry,
            maxFellowsInCountry,
            topCountries,
            averageFellowsPerCountry: totalCountries > 0 ? Math.round(totalFellows / totalCountries) : 0
        };
    }, []);

    const statCards = [
        {
            icon: Users,
            value: statistics.totalFellows,
            label: 'Total Fellows',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            icon: Globe,
            value: statistics.totalCountries,
            label: 'Countries Covered',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            icon: Award,
            value: statistics.topCountry,
            label: 'Most Active Country',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            isText: true
        },
        {
            icon: TrendingUp,
            value: statistics.averageFellowsPerCountry,
            label: 'Avg Fellows/Country',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a4b8b]/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2.5 mb-6 border border-white/20 shadow-lg">
                        <MapPin className="w-4 h-4 text-[#1a4b8b]" />
                        <span className="text-[#1a4b8b] text-sm font-semibold tracking-wide">
                            GEOGRAPHIC DISTRIBUTION
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-[#1a4b8b] via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Fellows Across Africa
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore the distribution of our {statistics.totalFellows}+ fellows across {statistics.totalCountries}+ African countries
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Column - Statistics Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Statistics Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {statCards.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-500`}>
                                            <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <p className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.isText ? 'text-xl lg:text-2xl' : ''} bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </p>

                                    {/* Label */}
                                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Top Countries Ranking */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity className="w-5 h-5 text-[#1a4b8b]" />
                                <h3 className="text-lg font-bold text-gray-900">Top 5 Countries</h3>
                            </div>

                            <div className="space-y-3">
                                {statistics.topCountries.map((country, index) => {
                                    const maxCount = statistics.topCountries[0].count;
                                    const percentage = (country.count / maxCount) * 100;

                                    return (
                                        <div key={index} className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${index === 0 ? 'bg-yellow-100 text-yellow-700' :
                                                        index === 1 ? 'bg-gray-100 text-gray-700' :
                                                            index === 2 ? 'bg-orange-100 text-orange-700' :
                                                                'bg-blue-50 text-blue-600'
                                                        }`}>
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1a4b8b] transition-colors">
                                                        {country.country}
                                                    </span>
                                                </div>
                                                <span className="text-sm font-bold text-[#1a4b8b]">
                                                    {country.count}
                                                </span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                                                        index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                                                            index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                                                                'bg-gradient-to-r from-blue-400 to-blue-600'
                                                        }`}
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gradient-to-br from-[#1a4b8b] to-[#2563eb] rounded-2xl p-6 shadow-lg text-white">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" />
                                Network Insights
                            </h3>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-sm text-white/80">Coverage</span>
                                    <span className="font-bold text-lg">{Math.round((statistics.totalCountries / 54) * 100)}%</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-sm text-white/80">Largest Hub</span>
                                    <span className="font-bold">{statistics.maxFellowsInCountry}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-white/80">Regional Reach</span>
                                    <span className="font-bold">Pan-African</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div className="lg:col-span-8">
                        <div className="relative">
                            {/* Glow Effect Behind Map */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#1a4b8b]/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60"></div>

                            {/* Map Container */}
                            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                                {/* Map Header */}
                                <div className="bg-gradient-to-r from-[#1a4b8b] to-[#2563eb] p-4 lg:p-6">
                                    <div className="flex items-center justify-between flex-wrap gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white/20 p-2 rounded-lg">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl lg:text-2xl font-bold text-white">Interactive Distribution Map</h2>
                                                <p className="text-white/80 text-sm">Click on countries to view details</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-white text-sm font-medium">Live Data</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="relative" style={{ height: '700px' }}>
                                    <AfricaMap peopleData={peopleData} />
                                </div>
                            </div>

                            {/* Floating Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-2xl rotate-12 blur-sm animate-float"></div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-float-delayed"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(12deg); }
                    50% { transform: translateY(-20px) rotate(17deg); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-5deg); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                }
            `}</style>
        </main>
    );
}