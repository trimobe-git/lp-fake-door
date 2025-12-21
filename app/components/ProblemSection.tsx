import React from 'react';
import { CalendarClock, Banknote, AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Months of Delay",
      description: "Projects stall waiting for consultants to draft and verify documents manually."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Exorbitant Costs",
      description: "Consultants charge thousands for documents that are essentially templates."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Rejection Risk",
      description: "Simple formatting errors can lead to immediate rejection by registries."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 dark:text-red-400 font-semibold tracking-wide uppercase text-sm">The Problem</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Manual verification is broken</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">The current Verr/VCS documentation process is slow, expensive, and prone to human error.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                {problem.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;