import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, X, Check, ArrowRight, Zap, MessageSquare } from 'lucide-react';

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
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-dark-card border border-neon-cyan/30 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none"></div>

                        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-neon-cyan/50">
                                <Check className="text-neon-cyan" size={32} strokeWidth={3} />
                            </div>

                            <h3 className="text-3xl font-black text-white mb-3">MENSAJE RECIBIDO</h3>
                            <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                                Tu misión ha sido registrada en nuestra base de datos. Un agente de <span className="text-neon-cyan font-bold">Cyber Sky Web</span> contactará contigo en breve.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-neon-cyan hover:scale-[1.02] transition-all duration-300 shadow-lg"
                            >
                                ENTENDIDO
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const StartProject = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        status: 'idle'
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState(prev => ({ ...prev, status: 'submitting' }));

        try {
            const response = await fetch("https://formsubmit.co/ajax/contact.dronyxair@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: "🚀 Nuevo Proyecto: Cyber Sky Web",
                    _template: "box",
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
        <section id="start-project" className="min-h-screen relative flex items-center py-16 md:py-20 bg-black overflow-hidden perspective-1000">
            <SuccessModal isOpen={formState.status === 'success'} onClose={handleCloseModal} />

            {/* 3D Cyber Grid Background (Same as Hero) */}
            <div className="absolute inset-0 z-0 overflow-hidden transform-style-3d pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                {/* Floating Ambient Glows */}
                <motion.div
                    animate={{ x: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: [0, -50, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Left: Heading & Info */}
                    <div className="space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-neon-cyan font-mono tracking-widest mb-4 uppercase">Siguiente Nivel</h2>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
                                INICIA TU <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">REVOLUCIÓN</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                                Estás a un mensaje de transformar tu presencia digital. Cuéntanos tu visión y nosotros pondremos la tecnología.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { icon: Mail, title: "Email", value: "contact.dronyxair@gmail.com", href: "mailto:contact.dronyxair@gmail.com", color: "text-neon-cyan" },
                                { icon: Phone, title: "Teléfono", value: "+34 615 65 55 93", href: "tel:+34615655593", color: "text-neon-purple" }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-5 md:p-6 rounded-2xl bg-dark-card border border-white/10 hover:border-white/30 transition-all group"
                                >
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-white/10 transition-colors ${item.color}`}>
                                        <item.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">{item.title}</h4>
                                    <p className="text-white font-bold text-base md:text-lg truncate">{item.value}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form Card (Bento Style) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glow behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative bg-dark-card border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl backdrop-blur-xl">
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Tu Nombre</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 md:px-6 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-black/60 transition-all font-medium"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Tu Email (Opcional)</label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 md:px-6 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-black/60 transition-all font-medium"
                                            placeholder="john@empresa.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Proyecto</label>
                                    <div className="relative group">
                                        <textarea
                                            name="message"
                                            rows="3"
                                            required
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 md:px-6 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-black/60 transition-all font-medium resize-none leading-relaxed"
                                            placeholder="Cuéntanos tus objetivos..."
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={formState.status === 'submitting'}
                                        className="w-full relative group overflow-hidden bg-white text-black font-black text-base md:text-lg py-4 md:py-5 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {formState.status === 'submitting' ? 'ENVIANDO...' : 'INICIAR PROYECTO'}
                                            {!formState.status === 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" strokeWidth={3} />}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StartProject;
