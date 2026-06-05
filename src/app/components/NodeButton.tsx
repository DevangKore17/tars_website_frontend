import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { useLenis } from 'lenis/react';

type NodeButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'submit';
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export function NodeButton({ children, variant = 'primary', href, ...props }: NodeButtonProps) {
  const lenis = useLenis();
  const baseClasses = "relative inline-flex items-center justify-center font-body tracking-widest transition-all cursor-pointer text-center group overflow-hidden rounded-full";
  
  const variants = {
    primary: "bg-[#0A0A0A] text-tars-green text-lg md:text-xl px-8 py-3 md:px-10 md:py-4 border border-[#333333] hover:border-tars-green active:border-tars-green hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] active:shadow-[0_0_20px_rgba(0,255,65,0.6)]",
    secondary: "bg-[#0A0A0A] text-gray-400 text-lg md:text-xl px-8 py-3 md:px-10 md:py-4 border border-[#333333] hover:text-white active:text-white hover:border-white active:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    submit: "w-full bg-[#0A0A0A] text-tars-green text-xl md:text-2xl py-4 hover:border-tars-green active:border-tars-green hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] active:shadow-[0_0_20px_rgba(0,255,65,0.6)] border border-[#333333] mt-auto"
  };

  const className = `${baseClasses} ${variants[variant]} ${props.className || ''}`;

  const innerContent = (
    <>
      {/* Animated background glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-300 ${variant === 'secondary' ? 'bg-white' : 'bg-tars-green'}`}></div>
      
      {/* Node dot */}
      <div className={`w-2 h-2 rounded-full mr-3 animate-pulse shadow-[0_0_8px_currentColor] ${variant === 'secondary' ? 'bg-white' : 'bg-tars-green'}`}></div>
      
      <span className="relative z-10">{children}</span>
      
      {/* Connecting line on hover */}
      <div className={`absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full group-active:w-full transition-all duration-500 ${variant === 'secondary' ? 'bg-white' : 'bg-tars-green'}`}></div>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} 
        className={className}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(href);
            } else {
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
          }
          if (props.onClick) (props as any).onClick(e);
        }}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={className}>
      {innerContent}
    </button>
  );
}
