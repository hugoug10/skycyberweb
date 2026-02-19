import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Search, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoServices = () => {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-neon-cyan font-mono tracking-widest mb-4">NUESTROS PODERES</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white">
                    SOLUCIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">INTEGRALES</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                {/* Large Card - Web Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-dark-card border border-white/10 hover:border-neon-cyan/50 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full group-hover:bg-neon-cyan/30 transition-colors duration-500"></div>

                    <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                                <Layout size={32} />
                            </div>
                            <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">Diseño Web UI/UX</h4>
                            <p className="text-gray-400 text-lg max-w-md">
                                Creamos interfaces que no solo se ven bien, sino que sienten bien. Estética cyberpunk fusionada con usabilidad extrema.
                            </p>
                        </div>
                        <Link to="/servicios" className="inline-flex items-center gap-3 text-white font-bold group-hover:translate-x-2 transition-transform">
                            EXPLORAR <ArrowRight />
                        </Link>
                    </div>
                </motion.div>

                {/* Medium Card - Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-dark-card border border-white/10 hover:border-neon-purple/50 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 p-8">
                        <Smartphone size={32} className="text-neon-purple mb-4" />
                        <h4 className="text-2xl font-bold text-white mb-2">Mobile First</h4>
                        <p className="text-sm text-gray-400">Adaptable a cualquier pantalla del multiverso.</p>
                    </div>
                </motion.div>

                {/* Medium Card - Maintenance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-dark-card border border-white/10 hover:border-neon-blue/50 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 p-8">
                        <Search size={32} className="text-neon-blue mb-4" />
                        <h4 className="text-2xl font-bold text-white mb-2">Mantenimiento</h4>
                        <p className="text-sm text-gray-400">Tu web siempre segura, rápida y actualizada.</p>
                    </div>
                </motion.div>

            </div>

            <div className="mt-12 text-center">
                <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    VER TODOS LOS SERVICIOS <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
};

export default BentoServices;
