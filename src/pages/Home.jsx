import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import BentoServices from '../components/BentoServices';
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Hero />

            <Marquee />

            {/* Bento Grid Services Preview */}
            <BentoServices />

            {/* Portfolio Preview */}
            <div className="relative py-20 bg-black/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full"></div>
                <div className="relative z-10">
                    <Portfolio limit={3} showTitle={true} preview={true} />
                </div>
            </div>

            <div className="bg-dark-card py-12 text-center border-t border-white/5 relative z-10">
                <Link to="/portfolio" className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-neon-purple transition-all group">
                    EXPLORAR TODO EL PORTAFOLIO
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Massive Premium CTA */}
            <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-center px-4 py-20 md:py-0">
                {/* Background Video/Effect Placeholder */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/20 via-black to-black opacity-40"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-neon-cyan font-mono tracking-[1em] text-[10px] md:text-base mb-6 md:mb-8 uppercase">El Futuro es Ahora</h2>
                        <h2 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tighter">
                            ¿HACEMOS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-cyan animate-gradient-x">HISTORIA?</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-2xl mb-8 md:text-12 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            No busques más. Tienes la visión, nosotros la tecnología. Juntos crearemos algo que el mundo no podrá ignorar.
                        </p>

                        <Link to="/empezar" className="group relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                            <button className="relative px-8 py-5 md:px-12 md:py-6 bg-black rounded-full leading-none flex items-center gap-3 md:gap-4">
                                <span className="text-white font-black text-xl md:text-2xl tracking-wide group-hover:text-neon-cyan transition-colors">INICIAR MI PROYECTO</span>
                                <Sparkles className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
