import React from 'react';
import { Sparkles, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pb-20 md:pb-12 pt-12 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Sparkles className="text-primary dark:text-white w-5 h-5" />
          <span className="font-bold text-lg text-gray-900 dark:text-white">Trimobe</span>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2023 Trimobe Inc. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2">
          <a href="mailto:contato@trimobe.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">contato@trimobe.com</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;