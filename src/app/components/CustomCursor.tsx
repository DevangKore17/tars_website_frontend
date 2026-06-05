import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let animationFrameId: number;
    
    const updatePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother cursor updates
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsHidden(false);
        
        // Check if hovering over a clickable element
        const target = e.target as HTMLElement;
        const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                            target.tagName.toLowerCase() === 'a' || 
                            target.tagName.toLowerCase() === 'button';
        setIsPointer(isClickable);
      });
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className="fixed pointer-events-none z-[100] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
      }}
    >
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-tars-green rounded-none transition-all duration-300 ${isPointer ? 'w-10 h-10 rotate-45 border-dashed shadow-[0_0_10px_rgba(0,255,65,0.8)] bg-tars-green/10' : 'border-solid shadow-[0_0_5px_rgba(0,255,65,0.4)]'}`}></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-tars-green drop-shadow-[0_0_3px_rgba(0,255,65,1)]"></div>
    </div>
  );
}
