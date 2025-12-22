import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Users, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Trimobe's AI-powered document generation and validation services for Verra/VCS carbon credit documentation. Learn about account registration, pricing, AI-generated content limitations, and user responsibilities.",
  openGraph: {
    title: "Terms of Service | Trimobe",
    description: "Terms of Service for Trimobe's AI-powered document generation and validation services for Verra/VCS carbon credit documentation.",
    url: "https://trimobe.com/terms-of-service",
  },
  alternates: {
    canonical: "https://trimobe.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 text-primary dark:text-white" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: December 21, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome to Trimobe. These Terms of Service ("Terms") govern your access to and use of Trimobe's AI-powered document generation and validation services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Please read these Terms carefully. If you do not agree to these Terms, do not use our Services.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              By creating an account, accessing our website, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Security Policy.
            </p>
            <p>
              If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </div>
        </section>

        {/* Account Registration */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              2. Account Registration &amp; Eligibility
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.1 Eligibility
              </h3>
              <p>
                You must be at least 18 years old and capable of forming a binding contract to use our Services. By using Trimobe, you represent that you meet these requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.2 Account Creation
              </h3>
              <p>To access certain features, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as necessary</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.3 Account Termination
              </h3>
              <p>
                We reserve the right to suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or any reason we deem necessary to protect our Services or other users.
              </p>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. Description of Services
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Trimobe provides AI-powered services for generating and validating Verra/VCS carbon credit documentation, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Document validation against Verra methodologies</li>
              <li>Automated generation of Project Description Documents (PDDs)</li>
              <li>Monitoring report generation and verification</li>
              <li>Compliance checking for VCS, CCB, and other standards</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice.
            </p>
          </div>
        </section>

        {/* Pricing and Payment */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              4. Pricing &amp; Payment
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.1 Fees
              </h3>
              <p>
                Current pricing is available on our website. We offer:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Free tier: One free document validation per account</li>
                <li>Pay-per-use: $9 per document validation, $19+ per document generation</li>
                <li>Subscription plans: Custom pricing for high-volume users (contact us)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.2 Payment Terms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All fees are in USD unless otherwise stated</li>
                <li>Payment is required before service delivery for pay-per-use services</li>
                <li>Subscription fees are billed monthly or annually in advance</li>
                <li>We accept major credit cards and other payment methods as displayed</li>
                <li>All sales are final unless otherwise required by law</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.3 Price Changes
              </h3>
              <p>
                We may change our pricing at any time. For subscription users, price changes will take effect at the next billing cycle. We will provide at least 30 days notice of any price increases.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.4 Refunds
              </h3>
              <p>
                Refunds are generally not available for completed services. In cases of technical failures or service issues on our end, we may provide credits or refunds at our discretion. Contact <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a> for refund requests.
              </p>
            </div>
          </div>
        </section>

        {/* User Content and Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. User Content &amp; Responsibilities
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.1 Your Content
              </h3>
              <p>
                You retain all rights to the documents and data you upload to Trimobe ("Your Content"). By uploading Your Content, you grant us a limited license to process, store, and analyze it solely for the purpose of providing our Services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.2 Content Restrictions
              </h3>
              <p>You agree not to upload or submit content that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Infringes on intellectual property rights of others</li>
                <li>Contains malware, viruses, or harmful code</li>
                <li>Is illegal, fraudulent, or deceptive</li>
                <li>Contains personally identifiable information of others without consent</li>
                <li>Violates any applicable laws or regulations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.3 Prohibited Uses
              </h3>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Use our Services for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble our Services</li>
                <li>Use automated tools to access our Services (scraping, bots, etc.)</li>
                <li>Resell or redistribute our Services without authorization</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI-Generated Content */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              6. AI-Generated Content &amp; Limitations
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.1 Nature of AI Services
              </h3>
              <p>
                Our Services use artificial intelligence and machine learning to generate and validate documents. While we strive for accuracy, AI-generated content may contain errors, omissions, or inconsistencies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.2 Your Responsibility
              </h3>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                IMPORTANT: You are solely responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reviewing all AI-generated or validated documents for accuracy</li>
                <li>Ensuring compliance with applicable Verra methodologies and standards</li>
                <li>Verifying all data, calculations, and claims before submission</li>
                <li>Obtaining professional review when required by regulations</li>
                <li>The final content and accuracy of documents submitted to registries</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.3 No Professional Advice
              </h3>
              <p>
                Trimobe does not provide legal, financial, or professional consulting services. Our AI tools are provided for informational and document preparation purposes only. You should consult with qualified professionals for advice specific to your project.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.4 No Guarantee of Approval
              </h3>
              <p>
                Use of our Services does not guarantee that your documents will be approved by Verra, registries, or other validation bodies. We are not responsible for rejections, delays, or any consequences resulting from the use of our Services.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Intellectual Property
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.1 Trimobe's IP
              </h3>
              <p>
                All rights, title, and interest in the Services, including our website, software, AI models, algorithms, trademarks, and content (excluding Your Content), are owned by Trimobe and protected by intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.2 License to Use
              </h3>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.3 AI Output Ownership
              </h3>
              <p>
                For paid services, you own the AI-generated documents we create for you, subject to the limitations outlined in Section 6. For free tier services, we retain the right to use anonymized data for improving our AI models.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy and Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Privacy &amp; Data Protection
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our Security Policy. By using our Services, you consent to our data practices as described in that policy.
            </p>
            <p>
              We comply with applicable data protection laws including GDPR and CCPA. You have rights regarding your personal data, including the right to access, correct, delete, or export your data. Contact <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a> to exercise these rights.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              9. Disclaimers &amp; Limitation of Liability
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.1 No Warranties
              </h3>
              <p className="text-sm">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.2 Limitation of Liability
              </h3>
              <p className="text-sm mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRIMOBE SHALL NOT BE LIABLE FOR ANY:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES</li>
                <li>COSTS OF PROCUREMENT OF SUBSTITUTE SERVICES</li>
                <li>DAMAGES RESULTING FROM DOCUMENT REJECTIONS OR PROJECT DELAYS</li>
              </ul>
              <p className="text-sm mt-2">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO TRIMOBE IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.3 Indemnification
              </h3>
              <p>
                You agree to indemnify and hold harmless Trimobe, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Content you upload or submit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Termination
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.1 By You
              </h3>
              <p>
                You may terminate your account at any time by contacting us at <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a>. Upon termination, your access to the Services will cease, but certain provisions of these Terms will survive.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.2 By Trimobe
              </h3>
              <p>
                We may suspend or terminate your access to the Services immediately, without prior notice, for any violation of these Terms or for any other reason at our sole discretion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.3 Effect of Termination
              </h3>
              <p>
                Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Your right to access and use the Services will immediately cease</li>
                <li>You will not be entitled to any refunds of pre-paid fees</li>
                <li>We may delete Your Content after 30 days (unless legally required to retain it)</li>
                <li>Sections 5, 6, 7, 9, 10, and 11 of these Terms will survive termination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* General Provisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            11. General Provisions
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.1 Modifications to Terms
              </h3>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be notified via email at least 30 days before they take effect. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.2 Governing Law
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.3 Dispute Resolution
              </h3>
              <p>
                Any disputes arising from these Terms or the Services shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.4 Severability
              </h3>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.5 Entire Agreement
              </h3>
              <p>
                These Terms, together with our Security Policy, constitute the entire agreement between you and Trimobe regarding the Services and supersede all prior agreements and understandings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.6 Assignment
              </h3>
              <p>
                You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.7 No Waiver
              </h3>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              12. Contact Information
            </h2>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Company Name:</strong> Trimobe</p>
              <p><strong>Website:</strong> <a href="/" className="text-primary dark:text-white hover:underline">https://trimobe.com</a></p>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Acknowledgment
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              BY USING TRIMOBE'S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICES.
            </p>
          </div>
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
