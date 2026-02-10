import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submit
        console.log('Form submitted:', formState);
        alert('Mensaje enviado (simulación)');
    };

    return (
        <section id="contact" className="py-24 bg-dark-bg relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿LISTO PARA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">EL FUTURO?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            No dejes que tu marca se quede atrás. Contáctanos hoy y comencemos a construir tu presencia digital de alto impacto.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Email</h4>
                                    <a href="mailto:hugoug10.fly@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">hugoug10.fly@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple border border-white/10">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Teléfono</h4>
                                    <a href="tel:+34615655593" className="text-gray-400 hover:text-neon-cyan transition-colors">+34 615 65 55 93</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Ubicación</h4>
                                    <p className="text-gray-400">Madrid, España</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="Tu nombre"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="tu@email.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                ENVIAR MENSAJE <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
