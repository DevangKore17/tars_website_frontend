import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="scroll-mt-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative border border-[#333333] p-8 md:p-12 lg:p-20 bg-[#0A0A0A]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden group"
      >
        
        {/* Animated Corner Nodes */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-tars-green rounded-full -translate-x-1.5 -translate-y-1.5 shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-tars-green rounded-full translate-x-1.5 -translate-y-1.5 shadow-[0_0_10px_rgba(0,255,65,0.8)] group-hover:animate-ping group-active:animate-ping"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-tars-green rounded-full -translate-x-1.5 translate-y-1.5 shadow-[0_0_10px_rgba(0,255,65,0.8)] group-hover:animate-ping group-active:animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-tars-green rounded-full translate-x-1.5 translate-y-1.5 shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>

        {/* Hover scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tars-green/5 to-transparent h-full w-full -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] group-active:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 group-active:opacity-100 pointer-events-none"></div>

        <div className="flex items-center mb-8 sm:mb-12 border-b border-[#333333] pb-4">
          <div className="w-4 h-4 rounded-full bg-tars-green mr-4 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-widest">
            About Us
          </h2>
        </div>
        
        <div className="space-y-6 lg:space-y-10 text-gray-300 leading-relaxed text-lg md:text-2xl lg:text-3xl font-body">
          <p className="flex">
            <span className="text-tars-green mr-4 mt-1 opacity-70">|-</span>
            <span>
              Welcome to the <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Technical Automation and Robotics Society (TARS)</span>. 
              We are a premier student-led committee dedicated to pushing the boundaries of autonomous systems, 
              robotics engineering, and artificial intelligence.
            </span>
          </p>
          <p className="flex">
            <span className="text-tars-green mr-4 mt-1 opacity-70">|-</span>
            <span>
              Established to bridge the gap between theoretical knowledge and practical execution, we build 
              everything from autonomous rovers to automated smart systems. Our team operates like a well-oiled machine, 
              transforming data streams and raw materials into highly functional, intelligent entities.
            </span>
          </p>
          <p className="text-tars-green drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] animate-pulse flex items-center mt-12">
            <span className="w-2 h-2 rounded-full bg-tars-green mr-3"></span>
            SYSTEM STATUS: ONLINE AND READY.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
