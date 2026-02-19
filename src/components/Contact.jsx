import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, X, Check } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-black border border-white/20 p-12 max-w-lg w-full"
                    >
                        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="flex flex-col items-start">
                            <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6 tracking-tighter">
                                ENVIADO
                            </h3>
                            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
                                Tu mensaje ha sido recibido. Prepárate para algo grande.
                            </p>
                            <button onClick={onClose} className="group flex items-center gap-4 text-neon-cyan text-xl tracking-widest hover:text-white transition-colors">
                                CERRAR <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        status: 'idle'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState(prev => ({ ...prev, status: 'submitting' }));

        try {
            const response = await fetch("https://formsubmit.co/ajax/contact.dronyxair@gmail.com", {
                method: "POST",
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: `[MINIMAL] Contacto de ${formState.name}`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setFormState(prev => ({ ...prev, status: 'success' }));
            } else {
                setFormState(prev => ({ ...prev, status: 'error' }));
            }
        } catch (error) {
            setFormState(prev => ({ ...prev, status: 'error' }));
        }
    };

    const handleCloseModal = () => {
        setFormState({ name: '', email: '', message: '', status: 'idle' });
    };

    return (
        <section id="contact" className="min-h-screen pt-20 bg-black relative overflow-hidden flex flex-col justify-center">
            <SuccessModal isOpen={formState.status === 'success'} onClose={handleCloseModal} />

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left Side: Typography */}
                <div className="relative">
                    {/* Circular glow behind text */}
                    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[15vw] lg:text-[12rem] leading-[0.8] font-black tracking-tighter text-transparent select-none"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }} // Fallback/base stroke
                    >
                        <span className="block hover:text-white/10 transition-colors duration-500">HOLA.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12 pl-4 border-l border-white/20"
                    >
                        <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
                            Cuéntanos tu idea. <br />
                            <span className="text-white font-normal">Nosotros ponemos la magia.</span>
                        </p>

                        <div className="mt-12 flex flex-col gap-4 text-sm tracking-widest text-gray-500">
                            <a href="mailto:contact.dronyxair@gmail.com" className="hover:text-neon-cyan transition-colors">
                                CONTACT.DRONYXAIR@GMAIL.COM
                            </a>
                            <a href="tel:+34615655593" className="hover:text-neon-cyan transition-colors">
                                +34 615 65 55 93
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Minimalist Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-16">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-neon-cyan transition-all placeholder-transparent peer"
                                placeholder="Tu nombre"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                disabled={formState.status === 'submitting'}
                            />
                            <label className="absolute left-0 top-4 text-2xl text-gray-500 transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-neon-cyan peer-not-placeholder-shown:-top-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none">
                                TU NOMBRE
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-neon-cyan transition-all placeholder-transparent peer"
                                placeholder="Tu email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                disabled={formState.status === 'submitting'}
                            />
                            <label className="absolute left-0 top-4 text-2xl text-gray-500 transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-neon-cyan peer-not-placeholder-shown:-top-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none">
                                TU EMAIL
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
                        </div>

                        <div className="group relative">
                            <textarea
                                name="message"
                                rows="1"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-neon-cyan transition-all placeholder-transparent peer resize-none min-h-[60px]"
                                placeholder="Tu mensaje"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                disabled={formState.status === 'submitting'}
                                onInput={(e) => {
                                    e.target.style.height = 'auto'; // Reset height
                                    e.target.style.height = e.target.scrollHeight + 'px'; // Set to scrollHeight
                                }}
                            ></textarea>
                            <label className="absolute left-0 top-4 text-2xl text-gray-500 transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-neon-cyan peer-not-placeholder-shown:-top-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none">
                                QUÉ TIENES EN MENTE
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={formState.status === 'submitting'}
                                className="group relative inline-flex items-center gap-4 text-xl font-bold tracking-widest text-white disabled:opacity-50"
                            >
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon-cyan group-hover:bg-neon-cyan/10 transition-all duration-500">
                                    {formState.status === 'submitting' ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    )}
                                </div>
                                <span className="group-hover:text-neon-cyan transition-colors duration-300">
                                    {formState.status === 'submitting' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                                </span>
                            </button>
                        </div>

                        {formState.status === 'error' && (
                            <p className="text-red-500 text-sm tracking-widest">ERROR AL ENVIAR. INTÉNTALO DE NUEVO.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
