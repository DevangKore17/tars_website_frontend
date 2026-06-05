import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Rover', href: '#rover' },
    { name: 'Depts', href: '#departments' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,255,65,0.1)] border-b border-[#333]' : 'bg-transparent'
      }`}
    >
      {/* Animated network line under navbar */}
      <div className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-tars-green to-transparent transition-all duration-1000 ${scrolled ? 'w-full opacity-50' : 'w-0 opacity-0'}`}></div>

      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 h-20 md:h-24 flex items-center justify-between relative">
        
        {/* Logo Area */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center group"
        >
          <div className="w-3 h-3 rounded-full bg-tars-green mr-3 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
          <span className="font-body text-2xl md:text-3xl tracking-widest text-white group-hover:text-tars-green group-active:text-tars-green transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            TARS
          </span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative font-body text-lg lg:text-xl uppercase text-gray-400 hover:text-tars-green active:text-tars-green px-4 py-2 transition-all group overflow-hidden"
              >
                {link.name}
                {/* Hover line effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-tars-green transition-all duration-300 group-hover:w-full group-active:w-full shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>
              </a>
              {/* Connecting dot between links */}
              {index < navLinks.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-[#333] mx-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="flex items-center text-tars-green focus:outline-none group"
          >
            <div className={`w-2 h-2 rounded-full mr-2 transition-all ${isMobileMenuOpen ? 'bg-white shadow-[0_0_8px_white]' : 'bg-tars-green shadow-[0_0_8px_rgba(0,255,65,0.8)]'}`}></div>
            <span className="font-body text-xl">{isMobileMenuOpen ? 'CLOSE MENU' : 'MENU'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-tars-green flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center font-body text-xl uppercase text-gray-300 hover:text-tars-green active:text-tars-green px-8 py-5 border-b border-[#111] transition-all group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-4 group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all"></div>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
