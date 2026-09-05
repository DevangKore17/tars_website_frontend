import React from 'react';
import { DepartmentCard } from './DepartmentCard';

const DEPARTMENTS = [
  {
    id: "01",
    name: "Mechanical",
    desc: "Architects of the physical form. Responsible for CAD modeling, structural analysis, materials selection, and manufacturing the robust chassis and manipulator arms.",
    icon: "⚙️"
  },
  {
    id: "02",
    name: "Electronics",
    desc: "The nervous system. Focused on PCB design, power distribution, microcontrollers, motor drivers, and integrating complex sensor networks.",
    icon: "⚡"
  },
  {
    id: "03",
    name: "Software & AI",
    desc: "The brain. Developing autonomous navigation algorithms, computer vision pipelines, ROS integration, and machine learning models for terrain analysis.",
    icon: "🧠"
  },
  {
    id: "04",
    name: "Management",
    desc: "The mission controllers. Handling sponsorships, public relations, project timelines, logistics, and ensuring the team operates efficiently.",
    icon: "📊"
  }
];

export function Departments() {
  return (
    <section id="departments" className="scroll-mt-32 relative z-10">
      <div className="flex items-center justify-center mb-12 lg:mb-20">
        <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-[#333] mr-6"></div>
        <div className="flex items-center border border-[#333] bg-[#0A0A0A]/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <div className="w-3 h-3 rounded-full bg-tars-green mr-4 shadow-[0_0_8px_rgba(0,255,65,0.8)] animate-pulse"></div>
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-widest drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            Departments
          </h2>
        </div>
        <div className="hidden md:block w-24 h-[1px] bg-gradient-to-l from-transparent to-[#333] ml-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch relative">
        {/* Background Network Lines for Departments Grid */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#333] -translate-y-1/2 -z-10 hidden md:block"></div>
        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#333] -translate-x-1/2 -z-10 hidden md:block"></div>

        {DEPARTMENTS.map((dept) => (
          <DepartmentCard key={dept.id} {...dept} />
        ))}
      </div>
    </section>
  );
}
