import React from 'react';
import { Rocket, Globe, Mail, Phone, MapPin, Video, Layout, Search, ShoppingCart, QrCode, Cpu, Wifi } from 'lucide-react';

const BusinessCard = () => {
    return (
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8 gap-16 font-sans">
            <h1 className="text-3xl font-bold text-white mb-4">Diseño Premium SkyCyberWeb</h1>

            {/* FRONT SIDE */}
            <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,243,255,0.15)] group transition-transform hover:scale-105 duration-500">
                {/* Dark Base & Noise */}
                <div className="absolute inset-0 bg-[#050505]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

                {/* Cyber Grid Background */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Glowing Orbs */}
                <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-neon-purple/40 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] bg-neon-cyan/30 rounded-full blur-[80px]"></div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center z-10 p-8 border-[10px] border-white/5 mx-4 my-4 rounded-xl">
                    {/* Tech Decorators */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-cyan"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-purple"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-neon-purple"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-neon-cyan"></div>

                    {/* Logo Area */}
                    <div className="flex items-center gap-4 mb-2 md:scale-125 transform">
                        <div className="relative">
                            <div className="absolute inset-0 bg-neon-cyan blur-md opacity-50"></div>
                            <img src="/favicon.svg" alt="SkyCyberWeb" className="w-20 h-20 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-black italic tracking-tighter text-white mb-1 drop-shadow-lg">
                        SKY<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">CYBER</span>WEB
                    </h2>

                    <div className="flex items-center gap-3 w-full justify-center mb-4">
                        <div className="h-[1px] w-12 bg-gradient-to-l from-neon-purple to-transparent"></div>
                        <span className="text-xs font-mono text-neon-cyan tracking-[0.4em] uppercase">Future Digital Agency</span>
                        <div className="h-[1px] w-12 bg-gradient-to-r from-neon-purple to-transparent"></div>
                    </div>

                    <div className="mt-4 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                        <Globe size={14} className="text-neon-cyan" />
                        <span className="text-sm font-bold text-gray-200 tracking-wide">skycyberweb.com</span>
                    </div>
                </div>
            </div>

            {/* BACK SIDE */}
            <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(189,0,255,0.15)] group transition-transform hover:scale-105 duration-500">
                {/* Background */}
                <div className="absolute inset-0 bg-[#080808]"></div>

                {/* Cyber Lines */}
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-cyan"></div>

                <div className="relative z-10 h-full p-8 flex gap-8">
                    {/* QR Code Section (Left) */}
                    <div className="w-1/3 flex flex-col justify-between border-r border-white/10 pr-6">
                        <div className="aspect-square bg-white p-2 rounded-lg mb-2 relative overflow-hidden">
                            {/* Real QR */}
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://skycyberweb.com"
                                alt="QR Code"
                                className="w-full h-full object-contain"
                            />
                            {/* Scan Me Overlay */}
                            <div className="absolute bottom-1 right-1 bg-neon-cyan text-black text-[8px] font-bold px-1 rounded">SCAN ME</div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-white font-bold text-lg leading-none">HUGO</h3>
                            <p className="text-neon-purple text-xs font-mono">CEO & Founder</p>
                        </div>
                    </div>

                    {/* Info Section (Right) */}
                    <div className="w-2/3 flex flex-col justify-between py-1">

                        {/* Services List */}
                        <div>
                            <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Cpu size={10} /> Capacidades del Sistema
                            </h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_5px_#00f3ff]"></span>
                                    Desarrollo Web High-End
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full shadow-[0_0_5px_#bd00ff]"></span>
                                    Branding & Identidad Digital
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_5px_orange]"></span>
                                    <span className="font-bold text-white">Videografía Dron 4K</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Data */}
                        <div className="space-y-2 mt-4 bg-white/5 p-4 rounded-lg border border-white/5">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <Mail size={14} className="text-neon-cyan" />
                                <span>hugoug10.fly@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <Phone size={14} className="text-neon-cyan" />
                                <span>+34 615 65 55 93</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent flex justify-center items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/30"></div>
                    <div className="w-1 h-1 rounded-full bg-white/30"></div>
                    <div className="w-1 h-1 rounded-full bg-white/30"></div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
