import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/favicon.svg" alt="CyberSkyWeb Logo" className="h-8 w-8" />
                            <span className="font-bold text-xl tracking-tighter text-white">
                                CYBER<span className="text-neon-cyan">SKY</span>WEB
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transformando ideas en experiencias digitales futuristas. Diseño web de alto impacto y videografía aérea profesional.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/servicios">Diseño Web UI/UX</Link></li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/servicios">Desarrollo Frontend</Link></li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/servicios">E-commerce</Link></li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/servicios">SEO & Performance</Link></li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors font-semibold"><Link to="/servicios">Dron Profesional</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/">Inicio</Link></li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/portfolio">Proyectos</Link></li>
                            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Galería Aérea</h3>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://www.instagram.com/dronyxair?igsh=MTIwaXppZ3MzZWoyaQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-neon-purple/20 border border-white/5 hover:border-neon-purple/50 transition-all duration-300"
                            >
                                <div className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <Instagram size={20} className="text-white" />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Instagram</span>
                                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">@dronyxair</span>
                                </div>
                            </a>

                            <a
                                href="https://www.tiktok.com/@dronyxair?_r=1&_t=ZN-93oFNgTDyeE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-neon-cyan/20 border border-white/5 hover:border-neon-cyan/50 transition-all duration-300"
                            >
                                <div className="p-2 bg-black rounded-lg border border-white/10 group-hover:scale-110 transition-transform relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ea] to-[#ff0050] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white relative z-10">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">TikTok</span>
                                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">@dronyxair</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CyberSkyWeb. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 text-sm">
                        <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link to="/terminos" className="hover:text-white transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
