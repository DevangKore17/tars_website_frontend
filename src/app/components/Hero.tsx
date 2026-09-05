import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { NodeButton } from './NodeButton';
import tarsLogo from '../../imports/TARS_LOGO.png';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Technical Automation and Robotics Society";

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[85vh] text-center pt-10 z-10">

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <div className="relative mb-12 group">
          {/* Pulsing Glow Behind Logo - acting as a core node */}
          <div className="absolute inset-0 bg-tars-green/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none"></div>

          <div className="bg-[#0A0A0A] rounded-full overflow-hidden inline-flex justify-center items-center border-2 border-tars-green shadow-[0_0_30px_rgba(0,255,65,0.4)] relative z-10 transition-transform duration-700 group-hover:scale-105 group-active:scale-105">
            <ImageWithFallback
              src={tarsLogo}
              alt="TARS Logo"
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] object-cover mix-blend-screen opacity-90"
            />
            {/* Inner ring scanner effect */}
            <div className="absolute inset-0 rounded-full border border-tars-green opacity-50 animate-[spin_10s_linear_infinite] border-t-transparent border-r-transparent"></div>
          </div>
        </div>

        <h1 className="font-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 lg:mb-10 leading-tight uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-widest">
          T.A.R.S.
        </h1>

        {/* Typing Animation & Node Indicator */}
        <div className="flex items-center justify-center mb-10 sm:mb-12 lg:mb-16">
          <div className="hidden md:block w-12 h-[1px] bg-gradient-to-r from-transparent to-tars-green mr-4"></div>
          <div className="w-2 h-2 rounded-full bg-tars-green mr-4 shadow-[0_0_8px_rgba(0,255,65,0.8)] animate-ping"></div>
          <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-tars-green tracking-widest max-w-2xl lg:max-w-4xl leading-relaxed min-h-[3rem] md:min-h-[2rem]">
            {typedText}
            <span className="animate-pulse inline-block w-3 h-6 bg-tars-green ml-2 align-middle shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>
          </p>
          <div className="hidden md:block w-12 h-[1px] bg-gradient-to-l from-transparent to-tars-green ml-4"></div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-[#333] -z-10 hidden md:block"></div>
          <NodeButton href="#about" variant="primary">
            INITIALIZE_CONNECTION
          </NodeButton>
          <NodeButton href="#rover" variant="secondary">
            ACCESS_ROVER_NODE
          </NodeButton>
        </div>
      </motion.div>

      {/* Social Links (Floating Left) */}
      <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-8 z-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#333] mx-auto mb-4"></div>
        <a href="https://www.linkedin.com/company/tars-%E2%80%93-technical-automation-robotics-society/?viewAsMember=true " target="_blank" rel="noopener noreferrer" className="relative group text-gray-500 hover:text-tars-green active:text-tars-green transition-all" aria-label="LinkedIn">
          <div className="absolute inset-0 bg-tars-green blur-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
          <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.instagram.com/tars_tsec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="relative group text-gray-500 hover:text-tars-green active:text-tars-green transition-all" aria-label="Instagram">
          <div className="absolute inset-0 bg-tars-green blur-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
          <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
          </svg>
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#333] mx-auto mt-4"></div>
      </div>
    </section>
  );
}
