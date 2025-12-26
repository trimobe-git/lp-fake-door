import React from 'react';
import { CalendarClock, Banknote, AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Meses de Atraso",
      description: "Projetos param esperando consultores redigirem e verificarem documentos manualmente."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Custos Exorbitantes",
      description: "Consultores cobram milhares por documentos que são essencialmente templates."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Risco de Rejeição",
      description: "Erros simples de formatação podem levar à rejeição imediata pelos registros."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-red-500 dark:text-red-400 font-semibold tracking-wide uppercase text-sm">O Problema</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">A verificação manual é ineficiente</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">O processo atual de documentação Verra/VCS é lento, caro e propenso a erros humanos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="p-5 sm:p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 sm:hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
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