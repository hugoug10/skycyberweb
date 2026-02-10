import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BusinessCard from './pages/BusinessCard';

function App() {
  return (
    <Router>
      <div className="bg-[var(--color-dark-bg)] min-h-screen text-white font-sans selection:bg-[var(--color-neon-cyan)] selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/terminos" element={<TermsPage />} />
            <Route path="/tarjeta" element={<BusinessCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


