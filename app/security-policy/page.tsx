import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Database, Eye, Server, AlertTriangle } from 'lucide-react';

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary dark:text-white" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Security Policy
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: December 21, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At Trimobe, we take the security of your data seriously. This Security Policy outlines the measures we implement to protect your information and ensure the confidentiality, integrity, and availability of our services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For questions about our security practices, please contact us at{' '}
            <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">
              contato@trimobe.com
            </a>
          </p>
        </section>

        {/* Data Encryption */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Data Encryption
            </h2>
          </div>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Encryption in Transit
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All data transmitted between your browser and our servers is encrypted using industry-standard TLS 1.3 (Transport Layer Security). This ensures that your documents, personal information, and credentials are protected from interception during transmission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Encryption at Rest
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All data stored on our servers, including uploaded documents and user information, is encrypted at rest using AES-256 encryption. This protects your data even in the unlikely event of physical server compromise.
            </p>
          </div>
        </section>

        {/* Data Storage & Handling */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Data Storage &amp; Handling
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Document Processing
              </h3>
              <p>
                Your uploaded documents are processed using secure AI pipelines. Documents are temporarily stored during processing and are automatically deleted after 30 days unless you choose to save them in your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data Retention
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information: Retained for the duration of your account plus 90 days after deletion</li>
                <li>Processed documents: 30 days after upload (configurable in account settings)</li>
                <li>Transaction records: 7 years (for compliance purposes)</li>
                <li>System logs: 90 days</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Geographic Location
              </h3>
              <p>
                Our primary data centers are located in secure facilities with redundant power, cooling, and network connectivity. We comply with data residency requirements as applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Access Controls */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Access Controls
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Authentication
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Strong password requirements enforced</li>
                <li>Multi-factor authentication (MFA) available for all users</li>
                <li>Session timeout after 30 minutes of inactivity</li>
                <li>Account lockout after 5 failed login attempts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Employee Access
              </h3>
              <p>
                Access to customer data is restricted on a need-to-know basis. All Trimobe employees with data access:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Undergo background checks</li>
                <li>Sign confidentiality agreements</li>
                <li>Complete security training annually</li>
                <li>Use multi-factor authentication for all systems</li>
                <li>Access is logged and audited regularly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Infrastructure Security
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cloud Infrastructure
              </h3>
              <p>
                Our services are hosted on enterprise-grade cloud infrastructure with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>99.9% uptime SLA</li>
                <li>Automated backups every 6 hours</li>
                <li>Geographic redundancy across multiple regions</li>
                <li>DDoS protection and mitigation</li>
                <li>Intrusion detection and prevention systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Network Security
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Firewalls configured with least-privilege access rules</li>
                <li>Network segmentation to isolate sensitive systems</li>
                <li>Regular vulnerability scanning and penetration testing</li>
                <li>Web Application Firewall (WAF) to prevent common attacks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Application Security
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure development lifecycle (SDLC) practices</li>
                <li>Code reviews and automated security testing</li>
                <li>Dependency scanning for known vulnerabilities</li>
                <li>Regular security updates and patches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Incident Response
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              In the event of a security incident, we follow a structured incident response plan:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Detection:</strong> Automated monitoring systems and security teams detect potential incidents</li>
              <li><strong>Assessment:</strong> Incident severity and impact are evaluated</li>
              <li><strong>Containment:</strong> Affected systems are isolated to prevent further damage</li>
              <li><strong>Investigation:</strong> Root cause analysis is performed</li>
              <li><strong>Remediation:</strong> Vulnerabilities are patched and systems restored</li>
              <li><strong>Notification:</strong> Affected users are notified within 72 hours if personal data is compromised</li>
              <li><strong>Post-Incident Review:</strong> Process improvements are implemented</li>
            </ol>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Compliance &amp; Certifications
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Trimobe is committed to maintaining compliance with relevant data protection regulations and industry standards:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>GDPR (General Data Protection Regulation) - EU data protection compliance</li>
              <li>SOC 2 Type II - Security and availability controls (certification in progress)</li>
              <li>ISO 27001 - Information security management (certification in progress)</li>
              <li>CCPA (California Consumer Privacy Act) - California privacy compliance</li>
            </ul>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Third-Party Services
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              We carefully vet all third-party service providers that process customer data. Our vendors must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Demonstrate appropriate security controls</li>
              <li>Sign data processing agreements</li>
              <li>Comply with applicable data protection regulations</li>
              <li>Undergo regular security assessments</li>
            </ul>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your Security Responsibilities
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Security is a shared responsibility. To protect your account and data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use a strong, unique password for your Trimobe account</li>
              <li>Enable multi-factor authentication</li>
              <li>Keep your login credentials confidential</li>
              <li>Log out from shared or public computers</li>
              <li>Report suspicious activity immediately to contato@trimobe.com</li>
              <li>Keep your contact information up to date for security notifications</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Security Contact
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you discover a security vulnerability or have security concerns, please report them immediately:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Subject Line:</strong> [SECURITY] - Brief description of the issue</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              We take all security reports seriously and will respond within 48 hours. We appreciate responsible disclosure and will acknowledge contributors who help us improve our security.
            </p>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Policy Updates
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this Security Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated to users via email at least 30 days before they take effect. Continued use of Trimobe services after changes become effective constitutes acceptance of the updated policy.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Trimobe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
