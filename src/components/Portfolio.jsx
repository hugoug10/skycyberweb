import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Bar El Gorrión',
        category: 'Gastronomía',
        tags: ['Web App', 'Reservas', 'QR Menu'],
        image: 'https://barelgorrion.com/assets/favicon_rock.png', // Fallback or use real screenshot if available
        bgColors: 'from-orange-500/20 to-red-500/20',
        description: 'Experiencia digital completa para hostelería. Digitalizamos la carta clásica transformándola en una experiencia interactiva, incluyendo sistema de gestión de reservas en tiempo real.',
        link: 'https://barelgorrion.com/'
    }
];

const Portfolio = ({ limit, showTitle = true, preview = false }) => {
    // Only show limited projects if limit is set
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio" className={`bg-dark-bg min-h-screen ${preview ? 'py-0 bg-transparent min-h-0' : 'py-20'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {showTitle && (
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-neon-purple font-mono tracking-widest mb-2">PORTAFOLIO</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white">
                                OBRAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">MAESTRAS</span>
                            </h3>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-12">
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/10 hover:border-white/30 transition-all duration-500"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[500px]">
                                    {/* Image Section */}
                                    <div className="relative overflow-hidden h-[300px] lg:h-full">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColors} opacity-40 group-hover:opacity-60 transition-opacity z-10`}></div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all"
                                        >
                                            <ArrowUpRight size={24} />
                                        </a>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center relative">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                            <h1 className="text-9xl font-black text-white font-outline-2">0{index + 1}</h1>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex gap-3 mb-6 flex-wrap">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon-cyan font-mono uppercase tracking-wider">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 text-white font-bold text-lg hover:underline decoration-neon-cyan underline-offset-8 transition-all"
                                            >
                                                VER CASO DE ESTUDIO <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
