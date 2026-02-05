"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    FileText,
    Users,
    Calendar,
    DollarSign,
    BookOpen,
    ArrowRight,
    Award,
    Target,
    Lightbulb,
    ExternalLink,
    CheckCircle,
    Clock,
    Zap,
    ChevronRight,
    Sparkles,
} from "lucide-react"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function MiniGrantsPage() {
    const [activeGrant, setActiveGrant] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("all")

    const grantExamples = [
        {
            title: "Accountable Adaptation Fellowship",
            date: "November 18, 2024",
            description:
                "Background The Accountable Adaptation Initiative is launching a mini-grants programme. The programme is open to early to mid-career researchers from…",
            id: "accountable-adaptation",
            status: "completed",
        },
        {
            title: "Learning Together to Advance Evidence and Equity in Policymaking for achieving the SDGs (LEEPS)",
            date: "August 8, 2024",
            description:
                "The Alliance for Evidence and Equity in Policy-making in Africa (AEEPA) is part of the Learning Together to Advance Evidence…",
            id: "leeps",
            status: "completed",
        },
        {
            title: "ARIN Governing SDGs Interactions Mini grants – Call for Applications- Readvertisement",
            date: "September 30, 2024",
            description:
                "A. About the Project Numerous governments, businesses, and civil society organisations aim to contribute to achieving the 17 Sustainable Development…",
            id: "sdgs-interactions",
            status: "active",
        },
        {
            title: "Leveraging Mathematical Sciences for Climate Resilience Solutions (Math4CCR): Mini-grant",
            date: "July 30, 2024",
            description:
                "The role of mathematical modelling and Artificial Intelligence (AI) is becoming increasingly crucial in strengthening climate information systems and predictions…",
            id: "math4ccr",
            status: "upcoming",
        },
        {
            title: "BioCAM Mini-grants",
            date: "July 30, 2024",
            description:
                "The relationship between climate change and biodiversity loss is profound. Climate change accelerates biodiversity decline: Rapid climate shifts challenge species...",
            id: "biocam",
            status: "upcoming",
        },
        {
            title: "Climate Finance Fellowship",
            date: "Coming Soon",
            description:
                "This fellowship aims to build capacity in climate finance mechanisms and support researchers in developing innovative financing solutions for climate adaptation and mitigation across Africa.",
            id: "climate-finance",
            status: "upcoming",
        },
        {
            title: "AI Fellowship",
            date: "Coming Soon",
            description:
                "The AI Fellowship program focuses on leveraging artificial intelligence and machine learning technologies to address critical development challenges across the African continent.",
            id: "ai-fellowship",
            status: "upcoming",
        },
    ]

    const getStatusConfig = (status) => {
        switch (status) {
            case "completed":
                return {
                    label: "Completed",
                    icon: CheckCircle,
                    color: "slate",
                    dotColor: "bg-slate-400",
                }
            case "active":
                return {
                    label: "Active",
                    icon: Zap,
                    color: "blue",
                    dotColor: "bg-blue-400",
                }
            case "upcoming":
                return {
                    label: "Upcoming",
                    icon: Clock,
                    color: "blue",
                    dotColor: "bg-blue-400",
                }
            default:
                return {
                    label: "Unknown",
                    icon: Calendar,
                    color: "gray",
                    dotColor: "bg-gray-400",
                }
        }
    }

    const handleGrantClick = (grantId) => {
        window.location.href = `/mini-grants/${grantId}`
    }

    const handleDocumentClick = () => {
        window.open(
            "https://www.arin-africa.org/wp-content/uploads/2024/05/GUIDEBOOK-ON-ARIN-FELLOWSHIP-MINI-GRANTS.pdf",
            "_blank",
        )
    }

    const categorizedGrants = {
        completed: grantExamples.filter((g) => g.status === "completed"),
        active: grantExamples.filter((g) => g.status === "active"),
        upcoming: grantExamples.filter((g) => g.status === "upcoming"),
    }

    const filteredGrants =
        selectedCategory === "all" ? grantExamples : grantExamples.filter((g) => g.status === selectedCategory)

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section - Clean Minimalist */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    <div className="relative max-w-6xl mx-auto px-6 py-20">
                        <Button
                            variant="ghost"
                            className="mb-8 text-white/60 hover:text-white hover:bg-white/5 border border-white/10"
                        >
                            ← Back to Home
                        </Button>

                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-medium text-blue-400">Science-Policy Mini-grants</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                ARIN Africa
                                <span className="block text-blue-400 mt-2">Fellowship Programs</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Fostering systematic and coordinated co-generation of evidence within varied African contexts through
                                small grants and mentorship programs.
                            </p>

                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                                <DollarSign className="w-5 h-5 text-blue-400" />
                                <div>
                                    <div className="text-sm text-slate-400">Grant Range</div>
                                    <div className="text-lg font-semibold">$2,000 - $5,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-16">
                    {/* ARIN Mini Grants Section */}
                    <section className="mb-24">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Award className="w-6 h-6 text-blue-600" />
                                <h2 className="text-3xl font-bold text-slate-900">ARIN Mini Grants</h2>
                            </div>
                            <p className="text-slate-600 text-lg">
                                Explore our current and upcoming funding opportunities for African researchers
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-6">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all ${selectedCategory === "all"
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                All ({grantExamples.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("active")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "active"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                                Active ({categorizedGrants.active.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("upcoming")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "upcoming"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <Clock className="w-4 h-4" />
                                Upcoming ({categorizedGrants.upcoming.length})
                            </button>
                            <button
                                onClick={() => setSelectedCategory("completed")}
                                className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedCategory === "completed"
                                    ? "bg-slate-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                <CheckCircle className="w-4 h-4" />
                                Completed ({categorizedGrants.completed.length})
                            </button>
                        </div>

                        {/* Grants Grid */}
                        <div className="space-y-4">
                            {filteredGrants.map((grant, index) => {
                                const statusConfig = getStatusConfig(grant.status)
                                const StatusIcon = statusConfig.icon

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleGrantClick(grant.id)}
                                        className="group cursor-pointer bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-${statusConfig.color}-100 text-${statusConfig.color}-700`}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full ${statusConfig.dotColor}`}></div>
                                                        {statusConfig.label}
                                                    </span>
                                                    <span className="text-sm text-slate-500 flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {grant.date}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {grant.title}
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed">{grant.description}</p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    {/* Background Section */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">Background and Rationale</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                            <p>
                                There is a broad consensus that an evidence-informed development agenda is essential for achieving
                                long-term, inclusive development growth in Africa. This is reflected in both Agenda 2063 and the
                                Science, Technology and Innovation Strategy for Africa (STISA) 2024. These frameworks call on African
                                countries to significantly increase their investment in research and development (R&D) by attaining at
                                least 1% of their gross domestic product (GDP). This investment is crucial for building Africa&apos;s
                                technical expertise, improving research infrastructure, fostering innovation and entrepreneurship, and
                                creating a policy environment that propels &ldquo;Africa&apos;s transition to an innovation-led and
                                evidence-informed knowledge-based economy&rdquo;.
                            </p>
                            <p>
                                Furthermore, a critical need exists for both evidence-based policymaking and the effective sharing of
                                this evidence across diverse African contexts, overcoming the bilingual divide that can be a barrier.
                                In response to this, recent decades have witnessed a surge in research and policy activities across
                                various sectors, particularly in health, energy, agriculture, science and technology, and more
                                recently, climate change. However, research efforts on the continent remain fragmented, with limited
                                capacity retention, opportunities for in-continent learning, and inadequate networking among
                                researchers, policymakers, and practitioners. Additionally, challenges persist in publishing research
                                and developing strong scientific leadership, as evidenced by the limited number of African-led
                                research outputs. Compounding these issues is that most African researchers struggle to secure
                                sufficient domestic and international funding to generate the empirically grounded evidence necessary
                                for practical policy decisions.
                            </p>
                            <p>
                                It is within this context that ARIN established the ARIN Africa Evidence-Informed Policy Fellowship
                                program. This program brings together fellows to collaborate on generating evidence and sharing
                                lessons learned across the continent. However, even fellows face challenges in securing opportunities
                                and funding to pursue demand-driven empirical research.
                            </p>
                            <p>
                                In recognition of the persistent funding constraints faced by many talented African scholars with
                                significant research potential, ARIN has established the ARIN Mini-grant and Mentorship Scheme. This
                                initiative directly addresses the dearth of opportunities and budgetary limitations hindering in-depth
                                contextual analyses across diverse African regions and countries.
                            </p>
                        </div>
                    </section>

                    {/* Purpose and Objectives Grid */}
                    <section className="mb-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Purpose */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-6 h-6 text-purple-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Purpose of the Mini-Grants</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                    ARIN is committed to fostering systematic and coordinated co-generation of evidence within varied
                                    African contexts. The ARIN Small Grant and Mentorship Scheme achieves this by providing small grants
                                    and facilitating mentorship among its beneficiaries. This program aims to guide researchers in
                                    collecting robust data and developing high-quality case studies. Ultimately, the goal is for these
                                    research outputs to be included in special issues or book volumes launched at the biennial ARIN Africa
                                    Research-Policy Fellows Assembly held towards the end of the year such as the one scheduled for
                                    November 2024 in Nairobi, Kenya.
                                </p>
                            </div>

                            {/* Objectives */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Lightbulb className="w-6 h-6 text-amber-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Specific Objectives</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="pl-4 border-l-2 border-blue-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            Strengthen Evidence-Based Policymaking in Africa
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            Improve understanding of the science-policy interface and develop national expertise in
                                            evidence-based policy.
                                        </p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-blue-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">Cultivate a Community of Evidence Leaders</h3>
                                        <p className="text-slate-600 text-sm">
                                            Build a cohort of African researchers and policymakers who champion evidence-based approaches.
                                        </p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-purple-500">
                                        <h3 className="font-semibold text-slate-900 mb-1">Enhance African Knowledge Production</h3>
                                        <p className="text-slate-600 text-sm">
                                            Generate African-led knowledge products that contribute to knowledge leadership and inform
                                            development agendas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Value and Activities */}
                    <section className="mb-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Value */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <DollarSign className="w-6 h-6 text-orange-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Value of the Grants</h2>
                                </div>
                                <div className="text-center py-8">
                                    <div className="text-5xl font-bold text-orange-600 mb-2">$2,000 - $5,000</div>
                                    <p className="text-slate-700">
                                        ARIN provides mini-grants of between USD2000 and USD5000 to the Fellows.
                                    </p>
                                </div>
                            </div>

                            {/* Activities */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">Activities</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Capacity Building</h3>
                                        <p className="text-slate-700 text-sm">
                                            Regular webinars and workshops equipping young African researchers with academic publishing
                                            skills through the Research Publishing Academy.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Publication Opportunities</h3>
                                        <p className="text-slate-700 text-sm">
                                            Co-publishing book series with dedicated editorial boards to increase visibility and impact of
                                            African research.
                                        </p>
                                    </div>
                                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                                        <h3 className="font-semibold text-slate-900 mb-2">Researcher Engagement</h3>
                                        <p className="text-slate-700 text-sm">
                                            Co-branded marketing strategies and interactive sessions to foster knowledge sharing and
                                            collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Support Section */}
                    <section className="mb-24">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-slate-900" />
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Support ARIN&apos;s Research-Policy Fellowship Program
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700">
                                <p>
                                    Various funding sources, including dedicated grant funding, private sector investment, and
                                    philanthropic contributions support the ARIN mini-grant program. We are very grateful to our donors
                                    and partners who have been supporting us.
                                </p>
                                <p>
                                    To adequately and effectively address the funding challenges faced by early career researchers in
                                    Africa, ARIN aims to have a mini-grants portfolio of at least USD 5,000,000. Therefore, to contribute
                                    financially to the ARIN Research-Policy Fellowship Program, please contact Amon Mtunji, ARIN&apos;s
                                    Finance Manager, at A.mtunji@arin-africa.org.
                                </p>
                                <div className="bg-white border border-blue-200 rounded-lg p-6 mt-6">
                                    <p className="text-slate-700">
                                        For more information about ARIN&apos;s mini grants see this{" "}
                                        <button
                                            onClick={handleDocumentClick}
                                            className="font-semibold text-blue-600 hover:text-blue-700 underline inline-flex items-center gap-1 transition-colors"
                                        >
                                            Document
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    )
}