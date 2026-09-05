import React from 'react';
import Tilt from 'react-parallax-tilt';

interface DepartmentCardProps {
  id: string;
  name: string;
  desc: string;
  icon: string;
}

export function DepartmentCard({ id, name, desc, icon }: DepartmentCardProps) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full group">
      <div className="relative border border-[#333333] p-8 md:p-10 lg:p-12 xl:p-16 bg-[#0A0A0A]/80 backdrop-blur-sm hover:border-tars-green/80 active:border-tars-green/80 transition-all duration-500 flex flex-col h-full overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(0,255,65,0.2)] group-active:shadow-[0_0_25px_rgba(0,255,65,0.2)]">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-tars-green/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

        {/* Node Connectors */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-tars-green opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-tars-green opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>

        <div className="relative z-10 flex justify-between items-start mb-6 lg:mb-8 border-b border-[#333] pb-4 group-hover:border-tars-green/30 group-active:border-tars-green/30 transition-colors duration-500">
          <div className="flex items-center">
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all mr-4">{icon}</span>
            <div className="w-px h-8 bg-[#333] group-hover:bg-tars-green/50 group-active:bg-tars-green/50 transition-colors mx-2"></div>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] mb-2 transition-all"></div>
            <span className="font-heading text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 group-hover:text-tars-green group-active:text-tars-green transition-all tracking-widest">
              {id}
            </span>
          </div>
        </div>
        
        <h3 className="relative z-10 font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase mb-4 lg:mb-6 tracking-widest text-white group-hover:text-tars-green group-active:text-tars-green transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          {name}
        </h3>
        
        <p className="relative z-10 md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-400 group-hover:text-gray-300 group-active:text-gray-300 flex-grow font-heading">
          {desc}
        </p>
      </div>
    </Tilt>
  );
}
