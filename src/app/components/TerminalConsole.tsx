import React, { useState, useRef, useEffect } from 'react';

export function TerminalConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; response: string | React.ReactNode }[]>([
    { command: '', response: 'NEURAL_NETWORK_INTERFACE v2.1.0\nEstablishing connection to core nodes...\nConnection established.\nType "help" for a list of available nodes.' }
  ]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    
    let response: string | React.ReactNode = '';
    
    switch (cmd) {
      case 'help':
        response = 'Available network nodes:\n  help    - Display network topography\n  status  - Check node integrity\n  whoami  - Identify connected entity\n  clear   - Flush node memory\n  sudo    - Elevate neural access (restricted)';
        break;
      case 'status':
        response = 'Node integrity: 100%. Synaptic connections stable. Latency: 4ms.';
        break;
      case 'whoami':
        response = 'entity_unknown_992';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo rm -rf /':
        response = <span className="text-red-500 font-bold animate-pulse">CRITICAL: NEURAL SEVERANCE DENIED. BREACH ATTEMPT LOGGED.</span>;
        break;
      case 'sudo':
        response = 'entity_unknown_992 lacks required synaptic clearance. Incident logged.';
        break;
      case 'ls':
        response = 'node_01.dat  vision_cluster/  rover_synapse.gltf  core_memory/';
        break;
      default:
        response = `unrecognized_signal: ${cmd}: command dropped from network`;
    }
    
    setHistory([...history, { command: input, response }]);
    setInput('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#0A0A0A] border border-[#333333] hover:border-tars-green active:border-tars-green text-tars-green p-4 rounded-full shadow-[0_0_15px_rgba(51,51,51,0.8)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] active:shadow-[0_0_20px_rgba(0,255,65,0.6)] transition-all group overflow-hidden"
        aria-label="Open Neural Interface"
      >
        <div className="absolute inset-0 border-2 border-tars-green rounded-full opacity-0 group-hover:animate-ping group-active:animate-ping"></div>
        <svg className="w-6 h-6 group-hover:scale-110 group-active:scale-110 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeWidth="2" className="animate-pulse" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v4m0 6v4m-7-7h4m6 0h4" />
          <circle cx="12" cy="5" r="1" fill="currentColor" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
        </svg>
      </button>

      <div className={`fixed bottom-24 right-6 w-[90vw] md:w-[500px] h-[400px] bg-[#0A0A0A] border border-[#333333] shadow-[-8px_8px_0px_0px_rgba(51,51,51,0.5)] z-50 flex flex-col transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Neural Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333333" strokeWidth="1"/>
                <circle cx="0" cy="0" r="2" fill="#00FF41" />
                <circle cx="40" cy="40" r="2" fill="#00FF41" />
                <circle cx="0" cy="40" r="1.5" fill="#333333" />
                <circle cx="40" cy="0" r="1.5" fill="#333333" />
                <path d="M 0 0 L 40 40" fill="none" stroke="#333333" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#333333] p-2 bg-[#050505] relative z-10">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-tars-green mr-2 animate-pulse shadow-[0_0_5px_rgba(0,255,65,0.8)]"></div>
            <span className="font-body text-tars-green text-sm tracking-widest">NEURAL_NODE_INTERFACE // </span>
            <span className="font-body text-gray-500 text-xs ml-2">ACTV</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-tars-green active:text-tars-green">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Output */}
        <div className="flex-grow p-4 overflow-y-auto font-body text-lg text-gray-300 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent relative z-10">
          {history.map((entry, i) => (
            <div key={i} className="mb-4">
              {entry.command && (
                <div className="flex text-gray-400 items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-tars-green mr-2 shadow-[0_0_8px_rgba(0,255,65,0.8)] relative">
                    <div className="absolute inset-0 bg-tars-green rounded-full animate-ping opacity-50"></div>
                  </div>
                  <div className="w-6 h-px bg-tars-green mr-2 opacity-50"></div>
                  <span className="text-tars-green mr-2">[SIGNAL_IN]:</span>
                  <span>{entry.command}</span>
                </div>
              )}
              <div className="flex relative pl-3 border-l border-[#333] ml-1">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#333]"></div>
                <div className="whitespace-pre-wrap leading-tight pt-1 text-gray-300">{entry.response}</div>
              </div>
            </div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>
        
        {/* Input */}
        <form onSubmit={handleCommand} className="border-t border-[#333333] p-3 flex items-center bg-[#050505] relative z-10">
          <div className="w-2 h-2 rounded-full bg-tars-green mr-2 animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
          <div className="w-4 h-px bg-tars-green mr-2"></div>
          <span className="text-tars-green mr-2 font-body text-lg">[AWAITING_SIGNAL]:</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none font-body text-lg text-white"
            spellCheck={false}
          />
        </form>
      </div>
    </>
  );
}
