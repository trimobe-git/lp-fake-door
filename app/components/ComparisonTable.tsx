import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why switch to Trimobe?</h2>

        {/* Table Container */}
        <div className="bg-surface-light dark:bg-slate-900 rounded-3xl p-1 shadow-inner border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden text-center">

            {/* Headers */}
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 flex items-center justify-center min-h-[80px]">
              <span className="text-sm sm:text-lg font-bold text-gray-400 leading-tight">Traditional Consultant</span>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[80px]">
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                 <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded">WINNER</span>
              </div>
              <span className="text-sm sm:text-lg font-bold text-primary dark:text-white leading-tight">Trimobe Copilot</span>
            </div>

            {/* Row 1 */}
            <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 mb-1">Time to Draft</span>
              <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">3–6 Weeks</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Time to Draft</span>
              <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">~2 Minutes</span>
            </div>

            {/* Row 2 */}
            <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 mb-1">Cost Per Doc</span>
              <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">$5,000+</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Cost Per Doc</span>
              <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">$19</span>
            </div>

            {/* Row 3 */}
            <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 mb-1">Availability</span>
              <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 leading-tight">Business Hours</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-3 sm:p-4 flex flex-col justify-center min-h-[88px] sm:min-h-[96px]">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Availability</span>
              <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">24/7 Instant</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;