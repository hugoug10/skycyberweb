import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black perspective-1000">
            {/* 3D Cyber Grid Background */}
            <div className="absolute inset-0 z-0 overflow-hidden transform-style-3d">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-neon-purple/20 to-transparent opacity-50 blur-[100px]"></div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-neon-purple/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-neon-cyan/50 transition-colors cursor-default cursor-none">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                        </span>
                        <span className="text-gray-300 text-xs md:text-sm font-mono tracking-widest uppercase">CyberSkyWeb Online</span>
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black tracking-tighter text-white mb-2 leading-[0.85] select-none">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:text-white transition-colors duration-500" style={{ textShadow: '0 0 40px rgba(255,255,255,0.1)' }}>
                            CYBER
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple animate-gradient-x" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                            SKYWEB
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed px-4 md:px-0 font-light"
                >
                    No creamos simples webs. Arquitectamos <span className="text-white font-medium">realidades digitales</span> que posicionan tu marca en el futuro.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link to="/empezar" className="group relative w-full sm:w-auto">
                        <div className="absolute inset-0 bg-neon-cyan/50 blurred-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative px-8 py-4 md:px-10 md:py-5 bg-white text-black font-black text-base md:text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 md:gap-3">
                            INICIAR PROYECTO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 text-white font-bold text-base md:text-lg rounded-full hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm flex items-center justify-center">
                        VER EL FUTURO
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
