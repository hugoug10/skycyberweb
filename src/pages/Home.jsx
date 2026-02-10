import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Services Preview */}
            <Services limit={3} showTitle={true} preview={true} />

            <div className="bg-dark-bg py-8 text-center">
                <Link to="/servicios" className="inline-flex items-center gap-2 text-neon-cyan font-bold hover:underline">
                    Ver todos los servicios <ArrowRight size={18} />
                </Link>
            </div>

            {/* Portfolio Preview */}
            <Portfolio limit={3} showTitle={true} preview={true} />

            <div className="bg-dark-card py-8 text-center border-t border-white/5">
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-neon-purple font-bold hover:underline">
                    Ver todos los proyectos <ArrowRight size={18} />
                </Link>
            </div>

            {/* CTA for Contact */}
            <section className="py-20 bg-gradient-to-br from-neon-blue/10 to-dark-bg text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6 text-white">¿Listo para hacer historia?</h2>
                    <p className="text-gray-300 mb-8 text-lg">Tu proyecto merece ser visto por el mundo con la mejor calidad.</p>
                    <Link to="/contacto" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neon-cyan transition-colors">
                        Contáctanos ahora
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
