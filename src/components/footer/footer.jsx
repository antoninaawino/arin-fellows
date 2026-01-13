import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const ArinFellowsFooter = () => {
    return (
        <footer className="relative bg-[#030f41] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#9bc8ce] blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-[#48a4bb] blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-[#9bc8ce] blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-[#48a4bb] blur-2xl animate-pulse delay-3000"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-32 animate-pulse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z"
                        fill="rgba(155, 200, 206, 0.15)" />
                </svg>
                <svg className="absolute top-8 left-0 w-full h-32 animate-pulse delay-500" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,40 C400,80 800,10 1200,50 L1200,120 L0,120 Z"
                        fill="rgba(72, 164, 187, 0.1)" />
                </svg>
            </div>

            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#9bc8ce] animate-ping"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-[#48a4bb] animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-[#9bc8ce] animate-bounce"></div>
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-[#48a4bb] animate-ping delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] bg-clip-text text-transparent mb-4 animate-pulse">
                                Arin Fellows
                            </h2>
                            <p className="text-[#9bc8ce]/90 leading-relaxed">
                                Empowering the next generation of leaders through innovative fellowship programs,
                                sustainable development initiatives, and capacity building opportunities across Africa.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                <a key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gradient-to-br from-[#48a4bb] to-[#9bc8ce] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#48a4bb]/50 transition-all duration-300 group transform hover:scale-110 hover:rotate-6"
                                >
                                    <Icon className="w-5 h-5 text-white group-hover:text-[#030f41] transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                        <h3 className="text-lg font-semibold text-[#9bc8ce] border-b border-[#48a4bb]/50 pb-2 relative">
                            Quick Links
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-500 group-hover:w-full"></div>
                        </h3>
                        <nav className="space-y-3">
                            {['Home', 'About', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                                <a key={link}
                                    href="#"
                                    className="block text-[#9bc8ce]/80 hover:text-[#9bc8ce] transition-all duration-300 hover:translate-x-2 transform hover:scale-105 group"
                                    style={{ animationDelay: `${index * 100}ms` }}>
                                    <span className="relative">
                                        {link}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Programs */}
                    <div className="space-y-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                        <h3 className="text-lg font-semibold text-[#9bc8ce] border-b border-[#48a4bb]/50 pb-2 relative">
                            Programs
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-500 group-hover:w-full"></div>
                        </h3>
                        <div className="space-y-4">
                            {/* Fellows Dropdown */}
                            <div className="group">
                                <h4 className="font-medium text-white mb-2 transition-colors duration-300 group-hover:text-[#9bc8ce]">
                                    Fellows
                                </h4>
                                <div className="space-y-2 ml-4">
                                    {['Accountable Adaptation Fellows', 'SDG Fellows', 'ARIN Fellows'].map((fellow, index) => (
                                        <a key={fellow}
                                            href="#"
                                            className="block text-sm text-[#9bc8ce]/70 hover:text-[#9bc8ce] transition-all duration-300 hover:translate-x-1 transform"
                                            style={{ animationDelay: `${index * 150}ms` }}>
                                            {fellow}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Other Programs */}
                            <div className="space-y-2">
                                {['Mini Grants', 'Friday Reviews', 'NDC Fellowship', 'NDC Academy'].map((program, index) => (
                                    <a key={program}
                                        href="#"
                                        className="block text-[#9bc8ce]/80 hover:text-[#9bc8ce] transition-all duration-300 hover:translate-x-2 transform hover:scale-105 group"
                                        style={{ animationDelay: `${index * 100}ms` }}>
                                        <span className="relative">
                                            {program}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="space-y-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                        <h3 className="text-lg font-semibold text-[#9bc8ce] border-b border-[#48a4bb]/50 pb-2 relative">
                            Stay Connected
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-500 group-hover:w-full"></div>
                        </h3>

                        {/* Newsletter Signup */}
                        <div className="space-y-4">
                            <p className="text-[#9bc8ce]/80 text-sm">
                                Subscribe to our newsletter for updates on programs and opportunities.
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-[#9bc8ce]/10 border border-[#48a4bb]/50 rounded-lg text-white placeholder-[#9bc8ce]/60 focus:outline-none focus:ring-2 focus:ring-[#9bc8ce] focus:border-transparent transition-all duration-300 focus:shadow-lg focus:shadow-[#48a4bb]/20"
                                />
                                <button className="w-full bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] hover:from-[#9bc8ce] hover:to-[#48a4bb] text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#48a4bb]/30 group">
                                    <span className="group-hover:animate-pulse">Subscribe</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { Icon: Mail, text: "info@arinfellows.org" },
                                { Icon: Phone, text: "+254 700 123 456" },
                                { Icon: MapPin, text: "Nairobi, Kenya" }
                            ].map(({ Icon, text }, index) => (
                                <div key={text}
                                    className="flex items-center space-x-3 group"
                                >
                                    <Icon className="w-4 h-4 text-[#9bc8ce] group-hover:text-[#48a4bb] transition-colors duration-300" />
                                    <span className="text-sm text-[#9bc8ce]/80 group-hover:text-[#9bc8ce] transition-colors duration-300">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gradient-to-r from-[#48a4bb]/30 to-[#9bc8ce]/30 relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#48a4bb] to-transparent"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[#9bc8ce]/70 text-sm animate-pulse">
                            © {new Date().getFullYear()} Arin Fellows. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            {['Privacy Policy', 'Support'].map((item, index) => (
                                <a key={item}
                                    href="#"
                                    className="text-[#9bc8ce]/70 hover:text-[#9bc8ce] transition-all duration-300 hover:scale-105 transform group"
                                    style={{ animationDelay: `${index * 100}ms` }}>
                                    <span className="relative">
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1200 60" className="w-full h-8">
                    <path d="M0,30 C300,10 600,50 900,20 C1050,5 1150,40 1200,25 L1200,60 L0,60 Z"
                        fill="rgba(155, 200, 206, 0.2)" />
                </svg>
            </div>
        </footer>
    );
};

export default ArinFellowsFooter;