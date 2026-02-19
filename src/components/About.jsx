import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Zap, Globe, Cpu, Users, Award, ArrowRight, Check, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    // Stats Data
    const stats = [
        { label: "Proyectos Entregados", value: "50+" },
        { label: "Tasa de Retención", value: "98%" },
        { label: "Años de Experiencia", value: "5+" },
        { label: "Soporte", value: "24/7" }
    ];

    // Process Data
    const processSteps = [
        { title: "Descubrimiento", desc: "Analizamos tu marca, tus metas y tu competencia para trazar la ruta al éxito." },
        { title: "Estrategia & Diseño", desc: "Creamos prototipos de alta fidelidad y definimos la arquitectura técnica." },
        { title: "Desarrollo", desc: "Codificamos tu visión usando las tecnologías más avanzadas del mercado." },
        { title: "Lanzamiento", desc: "Despliegue, optimización SEO y entrega final. Tu proyecto cobra vida." }
    ];

    // FAQ Data
    const faqs = [
        { question: "¿Cuánto tiempo tarda un proyecto?", answer: "Somos rápidos. Una Landing Page puede estar lista en 3-5 días, y una web completa en 1-2 semanas. Trabajamos con sprints intensivos para que lances cuanto antes." },
        { question: "¿Incluyen mantenimiento?", answer: "Sí, ofrecemos planes de mantenimiento para asegurar que tu web siga funcionando perfecta, segura y actualizada mes a mes." },
        { question: "¿Qué tecnologías usan?", answer: "Nos especializamos en el stack moderno: React, Next.js, Vite para el frontend; Node.js para el backend; y Three.js para experiencias 3D inmersivas." },
        { question: "¿Hacen diseño a medida?", answer: "Absolutamente. No usamos plantillas genéricas. Cada píxel se diseña pensando en tu marca y tus objetivos específicos." }
    ];

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/50 to-dark-bg"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-neon-cyan font-mono tracking-widest mb-4">SOBRE NOSOTROS</h2>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            FORJANDO EL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">FUTURO DIGITAL</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            No somos solo una agencia. Somos arquitectos de experiencias digitales que desafían los límites de lo posible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden relative group">
                <style>
                    {`
                    @keyframes scrollAbout {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .animate-scroll-about {
                        animation: scrollAbout 30s linear infinite;
                        will-change: transform;
                    }
                    @media (max-width: 768px) {
                        .animate-scroll-about {
                            animation-duration: 20s;
                        }
                    }
                    `}
                </style>
                <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex gap-16 items-center animate-scroll-about transform-gpu">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex gap-16 text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/30 to-white/10 uppercase tracking-tighter select-none">
                                <span>INNOVACIÓN RADICAL</span>
                                <span className="text-neon-cyan/50">•</span>
                                <span>DISEÑO FUTURISTA</span>
                                <span className="text-neon-purple/50">•</span>
                                <span>EXPERIENCIA DIGITAL</span>
                                <span className="text-neon-cyan/50">•</span>
                                <span>SIN LÍMITES</span>
                                <span className="text-neon-purple/50">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission / Values Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: "Velocidad Extrema", desc: "Optimizamos cada línea de código para un rendimiento instantáneo." },
                        { icon: Award, title: "Perfección Visual", desc: "Diseños que no solo se ven bien, sino que hipnotizan." },
                        { icon: Globe, title: "Impacto Global", desc: "Soluciones escalables listas para conquistar cualquier mercado." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-neon-cyan/10 rounded-xl flex items-center justify-center text-neon-cyan mb-6 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-shadow">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Story */}
            <section className="py-20 bg-black/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">NUESTRA HISTORIA</h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Todo comenzó con una idea simple: <strong className="text-white">la web actual es aburrida</strong>. Webs estáticas, plantillas genéricas, falta de alma.
                            </p>
                            <p>
                                En Cyber Sky Web, decidimos romper el molde. Nacimos para fusionar arte y tecnología. No hacemos sitios web; construimos universos digitales inmersivos que cuentan la historia de tu marca como nunca antes.
                            </p>
                            <p>
                                Creemos en el poder del diseño neón, la interactividad fluida y la tecnología de vanguardia para diferenciar a nuestros clientes en un mar de mediocridad.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-3xl blur-3xl transform -rotate-6"></div>
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                            alt="Futuristic Office"
                            className="relative rounded-3xl border border-white/10 shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 md:py-32 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-neon-cyan font-mono tracking-widest mb-4 uppercase">Cómo Trabajamos</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white">
                            NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple uppercase">PROCESO</span>
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Line connecting steps */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-12 md:space-y-0">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row gap-8 items-center relative ${index !== processSteps.length - 1 ? 'md:pb-24' : ''}`}
                                >
                                    {/* Left side (Desktop only for even, Hidden on Mobile) */}
                                    <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right' : ''}`}>
                                        {index % 2 === 0 && (
                                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{step.title}</h4>
                                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center Number (Always visible, aligned on mobile) */}
                                    <div className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-black border-2 border-neon-cyan flex items-center justify-center text-neon-cyan text-xl font-bold shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                                        {index + 1}
                                    </div>

                                    {/* Right side / Mobile side (Shows for odd on desktop, ALL steps on mobile) */}
                                    <div className={`flex-1 w-full ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right md:opacity-0 md:pointer-events-none'}`}>
                                        {/* Mobile Card or Odd Desktop Card */}
                                        <div className={`md:hidden block bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all hover:-translate-y-1 group text-center`}>
                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-neon-cyan transition-colors">{step.title}</h4>
                                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>

                                        {/* Desktop Odd Card Only */}
                                        {index % 2 !== 0 && (
                                            <div className="hidden md:block bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group text-left">
                                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{step.title}</h4>
                                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="py-20 max-w-4xl mx-auto px-4 md:px-8">
                <h3 className="text-4xl font-bold text-center text-white mb-12">PREGUNTAS FRECUENTES</h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                {activeAccordion === index ? <ChevronUp className="text-neon-cyan" /> : <ChevronDown className="text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {activeAccordion === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Marquee (Simplified CSS version) */}
            <section className="py-20 border-t border-white/5 overflow-hidden">
                <h3 className="text-center text-gray-500 font-mono text-sm tracking-[0.5em] mb-12 uppercase">NUESTRO ARSENAL TECNOLÓGICO</h3>
                <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 flex-wrap px-4">
                    <div className="flex items-center gap-2"><Globe className="text-neon-cyan" /> <span className="text-xl font-bold text-white">React</span></div>
                    <div className="flex items-center gap-2"><Zap className="text-yellow-400" /> <span className="text-xl font-bold text-white">Vite</span></div>
                    <div className="flex items-center gap-2"><Cpu className="text-blue-500" /> <span className="text-xl font-bold text-white">Three.js</span></div>
                    <div className="flex items-center gap-2"><Code className="text-green-500" /> <span className="text-xl font-bold text-white">Node.js</span></div>
                    <div className="flex items-center gap-2"><Users className="text-pink-500" /> <span className="text-xl font-bold text-white">Tailwind</span></div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-black to-neon-cyan/20"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8">¿LISTO PARA EL SIGUIENTE NIVEL?</h2>
                    <p className="text-xl text-gray-300 mb-12">No dejes que tu marca sea una más del montón.</p>
                    <Link
                        to="/empezar"
                        className="inline-flex items-center gap-3 bg-white text-black font-black text-xl px-10 py-5 rounded-full hover:bg-neon-cyan transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        INICIAR PROYECTO <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
