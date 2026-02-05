'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Users, ExternalLink, ArrowRight, Clock, BookOpen, Globe, X, Filter } from 'lucide-react';
import ARINNavbar from '@/components/navbar/navbar';
import ArinFellowsFooter from '@/components/footer/footer';

export default function FridayReviewsPage() {
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const reviews = [
        {
            id: 1,
            title: "Clean energy access in Africa amidst the COVID-19 pandemic by Dr. Joanes Atela",
            date: "22nd May, 2020",
            month: "May",
            year: "2020",
            description: "This review focused on energy transition in East Africa Countries (EAC) and associated impacts of COVID-19 Pandemic. Studies shows that even though EAC has made progress, the region still experience key challenges including incoherent policy frameworks, low generation of power, uncoordinated partnerships and investment, and limited access to reliable and disaggregated data on energy linkage with socio-economic development. Brief will be shared soon.",
            briefLink: null,
            blogLink: null,
            category: "Energy"
        },
        {
            id: 2,
            title: "Partha Dasgupta Review of the Economics of Biodiversity: Interim Report",
            date: "15th May, 2020",
            month: "May",
            year: "2020",
            description: "This interim report sets out the scientific and economic concepts and frameworks underpinning the review. The scientific framework of the report, in particular captures the link between nature, human health, and social well-being and uses the Covid-19 pandemic to help ground this. The final Report will be published in advance of the fifteenth meeting of the Conference of the Parties (COP15) to the Convention on Biological Diversity (CBD), which is due to be held in Kunming, China. Find the report here.",
            briefLink: "#",
            blogLink: null,
            category: "Biodiversity"
        },
        {
            id: 3,
            title: "The Role of Community Based Organization (CBOs) in Disaster Risk Reduction (DRR) in Informal Settlements in Nairobi. Discussion paper authored by Joanes Atela,Asenath Maobe and Linet Mwirigi",
            date: "27th November, 2020",
            month: "November",
            year: "2020",
            description: "The aim of this study is to establish the position of CBOs in DRR and informing policy changes in the government. To answer the question of whether the presence of CBOs in the informal settlements in any way makes life better and easier for the residents and Secondly, to establish the role they play in the disaster policies in the county in the past, and if not, to make recommendations on how to remedy that.",
            briefLink: null,
            blogLink: null,
            category: "Disaster Risk"
        },
        {
            id: 4,
            title: "Transformative Pathways to Sustainability: Learning Across Disciplines, Cultures and Contexts by Victoria Chengo et. al",
            date: "9th October, 2020",
            month: "October",
            year: "2020",
            description: "This is a book has been put together by the 'Pathways' Transformative Knowledge Network (TKN), to which Africa Sustainability Hub(ASH) is a part of. This chapter provides insights from the work that ASH undertook under this project that was funded by the International Science Council (ISC) through the STEPS Centre. This research focused on enabling sustainable and equitable access to Solar Home Systems (SHS) for all via mobile-based payment systems, including those who cannot participate in micro-financing schemes.",
            briefLink: null,
            blogLink: null,
            category: "Sustainability"
        },
        {
            id: 5,
            title: "Strengthening Non-State Actors in Climate Action during Post-COVID19 State by Charles Tonui et.al",
            date: "2020",
            month: "Unknown",
            year: "2020",
            description: "This paper reviewed non-state actor driven climate actions & response to COVID-19 towards identifying synergies for post-2020 climate & post-COVID-19 period in the developing countries. The objective of the paper was to assess impact of COVID-19 on the non-state climate actors and actions in developing countries; and to identify lessons for synergies between climate actions and COVID-19 response for post-2020 climate & post-COVID-19 period.",
            briefLink: null,
            blogLink: null,
            category: "Climate Action"
        },
        {
            id: 6,
            title: "The role of subnational governments in promoting people-centred COVID-19 response – highlights for Africa by Charles Tonui,Joanes Atela",
            date: "17th April, 2020",
            month: "April",
            year: "2020",
            description: "The review focused on how the continent's policy setting interplays the COVID-19 experience and more specifically the role of subnational governments in promoting people-centred COVID-19 response, highlighting priority lessons for emergency phase and post-pandemic reconstruction. Find the review brief here.",
            briefLink: "#",
            blogLink: null,
            category: "Governance"
        },
        {
            id: 7,
            title: "How is COVID-19 shaping Africa's knowledge systems? by Joanes Atela and Nora Ndege",
            date: "8th May, 2020",
            month: "May",
            year: "2020",
            description: "This paper highlights some lessons that Africa can learn from the COVID-19 experience in the context of strengthening the continent's ST&I systems. Find theBrief and blog here.",
            briefLink: "#",
            blogLink: "#",
            category: "Knowledge Systems"
        },
        {
            id: 8,
            title: "'Last Mile' Initiatives: Building Community Networks to Respond to the COVID-19 Pandemic in Africa by Kennedy Mbeva, Victoria Chengo, and Joanes Atela",
            date: "2020",
            month: "Unknown",
            year: "2020",
            description: "This review was on community networks as part of non-state actors who have notably played a critical role in supporting livelihoods and businesses especially the poor in Africa. It looked at the role these networks have played in response to COVID-19. Find the review brief here and blog.",
            briefLink: "#",
            blogLink: "#",
            category: "Community Networks"
        },
        {
            id: 9,
            title: "Disaster Risk management in the context of the COVID-19 pandemic in Africa by Nairobi Hub Multihazard team",
            date: "2020",
            month: "Unknown",
            year: "2020",
            description: "This brief provides some key highlights on the current disaster risk management landscape in Africa, and the lessons that can be learnt from the COVID-19 pandemic response that could enable a shift from reactive emergency response to a more integrated and proactive disaster risk preparedness and management. Supporting evidence and insights have been adopted from the Tomorrow's Cities Nairobi Risk Hub (https://www.tomorrowscities.org/city/nairobi) supported by the UK' Global Challenge Research Fund (GCRF). Find the Review brief and Blog here.",
            briefLink: "#",
            blogLink: "#",
            category: "Disaster Management"
        },
        {
            id: 10,
            title: "Lessons for Africa's Research in the face of COVID-19",
            date: "2020",
            month: "Unknown",
            year: "2020",
            description: "This paper focused on how research and researchers in Africa can contextually support COVID-19 response efforts, including the implications on the post-pandemic research landscape. Review brief and Blog",
            briefLink: "#",
            blogLink: "#",
            category: "Research"
        },
        {
            id: 11,
            title: "Policy trade-offs and synergies for low emission dairy development (LEDD) in Kenya by Joel Onyango et al",
            date: "2020",
            month: "Unknown",
            year: "2020",
            description: "This paper evaluates policy intervention trade-offs and synergies in low emission dairy development. The paper focuses on the dairy subsector for three reasons: firstly, the dairy subsector is responsible for significant contribution to GHG emissions (Gerssen-Gondelach et al., 2017; Vellinga et al., 2011) and recommending gaps in policy interventions that would promote low emission pathways is significant in climate mitigation. Secondly, the tripod puzzle in developing the dairy subsector requires climate sensitivity, that promote reduced emission, while encouraging increased productivity and livelihood benefits (Lal, 2016). The third reason is the multiple policy implementation levels with interest in low emission dairy development.",
            briefLink: null,
            blogLink: null,
            category: "Agriculture"
        },
        {
            id: 12,
            title: "Energy transitions and gender gaps in energy access by Benjamin McIntosh-Michaelis (MSc in International Development at the University of Edinburgh, UK)",
            date: "26th June, 2020",
            month: "June",
            year: "2020",
            description: "Energy transitions and gender gaps in energy access examines the interactions between gender, energy access, and transitions to green and renewable energy. Through a case study of Pundo Village, Kisumu County, the project assesses how gender gaps are influenced by, and have influence on, energy transitions.",
            briefLink: null,
            blogLink: null,
            category: "Energy & Gender"
        },
        {
            id: 13,
            title: "Imaginaries of Energy Transformation in Kenya- by Anugrah Saputra (MSc in International Development at the University of Edinburgh, UK)",
            date: "26th June, 2020",
            month: "June",
            year: "2020",
            description: "The aim of the research was to map out energy pathways in the country. Interviews with energy experts within the field using the Q-Method were undertaken in order to best compare the different opinions on the energy mix currently used in Kenya. This includes energy sources used to power the national grid as well as alternative energy sources, both renewable and non-renewable.",
            briefLink: null,
            blogLink: null,
            category: "Energy Transformation"
        },
        {
            id: 14,
            title: "Fire Risk Assessment: Review of the Current State and Justifying Applicable Methodology for Mukuru by Haron Akala,STEVENS Sam,David Rush, and Tom Randa",
            date: "28th September, 2020",
            month: "September",
            year: "2020",
            description: "This paper aims to highlight the current state of research in Nairobi on Fire, the existing methodologies used and knowledge gaps therein, and to justify fire risk assessment models that might be applicable to the city through a literature review.",
            briefLink: null,
            blogLink: null,
            category: "Fire Risk"
        }
    ];

    // Get unique years, months, and categories
    const uniqueYears = useMemo(() => {
        const years = [...new Set(reviews.map(r => r.year))].sort((a, b) => b.localeCompare(a));
        return years;
    }, [reviews]);

    const uniqueMonths = useMemo(() => {
        const months = [...new Set(reviews.map(r => r.month))].filter(m => m !== 'Unknown');
        const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
    }, [reviews]);

    const uniqueCategories = useMemo(() => {
        const categories = [...new Set(reviews.map(r => r.category))].sort();
        return categories;
    }, [reviews]);

    // Filter reviews
    const filteredReviews = useMemo(() => {
        return reviews.filter(review => {
            const yearMatch = selectedYear === 'all' || review.year === selectedYear;
            const monthMatch = selectedMonth === 'all' || review.month === selectedMonth;
            const categoryMatch = selectedCategory === 'all' || review.category === selectedCategory;
            return yearMatch && monthMatch && categoryMatch;
        });
    }, [selectedYear, selectedMonth, selectedCategory, reviews]);

    const getCategoryColor = (category) => {
        const colors = {
            'Energy': 'from-yellow-500 to-orange-500',
            'Biodiversity': 'from-green-500 to-teal-500',
            'Disaster Risk': 'from-red-500 to-pink-500',
            'Sustainability': 'from-blue-500 to-indigo-500',
            'Climate Action': 'from-emerald-500 to-cyan-500',
            'Governance': 'from-purple-500 to-violet-500',
            'Knowledge Systems': 'from-indigo-500 to-purple-500',
            'Community Networks': 'from-cyan-500 to-blue-500',
            'Disaster Management': 'from-orange-500 to-red-500',
            'Research': 'from-teal-500 to-green-500',
            'Agriculture': 'from-green-600 to-emerald-600',
            'Energy & Gender': 'from-pink-500 to-rose-500',
            'Energy Transformation': 'from-amber-500 to-yellow-500',
            'Fire Risk': 'from-red-600 to-orange-600'
        };
        return colors[category] || 'from-gray-500 to-slate-500';
    };

    const clearFilters = () => {
        setSelectedYear('all');
        setSelectedMonth('all');
        setSelectedCategory('all');
    };

    const hasActiveFilters = selectedYear !== 'all' || selectedMonth !== 'all' || selectedCategory !== 'all';

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
                <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-teal-400/20"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
                        </div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2">
                                ← Back to Home
                            </Button>

                            <div className="mb-8">
                                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        Friday Reviews
                                    </span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    Weekly and monthly research reviews where African scholars and policy makers share their research findings and outputs with reviewers and peers
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Calendar className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Weekly & Monthly</div>
                                        <div className="text-sm text-white/70">Reviews</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Users className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Virtual Platform</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Globe className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">African Focus</div>
                                        <div className="text-sm text-white/70">Research & Policy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area with Sidebar */}
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filter Panel */}
                        <aside className={`lg:sticky lg:top-24 lg:self-start transition-all duration-300 ${sidebarOpen ? 'lg:w-80' : 'lg:w-16'}`}>
                            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                                {/* Sidebar Header */}
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 flex items-center justify-between">
                                    <div className={`flex items-center ${!sidebarOpen && 'lg:hidden'}`}>
                                        <Filter className="w-6 h-6 text-white mr-3" />
                                        <h3 className="text-xl font-bold text-white">Filters</h3>
                                    </div>
                                    <button
                                        onClick={() => setSidebarOpen(!sidebarOpen)}
                                        className="hidden lg:block text-white hover:bg-white/20 p-2 rounded-lg transition-all"
                                    >
                                        {sidebarOpen ? '←' : '→'}
                                    </button>
                                </div>

                                {/* Sidebar Content */}
                                <div className={`p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto ${!sidebarOpen && 'lg:hidden'}`}>
                                    {/* Clear All Button */}
                                    {hasActiveFilters && (
                                        <button
                                            onClick={clearFilters}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-semibold transition-all"
                                        >
                                            <X className="w-4 h-4" />
                                            Clear All Filters
                                        </button>
                                    )}

                                    {/* Results Count */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                                        <p className="text-center text-sm text-gray-700">
                                            Showing <span className="font-bold text-indigo-600 text-lg">{filteredReviews.length}</span> of <span className="font-bold">{reviews.length}</span>
                                        </p>
                                    </div>

                                    {/* Year Filter */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                                            Year
                                        </h4>
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setSelectedYear('all')}
                                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${selectedYear === 'all'
                                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                All Years
                                            </button>
                                            {uniqueYears.map(year => (
                                                <button
                                                    key={year}
                                                    onClick={() => setSelectedYear(year)}
                                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${selectedYear === year
                                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {year}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Month Filter */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                            Month
                                        </h4>
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setSelectedMonth('all')}
                                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${selectedMonth === 'all'
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                All Months
                                            </button>
                                            {uniqueMonths.map(month => (
                                                <button
                                                    key={month}
                                                    onClick={() => setSelectedMonth(month)}
                                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${selectedMonth === month
                                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {month}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Category Filter */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                                            <FileText className="w-4 h-4 mr-2 text-teal-600" />
                                            Category
                                        </h4>
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setSelectedCategory('all')}
                                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${selectedCategory === 'all'
                                                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                All Categories
                                            </button>
                                            {uniqueCategories.map(category => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all text-sm ${selectedCategory === category
                                                        ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Collapsed Sidebar Icon */}
                                {!sidebarOpen && (
                                    <div className="hidden lg:flex flex-col items-center py-6 space-y-4">
                                        <Filter className="w-6 h-6 text-indigo-600" />
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 space-y-16">
                            {/* About Section */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">About Friday Reviews</h2>
                                </div>
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        The Africa Research and Impact Network (ARIN) organizes weekly and monthly research reviews where African scholars and policy makers share their research findings and outputs with reviewers and peers. Through this platform researchers have access to peer learning that enable them to understand the state of research gaps and needs. The reviews are carried out virtually.
                                    </p>
                                </div>
                            </div>

                            {/* Expected Outputs Section */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Expected outputs and dissemination</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                                        <Clock className="w-10 h-10 text-blue-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Weekly news briefs</h3>
                                        <p className="text-sm text-gray-600">highlighting insights from weekly ARIN reviews</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
                                        <FileText className="w-10 h-10 text-purple-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Short video clips</h3>
                                        <p className="text-sm text-gray-600">on insights</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200/50">
                                        <BookOpen className="w-10 h-10 text-green-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Monthly policy briefs</h3>
                                        <p className="text-sm text-gray-600">consolidating insights</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
                                        <Users className="w-10 h-10 text-orange-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Monthly policy dialogues</h3>
                                        <p className="text-sm text-gray-600">between researchers and policy makers</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200/50 md:col-span-2">
                                        <Globe className="w-10 h-10 text-cyan-600 mb-3" />
                                        <h3 className="font-semibold text-gray-800 mb-2">Interactive information platform/repository</h3>
                                        <p className="text-sm text-gray-600">Comprehensive resource hub for research outputs</p>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                            <Calendar className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-800">
                                            {hasActiveFilters ? 'Filtered Reviews' : 'Reviews Archive'}
                                        </h2>
                                    </div>
                                </div>

                                {filteredReviews.length === 0 ? (
                                    <div className="text-center py-16">
                                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-600 mb-2">No reviews found</h3>
                                        <p className="text-gray-500 mb-6">Try adjusting your filters to see more results</p>
                                        <Button
                                            onClick={clearFilters}
                                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 px-8 py-3 rounded-full"
                                        >
                                            <X className="w-4 h-4 mr-2" />
                                            Clear All Filters
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        {filteredReviews.map((review, index) => (
                                            <div
                                                key={review.id}
                                                className="bg-gradient-to-r from-white to-gray-50/50 rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                                            >
                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${getCategoryColor(review.category)}`}>
                                                                {review.category}
                                                            </span>
                                                            <div className="flex items-center text-gray-500 text-sm">
                                                                <Calendar className="w-4 h-4 mr-2" />
                                                                Reviewed on {review.date}
                                                            </div>
                                                        </div>

                                                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
                                                            {index + 1}. {review.title}
                                                        </h3>

                                                        <p className="text-gray-700 leading-relaxed mb-6">
                                                            {review.description}
                                                        </p>

                                                        <div className="flex flex-wrap gap-4">
                                                            {review.briefLink && (
                                                                <Button
                                                                    variant="outline"
                                                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                                                                    onClick={() => window.open(review.briefLink, '_blank')}
                                                                >
                                                                    <FileText className="w-4 h-4 mr-2" />
                                                                    Review Brief
                                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                                </Button>
                                                            )}
                                                            {review.blogLink && (
                                                                <Button
                                                                    variant="outline"
                                                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                                                                    onClick={() => window.open(review.blogLink, '_blank')}
                                                                >
                                                                    <BookOpen className="w-4 h-4 mr-2" />
                                                                    Blog
                                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-12 text-center">
                                    <Button
                                        onClick={() => window.location.href = '/briefs'}
                                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 px-8 py-4 text-lg rounded-full"
                                    >
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        More Briefs
                                    </Button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    );
}