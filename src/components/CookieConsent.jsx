import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check local storage on mount
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-neutral-900/95 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-2xl p-6 md:flex md:items-center md:justify-between gap-6">

                        <div className="flex-1 space-y-2 mb-6 md:mb-0">
                            <div className="flex items-center gap-2 text-sky-400 mb-2">
                                <Cookie className="w-5 h-5" />
                                <h3 className="font-playfair font-semibold text-lg">Tu privacidad nos importa</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
                                Puedes aceptar todas las cookies o gestionar tus preferencias. Para más información, consulta nuestra{' '}
                                <Link to="/politica-de-cookies" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                                    Política de Cookies
                                </Link>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                            <button
                                onClick={handleReject}
                                className="px-6 py-2.5 rounded-xl border border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                Rechazar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg shadow-sky-900/20 transition-all duration-200 text-sm font-medium transform hover:scale-[1.02]"
                            >
                                Aceptar todas
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
