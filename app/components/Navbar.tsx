import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Sparkles className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="font-bold text-xl tracking-tight text-gray-900">Trimobe</span>
          </div>

          <a href="#lead-capture" className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-sm font-medium text-white bg-primary active:bg-primary-hover sm:hover:bg-primary-hover rounded-full transition-all shadow-lg shadow-primary/20 sm:hover:shadow-primary/40 sm:hover:-translate-y-0.5 active:scale-[0.98]">
            Comece Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
