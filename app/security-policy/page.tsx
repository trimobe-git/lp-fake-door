import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Database, Eye, Server, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Segurança",
  description: "Política de segurança abrangente da Trimobe cobrindo criptografia de dados (TLS 1.3, AES-256), controles de acesso, segurança de infraestrutura, conformidade GDPR/LGPD, e procedimentos de resposta a incidentes para proteger sua documentação de créditos de carbono.",
  openGraph: {
    title: "Política de Segurança | Trimobe",
    description: "Saiba como a Trimobe protege seus dados com medidas de segurança líderes do setor, incluindo criptografia, controles de acesso e certificações de conformidade.",
    url: "https://trimobe.com/security-policy",
  },
  alternates: {
    canonical: "https://trimobe.com/security-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
            Voltar ao Início
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
              Política de Segurança
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Última Atualização: 21 de Dezembro de 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Na Trimobe, levamos a segurança dos seus dados a sério. Esta Política de Segurança descreve as medidas que implementamos para proteger suas informações e garantir a confidencialidade, integridade e disponibilidade dos nossos serviços.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Para dúvidas sobre nossas práticas de segurança, entre em contato conosco em{' '}
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
              Criptografia de Dados
            </h2>
          </div>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Criptografia em Trânsito
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Todos os dados transmitidos entre seu navegador e nossos servidores são criptografados usando o padrão da indústria TLS 1.3 (Transport Layer Security). Isso garante que seus documentos, informações pessoais e credenciais estejam protegidos contra interceptação durante a transmissão.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Criptografia em Repouso
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Todos os dados armazenados em nossos servidores, incluindo documentos enviados e informações de usuários, são criptografados em repouso usando criptografia AES-256. Isso protege seus dados mesmo no evento improvável de comprometimento físico do servidor.
            </p>
          </div>
        </section>

        {/* Data Storage & Handling */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Armazenamento &amp; Tratamento de Dados
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Processamento de Documentos
              </h3>
              <p>
                Seus documentos enviados são processados usando pipelines de IA seguros. Os documentos são armazenados temporariamente durante o processamento e são automaticamente excluídos após 30 dias, a menos que você opte por salvá-los em sua conta.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Retenção de Dados
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações da conta: Retidas durante a vigência da sua conta mais 90 dias após a exclusão</li>
                <li>Documentos processados: 30 dias após o upload (configurável nas configurações da conta)</li>
                <li>Registros de transações: 7 anos (para fins de conformidade)</li>
                <li>Logs do sistema: 90 dias</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Localização Geográfica
              </h3>
              <p>
                Nossos data centers principais estão localizados em instalações seguras com energia, refrigeração e conectividade de rede redundantes. Cumprimos os requisitos de residência de dados conforme aplicável.
              </p>
            </div>
          </div>
        </section>

        {/* Access Controls */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Controles de Acesso
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Autenticação
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Requisitos de senha forte aplicados</li>
                <li>Autenticação multifator (MFA) disponível para todos os usuários</li>
                <li>Tempo limite de sessão após 30 minutos de inatividade</li>
                <li>Bloqueio de conta após 5 tentativas de login falhadas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Acesso de Funcionários
              </h3>
              <p>
                O acesso aos dados dos clientes é restrito com base na necessidade de saber. Todos os funcionários da Trimobe com acesso a dados:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Passam por verificação de antecedentes</li>
                <li>Assinam acordos de confidencialidade</li>
                <li>Completam treinamento de segurança anualmente</li>
                <li>Usam autenticação multifator para todos os sistemas</li>
                <li>Têm acesso registrado e auditado regularmente</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Segurança de Infraestrutura
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Infraestrutura em Nuvem
              </h3>
              <p>
                Nossos serviços são hospedados em infraestrutura em nuvem de nível empresarial com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>SLA de disponibilidade de 99,9%</li>
                <li>Backups automatizados a cada 6 horas</li>
                <li>Redundância geográfica em múltiplas regiões</li>
                <li>Proteção e mitigação contra DDoS</li>
                <li>Sistemas de detecção e prevenção de intrusões</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Segurança de Rede
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Firewalls configurados com regras de acesso de menor privilégio</li>
                <li>Segmentação de rede para isolar sistemas sensíveis</li>
                <li>Varredura regular de vulnerabilidades e testes de penetração</li>
                <li>Web Application Firewall (WAF) para prevenir ataques comuns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Segurança de Aplicação
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Práticas de ciclo de vida de desenvolvimento seguro (SDLC)</li>
                <li>Revisões de código e testes de segurança automatizados</li>
                <li>Varredura de dependências para vulnerabilidades conhecidas</li>
                <li>Atualizações e patches de segurança regulares</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Resposta a Incidentes
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              No caso de um incidente de segurança, seguimos um plano estruturado de resposta a incidentes:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Detecção:</strong> Sistemas de monitoramento automatizados e equipes de segurança detectam potenciais incidentes</li>
              <li><strong>Avaliação:</strong> A gravidade e o impacto do incidente são avaliados</li>
              <li><strong>Contenção:</strong> Sistemas afetados são isolados para prevenir danos adicionais</li>
              <li><strong>Investigação:</strong> Análise de causa raiz é realizada</li>
              <li><strong>Remediação:</strong> Vulnerabilidades são corrigidas e sistemas restaurados</li>
              <li><strong>Notificação:</strong> Usuários afetados são notificados em até 72 horas se dados pessoais forem comprometidos</li>
              <li><strong>Revisão Pós-Incidente:</strong> Melhorias de processo são implementadas</li>
            </ol>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Conformidade &amp; Certificações
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              A Trimobe está comprometida em manter a conformidade com regulamentações relevantes de proteção de dados e padrões da indústria:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>GDPR (Regulamento Geral de Proteção de Dados) - Conformidade de proteção de dados da UE</li>
              <li>LGPD (Lei Geral de Proteção de Dados) - Conformidade de proteção de dados do Brasil</li>
              <li>SOC 2 Type II - Controles de segurança e disponibilidade (certificação em andamento)</li>
              <li>ISO 27001 - Gestão de segurança da informação (certificação em andamento)</li>
              <li>CCPA (Lei de Privacidade do Consumidor da Califórnia) - Conformidade de privacidade da Califórnia</li>
            </ul>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Serviços de Terceiros
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Avaliamos cuidadosamente todos os provedores de serviços terceiros que processam dados de clientes. Nossos fornecedores devem:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Demonstrar controles de segurança apropriados</li>
              <li>Assinar acordos de processamento de dados</li>
              <li>Cumprir com regulamentações aplicáveis de proteção de dados</li>
              <li>Passar por avaliações de segurança regulares</li>
            </ul>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Suas Responsabilidades de Segurança
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Segurança é uma responsabilidade compartilhada. Para proteger sua conta e dados:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use uma senha forte e única para sua conta Trimobe</li>
              <li>Habilite a autenticação multifator</li>
              <li>Mantenha suas credenciais de login confidenciais</li>
              <li>Faça logout de computadores compartilhados ou públicos</li>
              <li>Reporte atividades suspeitas imediatamente para contato@trimobe.com</li>
              <li>Mantenha suas informações de contato atualizadas para notificações de segurança</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contato de Segurança
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Se você descobrir uma vulnerabilidade de segurança ou tiver preocupações de segurança, por favor reporte imediatamente:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Linha de Assunto:</strong> [SEGURANÇA] - Breve descrição do problema</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Levamos todos os relatos de segurança a sério e responderemos em até 48 horas. Apreciamos a divulgação responsável e reconheceremos os contribuidores que nos ajudam a melhorar nossa segurança.
            </p>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Atualizações da Política
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Podemos atualizar esta Política de Segurança periodicamente para refletir mudanças em nossas práticas ou requisitos legais. Mudanças materiais serão comunicadas aos usuários por email com pelo menos 30 dias de antecedência antes de entrarem em vigor. O uso contínuo dos serviços da Trimobe após as mudanças se tornarem efetivas constitui aceitação da política atualizada.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Trimobe. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
