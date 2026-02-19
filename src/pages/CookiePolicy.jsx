import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-gray-400 font-lato max-w-2xl mx-auto">
            Transparencia y claridad sobre cómo gestionamos tu privacidad.
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 shadow-xl space-y-8"
        >
          
          <section className="space-y-4">
            <h2 className="text-2xl font-playfair font-semibold text-sky-400 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              ¿Qué son las cookies?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tablet o móvil) cuando los visitas. Funcionan como una "memoria" para el sitio web, permitiendo recordarte en futuras visitas, mantener tu sesión iniciada o recordar tus preferencias de configuración.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-playfair font-semibold text-sky-400 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              ¿Qué tipos de cookies utilizamos?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Cookies Técnicas (Necesarias)
                </h3>
                <p className="text-sm text-gray-400">
                  Son esenciales para que la web funcione correctamente. Incluyen, por ejemplo, mantener la sesión iniciada o recordar tus preferencias de privacidad. No se pueden desactivar.
                </p>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Cookies Analíticas
                </h3>
                <p className="text-sm text-gray-400">
                  Nos ayudan a entender cómo interactúan los visitantes con la web, reuniendo información de forma anónima para mejorar la experiencia de usuario.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-playfair font-semibold text-sky-400 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              Gestión de Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <div className="border-t border-neutral-700 pt-8 mt-8 text-center text-sm text-gray-500">
            <p>Última actualización: Febrero 2026</p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
