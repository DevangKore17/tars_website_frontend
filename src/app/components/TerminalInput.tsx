import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface TerminalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TerminalInput({ label, ...props }: TerminalInputProps) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-xs uppercase text-gray-400 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-[#0A0A0A] border-2 border-gray-600 focus:border-tars-green text-white p-3 font-body text-xl outline-none transition-colors caret-tars-green focus:shadow-[0_0_8px_rgba(0,255,65,0.4)]"
      />
    </div>
  );
}

interface TerminalTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TerminalTextarea({ label, ...props }: TerminalTextareaProps) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-xs uppercase text-gray-400 block">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full bg-[#0A0A0A] border-2 border-gray-600 focus:border-tars-green text-white p-3 font-body text-xl outline-none transition-colors resize-none caret-tars-green focus:shadow-[0_0_8px_rgba(0,255,65,0.4)]"
      ></textarea>
    </div>
  );
}
