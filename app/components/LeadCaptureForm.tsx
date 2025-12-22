'use client';

import React, { useState } from 'react';
import { CheckCircle, Loader2, Mail, User, Globe, ChevronDown } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  country: string;
}

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const countries = [
    { value: '', label: 'Select your country' },
    { value: 'BR', label: 'Brazil' },
    { value: 'US', label: 'United States' },
    { value: 'PT', label: 'Portugal' },
    { value: 'ES', label: 'Spain' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
    { value: 'IT', label: 'Italy' },
    { value: 'CA', label: 'Canada' },
    { value: 'MX', label: 'Mexico' },
    { value: 'AR', label: 'Argentina' },
    { value: 'OTHER', label: 'Other' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação
    if (!formData.name || !formData.email || !formData.country) {
      setError('Please fill in all fields.');
      return;
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/brevo/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form. Please try again.');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', country: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8 sm:p-12 text-center transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Thanks for signing up!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your request was successfully sent, and you'll receive your Trimobe access by email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8 sm:p-12 transition-all duration-300">
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Fill in your details to get access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* País */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <div className="relative">
              <div className="hidden sm:flex absolute inset-y-0 left-0 pl-4 items-center pointer-events-none">
                <Globe className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full pl-4 sm:pl-12 pr-12 py-3.5 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white focus:border-transparent transition-all duration-200 appearance-none cursor-pointer text-base"
                disabled={isLoading}
                required
              >
                {countries.map((country, index) => (
                  <option
                    key={country.value}
                    value={country.value}
                    disabled={index === 0}
                  >
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-hover dark:bg-white dark:hover:bg-gray-100 text-white dark:text-primary font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Request Access
              </>
            )}
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
          No credit card required • 1 free validation included
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
