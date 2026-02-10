import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Bar El Gorrión',
        category: 'Gastronomía',
        image: 'https://barelgorrion.com/assets/favicon_rock.png',
        description: 'Experiencia digital completa para hostelería con menú interactivo y reservas.',
        link: 'https://barelgorrion.com/'
    }
];

const Portfolio = ({ limit, showTitle = true, preview = false }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio" className={`py-24 bg-dark-card border-t border-white/5 ${preview ? 'py-12' : 'py-24'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showTitle && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {preview ? 'PROYECTOS' : 'PROYECTOS'} <span className="text-neon-cyan">{preview ? 'DESTACADOS' : 'DESTACADOS'}</span>
                        </h2>
                        {!preview && (
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Una selección de nuestros trabajos más recientes y disruptivos.
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-8">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-dark-bg border border-white/10 w-full md:max-w-md lg:max-w-sm"
                        >
                            {/* Image Placeholder or Logo */}
                            <div
                                className="h-48 w-full transition-transform duration-500 group-hover:scale-110 relative bg-dark-bg flex items-center justify-center p-4"
                                style={project.image.startsWith('linear-gradient') ? { background: project.image } : {}}
                            >
                                {project.image.startsWith('http') || project.image.startsWith('/') ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain relative z-10"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                )}
                            </div>

                            <div className="p-6 relative z-10 bg-dark-bg">
                                <span className="text-neon-cyan text-sm font-bold tracking-wider mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>

                                <div className="flex gap-4">
                                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors">
                                        <ExternalLink size={18} /> Visitar Web
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Button removed as per user request */}
            </div>
        </section>
    );
};

export default Portfolio;
