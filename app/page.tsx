import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ComparisonTable from './components/ComparisonTable';
import LeadCaptureForm from './components/LeadCaptureForm';
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
        
        <section id="lead-capture" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-background-dark transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Solicite Seu Acesso
            </h2>
          </div>
          <LeadCaptureForm />
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 p-4 z-30 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 md:hidden transition-colors duration-300 safe-area-inset-bottom">
        <a href="#lead-capture" className="flex items-center justify-center w-full py-3.5 bg-primary active:bg-primary-hover text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all touch-manipulation">
          Validar Documento — Grátis
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
