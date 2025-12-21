import React from 'react';
import { ClipboardCheck, FileEdit, Check } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-surface-light dark:bg-surface-dark/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">The Solution</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Meet your AI Compliance Officer</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Validation Card */}
          <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-300">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wide">First Scan Free</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Document Validation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              Upload your draft PDD or Monitoring Report. Trimobe scans it against the latest methodologies (VM0042, etc.) and highlights errors instantly.
            </p>
            
            <div className="space-y-3 mb-8">
              {['Methodology Check', 'Formatting Compliance', 'Data Consistency'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$9 <span className="text-sm font-normal text-gray-500">/ check</span></span>
              <button className="px-6 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition font-medium">Try Free</button>
            </div>
          </div>

          {/* Generation Card */}
          <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-300">
                <FileEdit className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Document Generation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              Don't have a draft? Answer a few questions about your project, and Trimobe generates a complete, methodology-aligned PDD for you.
            </p>
            
            <div className="space-y-3 mb-8">
              {['Instant 40+ Page Drafts', 'VCS & CCB Standards', 'Export to Word'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                   <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">From $19 <span className="text-sm font-normal text-gray-500">/ doc</span></span>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition font-medium shadow-md shadow-primary/10">Start Generating</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;