import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Proyectos', path: '/portfolio' },
        { name: 'Nosotros', path: '/nosotros' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'text-neon-cyan' : 'text-gray-300 hover:text-neon-cyan';
    };

    return (
        <nav className={`fixed w-full transition-all duration-300 ${isOpen ? 'z-50' : 'z-50'} ${scrolled && !isOpen ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${isOpen ? 'z-50' : ''}`}>
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src="/favicon.svg?v=3" alt="Cyber Sky Web Logo" className="h-10 w-10 hover:scale-110 transition-transform duration-300" />
                        <span translate="no" className="notranslate font-bold text-2xl tracking-tighter text-white">
                            CYBER<span className="text-neon-cyan"> SKY </span>WEB
                        </span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`${isActive(link.path)} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/empezar" className="bg-neon-cyan text-black font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all duration-300 transform hover:scale-105">
                                Empezar
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#050505] flex flex-col pt-20"
                    >
                        <div className="flex-1 px-6 py-12 flex flex-col gap-8 overflow-y-auto">
                            {navLinks.map((link, index) => {
                                const active = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center justify-between transition-all duration-300"
                                        >
                                            <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${active ? 'text-neon-cyan' : 'text-gray-400 group-hover:text-white'}`}>
                                                {link.name}
                                            </span>
                                            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${active ? 'text-neon-cyan translate-x-1' : 'text-gray-600 group-hover:text-white group-hover:translate-x-1'}`} />
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                                className="mt-8 flex flex-col gap-6"
                            >
                                <div className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
                                    Conecta con nosotros
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="https://www.instagram.com/dronyxair?igsh=MTIwaXppZ3MzZWoyaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.tiktok.com/@dronyxair?_r=1&_t=ZN-93oFNgTDyeE" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-3 mt-2">
                                    <a href="mailto:contact@cyberskyweb.com" className="group flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors w-max">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span translate="no" className="text-sm font-medium notranslate">contact@cyberskyweb.com</span>
                                    </a>
                                    <a href="tel:+34615655593" className="group flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors w-max">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan transition-colors">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium">+34 615 65 55 93</span>
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                                className="mt-auto pt-8 pb-12 border-t border-white/10"
                            >
                                <Link
                                    to="/empezar"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-cyan to-[#00c3ff] text-black font-extrabold py-4 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 active:scale-[0.98]"
                                >
                                    EMPEZAR AHORA
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
