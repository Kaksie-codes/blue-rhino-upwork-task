const ScrollIndicator = () => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      className="absolute bottom-4 lg:bottom-8 right-4 group flex h-16 w-10 items-center justify-center rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
      aria-label="Scroll down"
    >
      <svg 
        className="h-6 w-6 animate-bounce text-white transition-transform duration-300 group-hover:translate-y-1" 
        fill="none" 
        strokeWidth="2" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
};

export default ScrollIndicator;