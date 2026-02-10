import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping"></span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">CYBERSKYWEB.COM</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-tight">
                        ELEVAMOS TU <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple animate-gradient-x">
                            PRESENCIA DIGITAL
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
                        Creamos experiencias web inmersivas y de alto rendimiento que no solo se ven increíbles, sino que convierten visitantes en clientes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contacto" className="group relative px-8 py-4 bg-neon-cyan text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,243,255,0.4)]">
                            <span className="relative z-10 flex items-center gap-2">
                                INICIAR PROYECTO <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
                            VER PROYECTOS
                        </Link>
                    </div>
                </motion.div>

                {/* Stats / Features - Floating */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Globe, text: "Experiencias Inmersivas", color: "text-neon-cyan" },
                        { icon: Zap, text: "Ultra Rendimiento", color: "text-neon-purple" },
                        { icon: Code, text: "Tecnología de Punta", color: "text-neon-blue" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                            <span className="font-semibold text-gray-200">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
