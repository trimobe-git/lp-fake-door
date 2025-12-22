import React from 'react';
import { Sparkles, ArrowRight, CheckCircle, Clock, Check, Loader2, Upload, RefreshCw, BadgeCheck, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-20 pb-10 sm:pb-12 lg:pt-40 lg:pb-32 overflow-hidden gradient-mesh transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-green-500" />
          <span className="text-sm font-semibold text-green-700 dark:text-green-300">New — AI Document Assistant</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
          Verra Documentation.<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            From Months to Minutes.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Generate or validate Verra / VCS documents with AI. Save 99% in cost and weeks of work.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4 mb-10 sm:mb-12">
          <div className="w-full max-w-md relative group">
            <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-green-300 to-purple-300 rounded-full blur opacity-25 sm:group-hover:opacity-50 transition duration-200"></div>
            <a href="#lead-capture" className="relative w-full flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white bg-primary active:bg-primary-hover sm:hover:bg-primary-hover rounded-full shadow-xl transition-all sm:hover:-translate-y-0.5 active:scale-[0.98] touch-manipulation">
              Validate Your Document — Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No credit card required
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-500" />
              Takes about 1 minute
            </span>
          </div>

          <a href="#lead-capture" className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white underline decoration-gray-300 underline-offset-4 transition">
            Or generate a PDD for $19
          </a>
        </div>

        {/* Visual Workflow (Desktop) */}
        <div className="relative mt-16 max-w-4xl mx-auto hidden sm:block">
          {/* Connector Line SVG */}
          <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 z-0 pointer-events-none" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 50 C 250 50, 250 50, 320 50" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-gray-700 transition-colors duration-300" />
            <path d="M480 50 C 550 50, 550 50, 620 50" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-gray-700 transition-colors duration-300" />
            <path d="M315 45 L325 50 L315 55" fill="#94A3B8" className="dark:fill-gray-600 transition-colors duration-300" />
            <path d="M615 45 L625 50 L615 55" fill="#94A3B8" className="dark:fill-gray-600 transition-colors duration-300" />
          </svg>

          <div className="flex justify-between items-center relative z-10 px-8">
            
            {/* Card 1: Draft */}
            <div className="w-48 bg-white dark:bg-surface-dark rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-gray-800 p-4 transform rotate-[-3deg] sm:hover:rotate-0 transition duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">W</div>
                <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="h-2 w-full bg-gray-50 dark:bg-gray-800 rounded"></div>
                <div className="h-2 w-3/4 bg-gray-50 dark:bg-gray-800 rounded"></div>
                <div className="h-2 w-5/6 bg-gray-50 dark:bg-gray-800 rounded"></div>
              </div>
              <div className="h-10 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-lg shadow-purple-500/20">
                Draft
              </div>
            </div>

            {/* Middle: AI Processing */}
            <div className="w-40 bg-white dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none dark:border dark:border-gray-800 p-6 flex flex-col items-center justify-center gap-3 transition-colors duration-300">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-gray-100 dark:border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary dark:border-white border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Sparkles className="w-5 h-5 text-primary dark:text-white animate-pulse" />
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">AI Processing...</span>
            </div>

            {/* Card 3: Result */}
            <div className="w-48 bg-white dark:bg-surface-dark rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-gray-800 p-4 transform rotate-[3deg] sm:hover:rotate-0 transition duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-800 dark:text-white">Result</span>
                <BadgeCheck className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-2 mb-6">
                <div className="h-2 w-full bg-green-50 dark:bg-green-900/20 rounded"></div>
                <div className="h-2 w-3/4 bg-green-50 dark:bg-green-900/20 rounded"></div>
                <div className="h-2 w-full bg-green-50 dark:bg-green-900/20 rounded"></div>
              </div>
              <div className="h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-white text-sm font-medium shadow-lg shadow-green-500/20">
                <Check className="w-4 h-4 mr-1" /> Verified
              </div>
            </div>

          </div>
        </div>

        {/* Visual Workflow (Mobile) */}
        <div className="sm:hidden mt-8 space-y-3 max-w-sm mx-auto px-2">
          <div className="p-4 bg-white dark:bg-surface-dark border dark:border-gray-800 rounded-xl shadow-sm flex items-center justify-between min-h-[60px]">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">1. Upload Draft</span>
            <Upload className="w-5 h-5 text-gray-400 flex-shrink-0" />
          </div>
          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-gray-300" />
          </div>
          <div className="p-4 bg-white dark:bg-surface-dark border dark:border-gray-800 rounded-xl shadow-sm flex items-center justify-between min-h-[60px]">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">2. AI Analysis</span>
            <RefreshCw className="w-5 h-5 text-primary dark:text-white animate-spin-slow flex-shrink-0" />
          </div>
          <div className="flex justify-center">
             <ArrowDown className="w-5 h-5 text-gray-300" />
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800 rounded-xl shadow-sm flex items-center justify-between min-h-[60px]">
            <span className="text-sm font-medium text-green-800 dark:text-green-300">3. Verified Result</span>
            <BadgeCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-10 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-slate-900/50 w-full transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6 sm:mb-8">Built for Verra methodologies</p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 opacity-70 sm:opacity-60 transition-all duration-300">
            {/* Verra Methodologies */}
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">VCS</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">VCU</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">REDD+</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">ARR</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">AFOLU</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">CCBS</div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">SD VISta</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;