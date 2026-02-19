import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden relative group z-20">
            <style>
                {`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    will-change: transform;
                }
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation-duration: 20s;
                    }
                }
                `}
            </style>
            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex whitespace-nowrap overflow-hidden">
                <div className="flex gap-16 items-center animate-scroll transform-gpu">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-16 text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/30 to-white/10 uppercase tracking-tighter select-none">
                            <span>DISEÑO WEB</span>
                            <span className="text-neon-cyan/50">•</span>
                            <span>EXPERIENCIAS 3D</span>
                            <span className="text-neon-purple/50">•</span>
                            <span>MANTENIMIENTO PRO</span>
                            <span className="text-neon-cyan/50">•</span>
                            <span>WEB CORPORATIVA</span>
                            <span className="text-neon-purple/50">•</span>
                            <span>CONSULTORÍA</span>
                            <span className="text-neon-cyan/50">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
