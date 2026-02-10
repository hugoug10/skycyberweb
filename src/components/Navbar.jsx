import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Proyectos', path: '/portfolio' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'text-neon-cyan' : 'text-gray-300 hover:text-neon-cyan';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src="/favicon.svg" alt="SkyCyberWeb Logo" className="h-10 w-10 hover:scale-110 transition-transform duration-300" />
                        <span className="font-bold text-2xl tracking-tighter text-white">
                            SKY<span className="text-neon-cyan">CYBER</span>WEB
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
                            <Link to="/contacto" className="bg-neon-cyan text-black font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all duration-300 transform hover:scale-105">
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`${isActive(link.path)} block px-4 py-3 rounded-xl text-lg font-medium bg-white/5 border border-white/5 active:bg-white/10 transition-colors`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contacto"
                                    className="w-full text-center bg-neon-cyan text-black font-black py-4 rounded-full block shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    EMPEZAR AHORA
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
