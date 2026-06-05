import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { RoverModel } from './components/RoverModel';
import { Departments } from './components/Departments';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { TerminalConsole } from './components/TerminalConsole';
import { NodeNetwork } from './components/NodeNetwork';

import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="bg-[#0A0A0A] text-white min-h-screen font-body text-lg md:text-xl lg:text-2xl xl:text-3xl selection:bg-tars-green selection:text-black relative overflow-x-hidden">
        {/* Global Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-tars-green origin-left z-50 shadow-[0_0_10px_rgba(0,255,65,0.8)]"
          style={{ scaleX }}
        />
        <NodeNetwork />
        <Navbar />
        <main className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-32 pb-16 md:pb-24 space-y-24 md:space-y-48 lg:space-y-64 relative z-10">
          <Hero />
          <About />
          <VisionMission />
          <RoverModel />
          <Departments />
          <Team />
          <Contact />
        </main>
        <footer className="border-t border-[#333333] py-8 text-center mt-20 relative z-10 bg-[#0A0A0A]">
          <div className="flex justify-center items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-tars-green mr-2 shadow-[0_0_8px_rgba(0,255,65,0.8)] animate-pulse"></div>
            <p className="font-body text-tars-green text-sm tracking-widest uppercase">
              TARS
            </p>
          </div>
          <p className="font-body text-xs uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} TARS Committee.
          </p>
        </footer>
        <TerminalConsole />
      </div>
    </ReactLenis>
  );
}
