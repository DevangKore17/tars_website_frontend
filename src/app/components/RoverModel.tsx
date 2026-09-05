import React from 'react';
import { InteractiveRover } from './InteractiveRover';

export function RoverModel() {
  return (
    <section id="rover" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center border border-[#333333] border-dashed p-6 md:p-10 lg:p-16 xl:p-20 bg-[#0A0A0A] shadow-[-8px_8px_0px_0px_rgba(51,51,51,0.5)] md:shadow-[-12px_12px_0px_0px_rgba(51,51,51,0.5)] xl:shadow-[-20px_20px_0px_0px_rgba(51,51,51,0.5)]">
        
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6 lg:space-y-10">
          <h2 className="font-title text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-white mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            <span className="text-tars-green drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">&gt;_</span> Project_ARES
          </h2>
          <p className="text-gray-300 md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed mb-6 lg:mb-10">
            Meet our flagship rover model, engineered for extreme terrains and semi-autonomous navigation. 
            Equipped with advanced sensor arrays, a custom 6-wheel rocker-bogie suspension, and an onboard AI processing unit.
          </p>
          
          <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-8 font-heading text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400">
            <div className="border-2 border-dashed border-gray-600 p-2 sm:p-4 lg:p-6">
              <span className="text-white block mb-2 lg:mb-4">Drive</span>
              6WD System
            </div>
            <div className="border-2 border-dashed border-gray-600 p-2 sm:p-4 lg:p-6">
              <span className="text-white block mb-2 lg:mb-4">Comms</span>
              2.4GHz / 5.8GHz
            </div>
            <div className="border-2 border-dashed border-gray-600 p-2 sm:p-4 lg:p-6">
              <span className="text-white block mb-2 lg:mb-4">Power</span>
              24V LiPo
            </div>
            <div className="border-2 border-dashed border-gray-600 p-2 sm:p-4 lg:p-6">
              <span className="text-white block mb-2 lg:mb-4">Brain</span>
              Jetson Nano
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="border border-[#333333] border-dotted p-2 lg:p-4 relative overflow-hidden group w-full h-[300px] md:h-[400px] lg:h-[500px]">
             <InteractiveRover />
            {/* HUD Overlay elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white z-20"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white z-20"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white z-20"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white z-20"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
