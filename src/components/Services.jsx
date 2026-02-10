import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Search, Database, ShoppingCart, PenTool, Video } from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: 'Diseño Web UI/UX',
        description: 'Interfaces intuitivas y atractivas que cautivan a tus usuarios desde el primer clic.',
        color: 'text-neon-cyan',
        gradient: 'from-neon-cyan/20 to-transparent'
    },
    {
        icon: Smartphone,
        title: 'Desarrollo Responsive',
        description: 'Webs adaptables a cualquier dispositivo. Tu negocio en el bolsillo de tus clientes.',
        color: 'text-neon-purple',
        gradient: 'from-neon-purple/20 to-transparent'
    },
    {
        icon: Search,
        title: 'SEO & Posicionamiento',
        description: 'Estrategias para aparecer en los primeros lugares de Google y aumentar tu tráfico.',
        color: 'text-neon-blue',
        gradient: 'from-neon-blue/20 to-transparent'
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce',
        description: 'Tiendas online rápidas y seguras diseñadas para maximizar tus ventas.',
        color: 'text-pink-500',
        gradient: 'from-pink-500/20 to-transparent'
    },
    {
        icon: Database,
        title: 'Aplicaciones Web',
        description: 'Soluciones complejas y paneles de administración a medida para tu negocio.',
        color: 'text-yellow-400',
        gradient: 'from-yellow-400/20 to-transparent'
    },
    {
        icon: PenTool,
        title: 'Branding Digital',
        description: 'Identidad visual coherente y moderna que define la personalidad de tu marca.',
        color: 'text-green-400',
        gradient: 'from-green-400/20 to-transparent'
    }
];

const Services = ({ limit, showTitle = true, preview = false }) => {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <section id="services" className={`py-24 bg-dark-bg relative overflow-hidden ${preview ? 'py-12' : 'py-24'}`}>
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showTitle && (
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            {preview ? 'SERVICIOS' : 'NUESTROS'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">{preview ? 'DESTACADOS' : 'SERVICIOS'}</span>
                        </motion.h2>
                        {!preview && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 max-w-2xl mx-auto text-lg"
                            >
                                Soluciones digitales integrales para llevar tu negocio al siguiente nivel.
                            </motion.p>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`p-3 rounded-lg bg-white/5 w-fit mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Drone Service */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 relative rounded-3xl overflow-hidden bg-dark-card border border-orange-500/30 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-orange-600/5 group-hover:from-orange-600/20 transition-all duration-500"></div>
                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                        <div className="p-6 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                            <Video size={64} />
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold mb-4 border border-orange-500/20">
                                NUEVO SERVICIO PREMIUM
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Videografía con Dron Profesional
                            </h3>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-3xl">
                                Eleva tu marca con tomas aéreas 4K espectaculares. Ideal para videos corporativos, inspecciones o contenido de alto impacto para redes sociales. Capturamos perspectivas imposibles.
                            </p>
                            <Link to="/contacto" className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105">
                                Solicitar Demo Aérea
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
