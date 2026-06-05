import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { useLenis } from 'lenis/react';

type TerminalButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'submit';
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export function TerminalButton({ children, variant = 'primary', href, ...props }: TerminalButtonProps) {
  const lenis = useLenis();
  const baseClasses = "inline-block font-heading transition-all cursor-pointer text-center";
  
  const variants = {
    primary: "bg-white text-[#0A0A0A] text-xs md:text-sm lg:text-base xl:text-lg px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border border-[#333333] hover:bg-tars-green active:bg-tars-green hover:text-[#0A0A0A] active:text-[#0A0A0A] hover:border-tars-green active:border-tars-green shadow-[6px_6px_0px_0px_rgba(51,51,51,0.5)] lg:shadow-[8px_8px_0px_0px_rgba(51,51,51,0.5)] hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] active:shadow-[0_0_15px_rgba(0,255,65,0.6)] hover:-translate-y-1 active:-translate-y-1",
    secondary: "bg-[#0A0A0A] text-white text-xs md:text-sm lg:text-base xl:text-lg px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 border border-[#333333] hover:bg-tars-green active:bg-tars-green hover:text-[#0A0A0A] active:text-[#0A0A0A] hover:border-tars-green active:border-tars-green shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] active:shadow-[0_0_15px_rgba(0,255,65,0.6)] hover:-translate-y-1 active:-translate-y-1",
    submit: "w-full bg-white text-[#0A0A0A] text-sm md:text-base lg:text-lg xl:text-xl py-3 md:py-4 lg:py-5 hover:bg-tars-green active:bg-tars-green hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] active:shadow-[0_0_15px_rgba(0,255,65,0.6)] uppercase mt-auto"
  };

  const className = `${baseClasses} ${variants[variant]} ${props.className || ''}`;

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
        {children}
      </a>
    );
  }

  return (
    <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={className}>
      {children}
    </button>
  );
}
