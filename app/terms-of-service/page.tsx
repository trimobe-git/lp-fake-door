import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Users, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos de Serviço dos serviços de geração e validação de documentos com IA da Trimobe para documentação de créditos de carbono Verra/VCS. Saiba sobre registro de conta, preços, limitações de conteúdo gerado por IA e responsabilidades do usuário.",
  openGraph: {
    title: "Termos de Serviço | Trimobe",
    description: "Termos de Serviço dos serviços de geração e validação de documentos com IA da Trimobe para documentação de créditos de carbono Verra/VCS.",
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
            Voltar ao Início
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
              Termos de Serviço
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Última Atualização: 21 de Dezembro de 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Bem-vindo à Trimobe. Estes Termos de Serviço ("Termos") regem seu acesso e uso dos serviços de geração e validação de documentos com IA da Trimobe ("Serviços"). Ao acessar ou usar nossos Serviços, você concorda em estar vinculado a estes Termos.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Por favor, leia estes Termos cuidadosamente. Se você não concordar com estes Termos, não use nossos Serviços.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              1. Aceitação dos Termos
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Ao criar uma conta, acessar nosso site ou usar qualquer um de nossos Serviços, você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos e nossa Política de Segurança.
            </p>
            <p>
              Se você está usando nossos Serviços em nome de uma organização, você declara e garante que tem autoridade para vincular essa organização a estes Termos.
            </p>
          </div>
        </section>

        {/* Account Registration */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              2. Registro de Conta &amp; Elegibilidade
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.1 Elegibilidade
              </h3>
              <p>
                Você deve ter pelo menos 18 anos e ser capaz de formar um contrato vinculante para usar nossos Serviços. Ao usar a Trimobe, você declara que atende a esses requisitos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.2 Criação de Conta
              </h3>
              <p>Para acessar certos recursos, você deve criar uma conta. Você concorda em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Fornecer informações precisas, atuais e completas</li>
                <li>Manter e atualizar suas informações conforme necessário</li>
                <li>Manter sua senha segura e confidencial</li>
                <li>Notificar-nos imediatamente sobre qualquer acesso não autorizado à sua conta</li>
                <li>Aceitar responsabilidade por todas as atividades sob sua conta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2.3 Encerramento de Conta
              </h3>
              <p>
                Reservamos o direito de suspender ou encerrar sua conta a qualquer momento por violações destes Termos, atividade fraudulenta ou qualquer motivo que julguemos necessário para proteger nossos Serviços ou outros usuários.
              </p>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. Descrição dos Serviços
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              A Trimobe fornece serviços com IA para gerar e validar documentação de créditos de carbono Verra/VCS, incluindo mas não limitado a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Validação de documentos contra metodologias Verra</li>
              <li>Geração automatizada de Documentos de Descrição de Projeto (PDDs)</li>
              <li>Geração e verificação de relatórios de monitoramento</li>
              <li>Verificação de conformidade para VCS, CCB e outros padrões</li>
            </ul>
            <p className="mt-4">
              Reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto de nossos Serviços a qualquer momento, com ou sem aviso prévio.
            </p>
          </div>
        </section>

        {/* Pricing and Payment */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              4. Preços &amp; Pagamento
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.1 Taxas
              </h3>
              <p>
                Os preços atuais estão disponíveis em nosso site. Oferecemos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Nível gratuito: Uma validação de documento gratuita por conta</li>
                <li>Pagamento por uso: R$ 9 por validação de documento, R$ 19+ por geração de documento</li>
                <li>Planos de assinatura: Preços personalizados para usuários de alto volume (entre em contato)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.2 Termos de Pagamento
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Todas as taxas estão em BRL (Reais) salvo indicação em contrário</li>
                <li>O pagamento é necessário antes da entrega do serviço para serviços de pagamento por uso</li>
                <li>Taxas de assinatura são cobradas mensalmente ou anualmente antecipadamente</li>
                <li>Aceitamos os principais cartões de crédito e outros métodos de pagamento conforme exibido</li>
                <li>Todas as vendas são finais, salvo se exigido por lei</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.3 Mudanças de Preço
              </h3>
              <p>
                Podemos alterar nossos preços a qualquer momento. Para usuários de assinatura, as mudanças de preço entrarão em vigor no próximo ciclo de cobrança. Forneceremos pelo menos 30 dias de aviso prévio sobre quaisquer aumentos de preço.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4.4 Reembolsos
              </h3>
              <p>
                Reembolsos geralmente não estão disponíveis para serviços concluídos. Em casos de falhas técnicas ou problemas de serviço de nossa parte, podemos fornecer créditos ou reembolsos a nosso critério. Entre em contato com <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a> para solicitações de reembolso.
              </p>
            </div>
          </div>
        </section>

        {/* User Content and Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. Conteúdo do Usuário &amp; Responsabilidades
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.1 Seu Conteúdo
              </h3>
              <p>
                Você mantém todos os direitos sobre os documentos e dados que você envia para a Trimobe ("Seu Conteúdo"). Ao enviar Seu Conteúdo, você nos concede uma licença limitada para processá-lo, armazená-lo e analisá-lo exclusivamente com o propósito de fornecer nossos Serviços.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.2 Restrições de Conteúdo
              </h3>
              <p>Você concorda em não enviar ou submeter conteúdo que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Infrinja direitos de propriedade intelectual de outros</li>
                <li>Contenha malware, vírus ou código prejudicial</li>
                <li>Seja ilegal, fraudulento ou enganoso</li>
                <li>Contenha informações de identificação pessoal de outros sem consentimento</li>
                <li>Viole quaisquer leis ou regulamentos aplicáveis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5.3 Usos Proibidos
              </h3>
              <p>Você concorda em não:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Usar nossos Serviços para qualquer propósito ilegal</li>
                <li>Tentar obter acesso não autorizado aos nossos sistemas</li>
                <li>Fazer engenharia reversa, descompilar ou desmontar nossos Serviços</li>
                <li>Usar ferramentas automatizadas para acessar nossos Serviços (scraping, bots, etc.)</li>
                <li>Revender ou redistribuir nossos Serviços sem autorização</li>
                <li>Interferir ou interromper a integridade ou desempenho de nossos Serviços</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI-Generated Content */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              6. Conteúdo Gerado por IA &amp; Limitações
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.1 Natureza dos Serviços de IA
              </h3>
              <p>
                Nossos Serviços usam inteligência artificial e aprendizado de máquina para gerar e validar documentos. Embora nos esforcemos pela precisão, o conteúdo gerado por IA pode conter erros, omissões ou inconsistências.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.2 Sua Responsabilidade
              </h3>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                IMPORTANTE: Você é o único responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Revisar todos os documentos gerados ou validados por IA quanto à precisão</li>
                <li>Garantir a conformidade com as metodologias e padrões Verra aplicáveis</li>
                <li>Verificar todos os dados, cálculos e reivindicações antes da submissão</li>
                <li>Obter revisão profissional quando exigido por regulamentos</li>
                <li>O conteúdo final e a precisão dos documentos submetidos aos registros</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.3 Sem Aconselhamento Profissional
              </h3>
              <p>
                A Trimobe não fornece serviços de consultoria jurídica, financeira ou profissional. Nossas ferramentas de IA são fornecidas apenas para fins informativos e de preparação de documentos. Você deve consultar profissionais qualificados para aconselhamento específico para seu projeto.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6.4 Sem Garantia de Aprovação
              </h3>
              <p>
                O uso de nossos Serviços não garante que seus documentos serão aprovados pela Verra, registros ou outros órgãos de validação. Não somos responsáveis por rejeições, atrasos ou quaisquer consequências resultantes do uso de nossos Serviços.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Propriedade Intelectual
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.1 PI da Trimobe
              </h3>
              <p>
                Todos os direitos, título e interesse nos Serviços, incluindo nosso site, software, modelos de IA, algoritmos, marcas registradas e conteúdo (excluindo Seu Conteúdo), são de propriedade da Trimobe e protegidos por leis de propriedade intelectual.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.2 Licença de Uso
              </h3>
              <p>
                Sujeito a estes Termos, concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar nossos Serviços para seus fins comerciais internos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7.3 Propriedade da Saída de IA
              </h3>
              <p>
                Para serviços pagos, você possui os documentos gerados por IA que criamos para você, sujeito às limitações descritas na Seção 6. Para serviços de nível gratuito, mantemos o direito de usar dados anonimizados para melhorar nossos modelos de IA.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy and Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Privacidade &amp; Proteção de Dados
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Sua privacidade é importante para nós. Nossa coleta e uso de informações pessoais são regidos por nossa Política de Segurança. Ao usar nossos Serviços, você consente com nossas práticas de dados conforme descrito nessa política.
            </p>
            <p>
              Cumprimos as leis aplicáveis de proteção de dados, incluindo GDPR e LGPD. Você tem direitos relativos aos seus dados pessoais, incluindo o direito de acessar, corrigir, excluir ou exportar seus dados. Entre em contato com <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a> para exercer esses direitos.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              9. Isenções de Responsabilidade &amp; Limitação de Responsabilidade
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.1 Sem Garantias
              </h3>
              <p className="text-sm">
                OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS" SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO MAS NÃO LIMITADO A GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO OU NÃO VIOLAÇÃO. NÃO GARANTIMOS QUE OS SERVIÇOS SEJAM ININTERRUPTOS, LIVRES DE ERROS OU LIVRES DE VÍRUS OU OUTROS COMPONENTES PREJUDICIAIS.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.2 Limitação de Responsabilidade
              </h3>
              <p className="text-sm mb-2">
                NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A TRIMOBE NÃO SERÁ RESPONSÁVEL POR QUAISQUER:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS</li>
                <li>PERDA DE LUCROS, RECEITA, DADOS OU OPORTUNIDADES DE NEGÓCIOS</li>
                <li>CUSTOS DE AQUISIÇÃO DE SERVIÇOS SUBSTITUTOS</li>
                <li>DANOS RESULTANTES DE REJEIÇÕES DE DOCUMENTOS OU ATRASOS DE PROJETOS</li>
              </ul>
              <p className="text-sm mt-2">
                NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ O VALOR QUE VOCÊ PAGOU À TRIMOBE NOS 12 MESES ANTERIORES À RECLAMAÇÃO, OU R$ 500, O QUE FOR MAIOR.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                9.3 Indenização
              </h3>
              <p>
                Você concorda em indenizar e isentar de responsabilidade a Trimobe, suas afiliadas e seus respectivos executivos, diretores, funcionários e agentes de quaisquer reclamações, danos, perdas, responsabilidades e despesas (incluindo honorários advocatícios) decorrentes de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Seu uso dos Serviços</li>
                <li>Sua violação destes Termos</li>
                <li>Sua violação de quaisquer direitos de outra parte</li>
                <li>Conteúdo que você envia ou submete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Encerramento
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.1 Por Você
              </h3>
              <p>
                Você pode encerrar sua conta a qualquer momento entrando em contato conosco em <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a>. Após o encerramento, seu acesso aos Serviços cessará, mas certas disposições destes Termos sobreviverão.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.2 Pela Trimobe
              </h3>
              <p>
                Podemos suspender ou encerrar seu acesso aos Serviços imediatamente, sem aviso prévio, por qualquer violação destes Termos ou por qualquer outro motivo a nosso exclusivo critério.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                10.3 Efeito do Encerramento
              </h3>
              <p>
                Após o encerramento:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Seu direito de acessar e usar os Serviços cessará imediatamente</li>
                <li>Você não terá direito a reembolsos de taxas pré-pagas</li>
                <li>Podemos excluir Seu Conteúdo após 30 dias (a menos que legalmente obrigados a retê-lo)</li>
                <li>As Seções 5, 6, 7, 9, 10 e 11 destes Termos sobreviverão ao encerramento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* General Provisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            11. Disposições Gerais
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.1 Modificações dos Termos
              </h3>
              <p>
                Reservamos o direito de modificar estes Termos a qualquer momento. Mudanças materiais serão notificadas por email com pelo menos 30 dias de antecedência antes de entrarem em vigor. Seu uso contínuo dos Serviços após as mudanças se tornarem efetivas constitui aceitação dos Termos modificados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.2 Lei Aplicável
              </h3>
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições de conflito de leis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.3 Resolução de Disputas
              </h3>
              <p>
                Quaisquer disputas decorrentes destes Termos ou dos Serviços serão resolvidas através de negociação de boa-fé. Se a negociação falhar, as disputas serão resolvidas através de arbitragem vinculante de acordo com as regras da Câmara de Mediação e Arbitragem, exceto onde proibido por lei.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.4 Divisibilidade
              </h3>
              <p>
                Se qualquer disposição destes Termos for considerada inexequível ou inválida, essa disposição será limitada ou eliminada na medida mínima necessária, e as disposições restantes permanecerão em pleno vigor e efeito.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.5 Acordo Integral
              </h3>
              <p>
                Estes Termos, juntamente com nossa Política de Segurança, constituem o acordo integral entre você e a Trimobe em relação aos Serviços e substituem todos os acordos e entendimentos anteriores.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.6 Cessão
              </h3>
              <p>
                Você não pode ceder ou transferir estes Termos ou seus direitos sob eles sem nosso consentimento prévio por escrito. Podemos ceder estes Termos a qualquer afiliada ou em conexão com uma fusão, aquisição ou venda de ativos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                11.7 Sem Renúncia
              </h3>
              <p>
                Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-primary dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              12. Informações de Contato
            </h2>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:contato@trimobe.com" className="text-primary dark:text-white hover:underline">contato@trimobe.com</a></p>
              <p><strong>Nome da Empresa:</strong> Trimobe</p>
              <p><strong>Website:</strong> <a href="/" className="text-primary dark:text-white hover:underline">https://trimobe.com</a></p>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Reconhecimento
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AO USAR OS SERVIÇOS DA TRIMOBE, VOCÊ RECONHECE QUE LEU ESTES TERMOS DE SERVIÇO, OS COMPREENDE E CONCORDA EM ESTAR VINCULADO POR ELES. SE VOCÊ NÃO CONCORDAR COM ESTES TERMOS, NÃO DEVE USAR NOSSOS SERVIÇOS.
            </p>
          </div>
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
