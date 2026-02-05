"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Users, Target, Eye, Globe, X, Linkedin, Mail } from "lucide-react"

const ARINFellowshipAbout = () => {
    const [selectedMember, setSelectedMember] = useState(null)

    const leadershipTeam = [
        {
            name: "Dr. Joanes Atela",
            position: "Executive Director",
            image: "/img/Prof-scaled.jpg",
            bio: "Dr. Joanes Atela is an accomplished executive with over 15 years of experience in research and providing technical support to African governments in natural resource management, climate change mitigation and adaptation, and knowledge management. Currently serving as the Founder and Executive Director of the Africa Research and Impact Network (ARIN), he excels in developing strong evidence-based actions and strategies that are adaptable and well linked to national, regional, and international climate change initiatives. Joanes previously served as the Director Partnerships and Impact and the Head of the Climate Resilient Economies Programme at the African Centre for Technology Studies(ACTS) to become one of the best in the world, ranking third globally and the best in Africa according to the 2016 ICCG rankings based on research and policy work.He has been extensively involved in academia and research, serving as an Associate at the Institute of Climate Change and Adaptation(ICCA), University of Nairobi, and as a Research Fellow at the World Agroforestry Centre(ICRAF) and the United Nations University. Joanes has published widely in international journals, books, media and blogs focusing on resilience, knowledge systems as well as international politics with over 1000 citations on Google Scholar.He has successfully led the design and implementation of numerous funded projects.He played a pivotal role in synthesizing key community- based adaptation initiatives across the world which provided significant evidence towards the establishment of the Locally Led Adaptation Agenda within the global climate action arena. Joanes is particularly passionate about making science work for the local vulnerable communities.He has particular interest in strengthening the Science - Policy Interface in Africa.He founded the Grassroot Impact Centre - an initiative operating and empowering local communities including girls, youth, women with knowledge on resilience and innovation and seeks to develop models in which research can better align and support the needs of local communities. At the strategic level, Joanes is a member of several high - level technical boards.He is the Lead Expert in the development of the African Union Green Innovation Framework, which guides member states in accelerating green growth actions; the Lead expert for developing the First Kenya’s Innovation Outlook Framework and a member of the Strategic Advisory Group for the UK Research and Innovation Fund(UKRI).Joanes also served as a Scientific Advisory Panel Member of Stockholm at 50 + and Advisory Committee Member to the Resilience Evidence Forum alongside serving in several global Advisory Committee.He has won various awards including the Young Scientist Ward by the European Meteorological Society, the Exceptional Achievement Delegate in the Model United Nations Forum among others.Dr.Atela holds a Ph.D.in Environment and Development from the University of Leeds, United Kingdom, MSC in Natural Resource Management from Bonn University Germany(First Class) and BSc in Environmental Science, Maseno University - Kenya(First Class Honours).",
            email: "j.atela@arin-africa.org",
            linkedin: "#",
        },
        {
            name: "Dr. Akinyi J. Eurallyah",
            position: "ARIN Fellowship Manager",
            image: "/img/Akinyi2.jpg",
            bio: "Eurallyah Akinyi holds the position of Fellowship Manager at ARIN. Akinyi is also an Advocate of the High Court of Kenya. Her expertise lies at the intersection of sovereign financing, climate change, sustainable development, global economic governance, international trade and investment, public-private partnerships, business and human rights, and public policy.Akinyi's educational background includes an LL.M.in International Trade and Investment Laws from the University of Pretoria, South Africa, a Post- graduate diploma in Laws from the Kenya School of Law, and an LL.B.from Moi University, Kenya.Currently, she is pursuing her Ph.D.in Law at Dalhousie University, Canada.Prior to her role at ARIN, Akinyi held various positions at esteemed organizations such as the United Nations Economic Commission for Africa(UNECA), NatureFinance(Sustainability - linked Sovereign Debt Hub), Africa Sovereign Debt Justice Network, Trade Law Centre, and the Office of the Special Envoy on International Trade & Investment of the AfCFTA at the Canada - Africa Chamber of Business.  Akinyi's expertise extends to coalition - building with the public, governments, and companies, as well as analyzing and contributing to various public policy processes related to global economic and environmental governance.She has conducted extensive research and published on topics including sustainable development, climate change, international trade and investments, law and governance of international financial architecture, sovereign debt, global tax, global politics and democracy, as well as business and human rights.",
        },
    ]

    const supportTeam = [
        {
            name: "Dr. Antoine Faye (PhD)",
            position: "Focal point for Francophone",
            image: "/img/faye.webp",
            bio: " Dr. Antoine Faye is the focal point for Francophone. He is an Independent Consultant with tested expertise in Public Policy Analysis while specializing in Climate Change Economics. At mid-career as a Budget and Fiscal Analyst within the US Diplomatic Mission in Dakar Senegal, Antoine decided in 2000, to undertake a career change when he relocated in the United States of America.To enhance his academic curriculum Antoine pursued a well sought interdisciplinary Degree named the CUNY/ BA at the graduate center of the City University of New York.With that valuable credential, Antoine has been admitted to the renowned School of Public and International Affairs –SIPA of Columbia University.in New York to obtain a Master in International Affairs –Economic Political Development / Management.Upon his return in Senegal in 2011, Antoine was an Advisor to the former Ministry of Energy Renewable to help that department to approach with much more rigor the opportunities available, both multilaterally and bilaterally and that the global concerns about tackling climate change has put in place through that a range of initiatives and funding mechanisms.  Since 2012, Antoine has used his professional skills to help organizations, institutions and governments to define and plan for implementation and execution of programs and projects.He was, successively, the expert in renewable energy financing of the project CEADIR(Climate Economic Analysis or Development, Investment & Resilience) of USAID, the Regional Coordinator for West Africa, of the Regional Initiative for Investments in Clean Energies(RCEII; and the Chief Resilience Officer - CRO of the city of Dakar in the context of the city’s admission to the network of 100 Resilient Cities initiated by the Rockefeller Foundation.Also, as a member of the National Committee on Climate Change(COMNACC) Senegal; Antoine plays a big role in the advisory group experts that is helping the government of Senegal to reflect on all issues relating to climate change.",
        },
        {
            name: "Dr Adama SOW EP BADJI",
            position: "Francophone Focal Point",
            image: "/img/adama.webp",
            bio: "Adama SOW BADJI est Maître de Conférences Titulaire au département d’économie à la Faculté des Sciences économiques et de Gestion (FASEG) à l’université Cheikh Anta DIOP de Dakar (UCAD). Après sa maîtrise dans cette même faculté elle a été sélectionnée dans le Programme de Troisième Cycle Interuniversitaire (PTCI) Campus de Dakar où elle a obtenu son Diplôme d’Etude Approfondie en 2008 avant de devenir Docteur en économie dans ce même programme en 2015. Elle est nommée depuis juillet 2021 directrice des études du Centre Universitaire de Recherche et de formation aux Technologies de l’Internet (CURI). Outside the university she was a fellowship for two months in 2015 at the Virtual Institute of UNCTAD in Geneva, member of the scientific committee at the direction of Forecasting and Economic Studies(DPEE) of the Ministry of Economy and Finance from 2016 to 2018 and member of the scientific committee for the organization of the annual conference on sustainable development at the Ministry of the Environment and Sustainable Development for two years. Adama SOW was an assistant in the Sustainable Development Solutions Network(SDSN) program for the Sahel led by FASEG in collaboration with the Millenium Promise(MP) for five years."
            ,
        },
        {
            name: "Dr. Mary Nantongo",
            position: "Regional Focal Point - East Africa",
            image: "/img/mary.webp",
            bio: "Dr. Mary Nantongo is a lecturer at the Department of Economics, Makerere University Business School. She is a postdoctoral fellow on the ‘Capacity Building for Socially Just and Sustainable Energy Transitions’ project, where her research focuses on asset and resource stranding as a consequence of the transition to a low carbon economy in Uganda. Mary is also a certified expert in Applied Development Finance by the European Investment Bank and Global Development Network as well as a certified expert in Financing Nationally Determined Contributions of the Paris Climate Agreement by the Frankfurt School of Finance and Management. She is also a member of the Network for Impact Evaluation Researchers in Africa. For this year, 2022, Mary is a member of the scientific committee for the organization of the annual conference on renewable energy organized by the Ministry of Energy and Mineral Development, Uganda. Mary holds a PhD in Development and Environment Studies (Institutional Economics) and an MSc. in Development and Natural Resource Economics from the Norwegian University of Life Sciences. Her research interests revolve around the analysis of social, economic and environmental impacts of climate change, as well as evaluations of policies, programs and investments in the fields of environment and climate and the interactions and interdependencies between these and the broad sectors of agriculture, energy and natural resources.",
        },

    ]

    const Modal = ({ member, onClose }) => {
        if (!member) return null

        return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="relative bg-gradient-to-br from-[#48a4bb] to-[#3a8a9a] p-8 text-white">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex items-start gap-6">
                            <div className="relative w-32 h-40 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-white/10">
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-white/90 font-medium mb-4">{member.position}</p>
                                <div className="flex gap-3">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Email
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="p-8">
                        <h4 className="text-lg font-bold text-[#030f41] mb-4">Biography</h4>
                        <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>
                </div >
            </div >
        )
    }

    return (
        <>
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
                                    Over the last decades, Africa has experienced intense research and policy activities in various
                                    sectors especially health, agriculture, energy, science and technology, and lately climate change
                                    among others. However, research in the continent remains uncoordinated, with little in-continent
                                    learning and poor networking among researchers. The continent lacks impact networks – i.e. dedicated
                                    platforms for bringing African researchers and policymakers to engage in periodic dialogue, learning,
                                    and capability building towards creating research and policy impact.
                                </p>

                                <p className="italic text-gray-600 pl-4 border-l-4 border-[#48a4bb]">
                                    &quot;Consequently, there is little understanding of best research practices and impact practices
                                    taking place in various African contexts and what works or not.&quot;
                                </p>

                                <p>
                                    It is in this context that the ARIN Network launched the ARIN Fellowship program which brings
                                    together over 200 researchers from thirty-eight countries in Sub-Saharan Africa. The fellowship
                                    program consists of a network of talented researchers and technocrats across Africa who have been
                                    undertaking research in various fields including natural resource management, climate change,
                                    agriculture, forestry, energy, water, and cities to leverage their knowledge and experiences in
                                    promoting research excellence and impact pathways.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-[#48a4bb]" />
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium">Need help?</p>
                                        <p className="text-[#030f41] font-semibold">+254 746 130873</p>
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
                                            Talented researchers and technocrats across 38 Sub-Saharan African countries working in
                                            natural resource management, climate change, agriculture, forestry, energy, water, and cities.
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
                                            Identify and leverage evidence to flexibly and innovatively contribute to Africa&apos;s
                                            research transformation, policy analysis and capacity building.
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
                                            Spanning across Sub-Saharan Africa, our network creates a platform for cross-border
                                            collaboration and knowledge exchange among researchers and policymakers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                                LEADERSHIP
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#030f41] mb-3">Fellowship Leadership</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our executive team leading research excellence and policy impact across Africa
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {leadershipTeam.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                                >
                                    <div className="p-8">
                                        <div className="relative w-32 h-40 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h4 className="font-bold text-[#030f41] text-lg mb-1">{member.name}</h4>
                                            <p className="text-[#48a4bb] font-medium text-sm">{member.position}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-[#48a4bb] hover:bg-[#3a8a9a] text-white py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            View Bio
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Support Team Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-12">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-[#48a4bb]/10 text-[#48a4bb] rounded-lg text-sm font-semibold mb-4">
                                Our Focal Points
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {supportTeam.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                                >
                                    <div className="p-6">
                                        <div className="relative w-28 h-36 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-200">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h4 className="font-bold text-[#030f41] text-base mb-1">{member.name}</h4>
                                            <p className="text-[#48a4bb] font-medium text-sm">{member.position}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-[#48a4bb] hover:bg-[#3a8a9a] text-white py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            View Bio
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedMember && <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />}
        </>
    )
}

export default ARINFellowshipAbout