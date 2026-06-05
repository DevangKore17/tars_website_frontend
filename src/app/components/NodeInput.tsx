import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface NodeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function NodeInput({ label, ...props }: NodeInputProps) {
  return (
    <div className="space-y-2 group relative">
      <label className="font-body text-sm md:text-base lg:text-lg uppercase text-tars-green block flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-tars-green mr-2 opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className="w-full bg-[#050505] border-b-2 border-[#333] focus:border-tars-green text-white p-3 font-body text-xl outline-none transition-all caret-tars-green rounded-t-md hover:bg-[#111] active:bg-[#111] focus:bg-[#111]"
        />
        <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-tars-green transition-all duration-300 group-focus-within:w-full group-focus-within:-translate-x-1/2 shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
      </div>
    </div>
  );
}

interface NodeTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function NodeTextarea({ label, ...props }: NodeTextareaProps) {
  return (
    <div className="space-y-2 group relative flex-grow flex flex-col">
      <label className="font-body text-sm md:text-base lg:text-lg uppercase text-tars-green block flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-tars-green mr-2 opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
        {label}
      </label>
      <div className="relative flex-grow flex flex-col">
        <textarea
          {...props}
          className="w-full flex-grow bg-[#050505] border-b-2 border-[#333] focus:border-tars-green text-white p-3 font-body text-xl outline-none transition-all resize-none caret-tars-green rounded-t-md hover:bg-[#111] active:bg-[#111] focus:bg-[#111]"
        ></textarea>
        <div className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-tars-green transition-all duration-300 group-focus-within:w-full group-focus-within:-translate-x-1/2 shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
      </div>
    </div>
  );
}
