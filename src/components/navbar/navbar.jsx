'use client';
import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';
import Image from 'next/image';

const ARINNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Fellows',
            href: '#',
            dropdown: [
                { name: 'ARIN Fellows', href: '/fellows/arin' },
                { name: 'Accountable Adaptation Fellows', href: '/fellows/accountable-adaptation' },
                { name: 'SDG Fellows', href: '/fellows/sdg' },
                { name: 'LEEPS Fellows', href: '/fellows/leeps' },
                { name: 'NDC Fellowship', href: '/ndc-fellowship' },


            ]
        },
        {
            name: 'Summer School',
            href: '#',
            dropdown: [
                { name: 'Summer School', href: '/summer-school' },
                { name: 'NDC Academy', href: '/ndc-academy' },



            ]
        },

        { name: 'Mini Grants', href: '/mini-grants' },
        { name: 'Friday Reviews', href: '/friday-reviews' },
        // { name: 'NDC Academy', href: '/ndc-academy' },
    ];

    return (
        <div className="w-full">
            <div className="bg-[#030f41] text-white py-2 px-4 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={14} />
                            <span>+254746130873</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={14} />
                            <span>info@arin-africa.org</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={14} />
                            <span>ACK Gardens House, 1st Floor,
                                Bishop Road, 1St Ngong Avenue, Upperhill, Nairobi</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href="#" className="hover:text-[#9bc8ce] transition-colors duration-200">
                            <Facebook size={16} />
                        </a>
                        <a href="#" className="hover:text-[#9bc8ce] transition-colors duration-200">
                            <Twitter size={16} />
                        </a>
                        <a href="#" className="hover:text-[#9bc8ce] transition-colors duration-200">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="hover:text-[#9bc8ce] transition-colors duration-200">
                            <Instagram size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : ''
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-3">

                            <Image src="/img/Fellows-Logo.png" alt="ARIN Logo" width={64} height={64} className="w-16 h-16 object-contain" />

                        </div>

                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.dropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center px-4 py-2 text-gray-700 hover:text-[#48a4bb] hover:bg-[#9bc8ce]/10 rounded-lg transition-all duration-200 font-medium"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`ml-1 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {activeDropdown === item.name && (
                                                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                                    {item.dropdown.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-gray-700 hover:bg-[#9bc8ce]/10 hover:text-[#48a4bb] transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="px-4 py-2 text-gray-700 hover:text-[#48a4bb] hover:bg-[#9bc8ce]/10 rounded-lg transition-all duration-200 font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* <div className="hidden lg:block">
                            <a
                                href="/contact"
                                className="bg-[#48a4bb] text-white px-6 py-2 rounded-full hover:bg-[#030f41] transition-colors duration-200 font-medium"
                            >
                                Contact
                            </a>
                        </div> */}

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100">
                        <div className="px-4 py-4 space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#9bc8ce]/10 hover:text-[#48a4bb] rounded-lg transition-colors duration-200 font-medium"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {activeDropdown === item.name && (
                                                <div className="mt-1 pl-4 space-y-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-gray-600 hover:bg-[#9bc8ce]/10 hover:text-[#48a4bb] rounded-lg transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block px-4 py-3 text-gray-700 hover:bg-[#9bc8ce]/10 hover:text-[#48a4bb] rounded-lg transition-colors duration-200 font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <a
                                    href="/contact"
                                    className="block w-full text-center bg-[#48a4bb] text-white px-6 py-3 rounded-lg hover:bg-[#030f41] transition-colors duration-200 font-medium"
                                >
                                    Contact
                                </a>
                            </div>

                            {/* Mobile Social Links */}
                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-center justify-center space-x-4">
                                    <a href="#" className="p-2 text-[#48a4bb] hover:text-[#030f41] transition-colors duration-200">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-[#48a4bb] hover:text-[#030f41] transition-colors duration-200">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-[#48a4bb] hover:text-[#030f41] transition-colors duration-200">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-2 text-[#48a4bb] hover:text-[#030f41] transition-colors duration-200">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                                <div className="mt-4 text-center text-sm text-gray-600">
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <Phone size={14} />
                                        <span>+254746130873</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Mail size={14} />
                                        <span>info@arin-africa.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default ARINNavbar;