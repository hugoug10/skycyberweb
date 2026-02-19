import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Search, Database, ShoppingCart, PenTool, ArrowRight, CheckCircle, Zap, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'web-design',
        icon: Layout,
        title: 'Diseño Web UI/UX',
        subtitle: 'Donde el arte conoce a la ingeniería.',
        description: 'No hacemos webs. Creamos extensiones digitales de tu marca. Cada interfaz se diseña meticulosamente para guiar al usuario, evocar emociones y convertir visitas en leales seguidores. Usamos psicología del color y patrones de UX avanzados.',
        features: ['Investigación de Usuarios', 'Wireframing & Prototipado', 'Diseño de Interacción (IxD)', 'Sistemas de Diseño'],
        color: 'text-neon-cyan',
        gradient: 'from-neon-cyan/20 to-transparent',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'development',
        icon: Smartphone,
        title: 'Desarrollo Full-Stack',
        subtitle: 'Código limpio. Rendimiento brutal.',
        description: 'Construimos sobre cimientos sólidos. Aplicaciones web progresivas (PWA), sitios corporativos o plataformas complejas. Nuestro código es escalable, seguro y está optimizado para cargar en milisegundos.',
        features: ['React & Next.js', 'Arquitectura Serverless', 'Integración de APIs', 'Optimización de Rendimiento'],
        color: 'text-neon-purple',
        gradient: 'from-neon-purple/20 to-transparent',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'maintenance',
        icon: Database,
        title: 'Mantenimiento & Seguridad',
        subtitle: 'Tu paz mental es nuestra prioridad.',
        description: 'Una web desactualizada es un riesgo. Nos encargamos de las actualizaciones, copias de seguridad diarias y monitoreo de seguridad 24/7. Tu negocio nunca se detiene, tu web tampoco debería.',
        features: ['Backups Diarios', 'Actualización de Plugins/Core', 'Monitoreo de Uptime', 'Soporte Prioritario'],
        color: 'text-neon-blue',
        gradient: 'from-neon-blue/20 to-transparent',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'consulting',
        icon: PenTool,
        title: 'Consultoría Digital',
        subtitle: 'Estrategia antes que código.',
        description: 'No solo ejecutamos, pensamos. Analizamos tu modelo de negocio y diseñamos la arquitectura digital perfecta para escalar. Desde la elección del stack tecnológico hasta la optimización de flujos de usuario.',
        features: ['Auditoría Técnica', 'Planificación de Arquitectura', 'Optimización de Procesos', 'Transformación Digital'],
        color: 'text-pink-500',
        gradient: 'from-pink-500/20 to-transparent',
        image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'drone',
        icon: Video,
        title: 'Videografía Aérea Profesional',
        subtitle: 'El cielo no es el límite, es nuestro patio de juegos.',
        description: 'Potencia tu narrativa visual con planos imposibles. Ofrecemos grabación experta con drones para spots comerciales, inmobiliaria de lujo y contenido viral para redes sociales. Desde vuelos suaves y cinemáticos hasta seguimiento de obras.',
        features: ['Grabación 4K/6K RAW', 'Fotografía Aérea HDR', 'Edición & Color Grading', 'Contenido para RRSS (Reels/TikTok)'],
        color: 'text-yellow-400',
        gradient: 'from-yellow-400/20 to-transparent',
        image: '/images/DronDjiMavimini.png'
    }
];

const Services = () => {
    return (
        <div className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-black/80 to-black"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6"
                    >
                        NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ARSENAL</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Herramientas de vanguardia para problemas modernos. Diseñamos el éxito digital.
                    </p>
                </div>
            </section>

            {/* Immersive Service Sections */}
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent hidden md:block"></div>

                {services.map((service, index) => (
                    <section key={service.id} className="py-20 md:py-32 relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                            <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md`}>
                                        <service.icon size={20} className={service.color} />
                                        <span className={`text-sm font-bold uppercase tracking-wider ${service.color}`}>{service.title}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        {service.subtitle}
                                    </h2>

                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle size={18} className="text-neon-cyan" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/empezar" className="inline-flex items-center gap-2 text-white font-bold border-b border-neon-cyan pb-1 hover:text-neon-cyan transition-colors">
                                        SOLICITAR PRESUPUESTO <ArrowRight size={18} />
                                    </Link>
                                </motion.div>

                                {/* Visual Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative group rounded-3xl overflow-hidden aspect-video md:aspect-square border border-white/10 shadow-2xl">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl">
                                            <Zap className={service.color} size={20} fill="currentColor" />
                                            <span className="text-white font-bold text-sm">Alta Demanda</span>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-t from-black to-dark-bg text-center px-4">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">¿NO VES LO QUE BUSCAS?</h2>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
                    Los desafíos únicos requieren soluciones únicas. Contáctanos y diseñemos algo a medida.
                </p>
                <Link to="/empezar" className="px-10 py-4 bg-white text-black font-black text-lg rounded-full hover:bg-neon-cyan transition-colors shadow-lg">
                    HABLAR CON UN EXPERTO
                </Link>
            </section>
        </div>
    );
};

export default Services;
