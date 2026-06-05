import React from 'react';
import Tilt from 'react-parallax-tilt';

export function VisionMission() {
  return (
    <section id="vision" className="relative z-10 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 lg:gap-16 relative">
        
        {/* Full-Width Directives Box */}
        <div className="relative border border-[#333333] p-8 md:p-12 lg:p-16 group hover:border-tars-green/50 active:border-tars-green/50 transition-colors duration-500 bg-[#0A0A0A]/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-tars-green/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
          
          {/* Nodes */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all duration-300"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all duration-300"></div>

          <div className="relative z-10 flex items-center mb-6 lg:mb-8 border-b border-[#333] pb-4">
            <div className="w-4 h-4 rounded-full bg-tars-green mr-4 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
            <h2 className="font-body text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              Directives
            </h2>
          </div>
          <p className="relative z-10 text-gray-300 font-body text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide border-l-2 border-[#333] group-hover:border-tars-green group-active:border-tars-green pl-4 transition-colors duration-500">
            The fundamental protocols and objectives driving the Technical Automation and Robotics Society.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          
          {/* Vision Node */}
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} transitionSpeed={2000} className="h-full flex flex-col">
            <div className="relative h-full border border-[#333333] p-8 md:p-12 group hover:border-tars-green/50 active:border-tars-green/50 transition-colors duration-500 bg-[#0A0A0A]/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-tars-green/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
              
              {/* Nodes */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green transition-all duration-300 shadow-[0_0_8px_rgba(0,255,65,0)] group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green transition-all duration-300 shadow-[0_0_8px_rgba(0,255,65,0)] group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>

              <div className="flex items-center mb-6 lg:mb-8 border-b border-[#333] pb-4 relative z-10">
                <span className="font-body text-tars-green text-sm tracking-widest mr-3 border border-tars-green px-2 py-1 rounded-sm shadow-[0_0_5px_rgba(0,255,65,0.3)]">01</span>
                <h3 className="font-body text-3xl lg:text-4xl uppercase text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  Vision
                </h3>
              </div>
              <div className="mt-auto text-gray-300 text-lg md:text-xl font-body leading-relaxed relative z-10">
                <p className="border-l-2 border-[#333] group-hover:border-tars-green group-active:border-tars-green pl-4 transition-colors duration-500">
                  To be at the forefront of robotic innovation, cultivating a generation of engineers 
                  who seamlessly blend mechanics, electronics, and software to solve complex global challenges 
                  through automation.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Mission Node */}
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} transitionSpeed={2000} className="h-full flex flex-col">
            <div className="relative h-full border border-[#333333] p-8 md:p-12 group hover:border-tars-green/50 active:border-tars-green/50 transition-colors duration-500 bg-[#0A0A0A]/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-tars-green/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
              
              {/* Nodes */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green transition-all duration-300 shadow-[0_0_8px_rgba(0,255,65,0)] group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green transition-all duration-300 shadow-[0_0_8px_rgba(0,255,65,0)] group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>

              <div className="flex items-center mb-6 lg:mb-8 border-b border-[#333] pb-4 relative z-10">
                <span className="font-body text-tars-green text-sm tracking-widest mr-3 border border-tars-green px-2 py-1 rounded-sm shadow-[0_0_5px_rgba(0,255,65,0.3)]">02</span>
                <h3 className="font-body text-3xl lg:text-4xl uppercase text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  Mission
                </h3>
              </div>
              <div className="mt-auto text-gray-300 text-lg md:text-xl font-body leading-relaxed relative z-10">
                <ul className="space-y-4 lg:space-y-6 list-none border-l-2 border-[#333] group-hover:border-tars-green group-active:border-tars-green pl-4 transition-colors duration-500">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-tars-green mt-2.5 mr-3 shadow-[0_0_5px_rgba(0,255,65,0.8)] min-w-[6px]"></div>
                    <span>Design and deploy functional, state-of-the-art robotic systems.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-tars-green mt-2.5 mr-3 shadow-[0_0_5px_rgba(0,255,65,0.8)] min-w-[6px]"></div>
                    <span>Foster a culture of hands-on learning and technical excellence.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-tars-green mt-2.5 mr-3 shadow-[0_0_5px_rgba(0,255,65,0.8)] min-w-[6px]"></div>
                    <span>Compete globally in rover and automation challenges.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
