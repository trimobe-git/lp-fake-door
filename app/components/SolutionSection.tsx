import React from 'react';
import { ClipboardCheck, FileEdit, Check } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-surface-light dark:bg-surface-dark/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">A Solução</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Conheça seu Assistente de Conformidade com IA</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Validation Card */}
          <div className="group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm sm:hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-300">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wide">Primeira Verificação Grátis</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Validação de Documentos</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              Envie seu rascunho de PDD ou Relatório de Monitoramento. A Trimobe verifica contra as metodologias mais recentes (VM0042, etc.) e destaca erros instantaneamente.
            </p>

            <div className="space-y-3 mb-8">
              {['Verificação de Metodologia', 'Conformidade de Formatação', 'Consistência de Dados'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">R$ 9 <span className="text-sm font-normal text-gray-500">/ verificação</span></span>
              <a href="#lead-capture" className="px-6 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg active:bg-purple-100 sm:hover:bg-purple-100 dark:active:bg-purple-900/40 dark:sm:hover:bg-purple-900/40 transition font-medium touch-manipulation">Testar Grátis</a>
            </div>
          </div>

          {/* Generation Card */}
          <div className="group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm sm:hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-300">
                <FileEdit className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full uppercase tracking-wide">Mais Popular</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Geração de Documentos</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              Não tem um rascunho? Responda algumas perguntas sobre seu projeto, e a Trimobe gera um PDD completo e alinhado com a metodologia para você.
            </p>

            <div className="space-y-3 mb-8">
              {['Rascunhos Instantâneos de 40+ Páginas', 'Padrões VCS & CCB', 'Exportar para Word'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                   <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">A partir de R$ 19 <span className="text-sm font-normal text-gray-500">/ doc</span></span>
              <a href="#lead-capture" className="px-6 py-2 bg-primary text-white rounded-lg active:bg-primary-hover sm:hover:bg-primary-hover transition font-medium shadow-md shadow-primary/10 touch-manipulation">Começar a Gerar</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;