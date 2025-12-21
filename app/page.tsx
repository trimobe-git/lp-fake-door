import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ComparisonTable />
        
        <section className="py-20 bg-gray-50 transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Transparency & Privacy</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your project data is secure. We use enterprise-grade encryption and do not use your proprietary data to train our public models without permission.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-sm font-medium text-primary border-b border-primary hover:opacity-75 transition-opacity">Read Security Policy</a>
              <a href="#" className="text-sm font-medium text-primary border-b border-primary hover:opacity-75 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-safe z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden transition-colors duration-300 safe-area-inset-bottom">
        <a href="#" className="flex items-center justify-center w-full py-3.5 bg-primary active:bg-primary-hover text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all touch-manipulation">
          Validate Document — Free
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
