import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

// 1. Import your photos here like this:
// import krishPhoto from '../../imports/krish.jpg';
// import diaPhoto from '../../imports/dia.png';


const teamMembers = [
  // 2. Add the imported photo to the 'image' property
  { role: 'Chair Person', name: 'Krish Ramnani', image: undefined /* replace undefined with krishPhoto */ },
  { role: 'Vice Chairperson', name: 'Dia Parekh', image: undefined },
  { role: 'Technical Head', name: 'Kshitij Nirdhar', image: undefined },
  { role: 'Joint Technical Head', name: 'Krish Jagwani', image: undefined },
  { role: 'Embedded Head', name: 'Akshay Hiremath', image: undefined },
  { role: 'Software Head', name: 'Devang Kore', image: undefined },
  { role: 'Operations and Marketing Head', name: 'Tanvir Singh Kohli', image: undefined },
  { role: 'Design Head', name: 'Saumya Sinha', image: undefined },
  { role: 'Project Design Head', name: 'Sayam Jain', image: undefined },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-32 relative z-10">
      <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-6"
        >
          <div className="w-4 h-4 rounded-full bg-tars-green mr-4 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Core Nodes
          </h2>
        </motion.div>
        <p className="text-gray-300 md:text-xl lg:text-2xl font-heading tracking-widest text-center max-w-2xl">
          The operational minds behind the autonomous systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative">

        {/* Abstract network background lines for team grid */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent -translate-y-1/2 -z-10 hidden lg:block"></div>
        <div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-[#333] to-transparent -translate-x-1/2 -z-10 hidden lg:block"></div>
        <div className="absolute top-0 left-2/3 h-full w-[1px] bg-gradient-to-b from-transparent via-[#333] to-transparent -translate-x-1/2 -z-10 hidden lg:block"></div>

        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full group">
              <div className="relative border border-[#333333] p-6 md:p-8 bg-[#0A0A0A]/80 backdrop-blur-sm hover:border-tars-green/50 active:border-tars-green/50 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] group-active:shadow-[0_0_20px_rgba(0,255,65,0.15)]">

                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-tars-green/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

                {/* Corner Nodes */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_5px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all"></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_5px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_5px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_5px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all"></div>

                {/* Profile Image Node */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#333] mb-6 flex items-center justify-center bg-[#050505] overflow-hidden group-hover:border-tars-green group-active:border-tars-green transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,0.8)] z-10">
                  {/* Node scanning effect */}
                  <div className="absolute inset-0 border border-tars-green rounded-full opacity-0 group-hover:opacity-50 group-active:opacity-50 animate-[spin_4s_linear_infinite] border-t-transparent border-l-transparent"></div>
                  <div className="absolute inset-0 bg-tars-green/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity rounded-full animate-pulse z-20 pointer-events-none"></div>

                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <svg className="w-10 h-10 text-[#333333] group-hover:text-tars-green group-active:text-tars-green transition-colors duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M12 14c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                    </svg>
                  )}
                </div>

                {/* Role */}
                <div className="flex items-center justify-center mb-3 relative z-10">
                  <div className="w-4 h-[1px] bg-tars-green mr-2 opacity-50"></div>
                  <h3 className="text-tars-green text-sm md:text-base font-heading tracking-widest uppercase text-center">
                    {member.role}
                  </h3>
                  <div className="w-4 h-[1px] bg-tars-green ml-2 opacity-50"></div>
                </div>

                {/* Name */}
                <p className="text-gray-400 group-hover:text-white group-active:text-white text-xl md:text-2xl uppercase tracking-widest font-body transition-colors relative z-10">
                  [{member.name}]
                </p>

              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
