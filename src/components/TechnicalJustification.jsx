import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, FileText, Target, Clock, DollarSign } from 'lucide-react'

export default function TechnicalJustification() {
  const justifications = [
    {
      title: "Concentração Temporal Crítica",
      description: "53,13% da dívida vence em 5 anos, criando 'muro de amortização' insustentável",
      impact: "R$ 763 milhões de pressão fiscal concentrada",
      icon: Clock,
      color: "red"
    },
    {
      title: "Custo Médio Elevado",
      description: "13,40% a.a. é incompatível com a capacidade fiscal municipal",
      impact: "Economia de R$ 26 milhões/ano com BIRD",
      icon: DollarSign,
      color: "orange"
    },
    {
      title: "Descasamento de Prazos",
      description: "ATM de 6,3 anos inadequado para infraestrutura de 20-30 anos",
      impact: "Violação do princípio de equidade intergeracional",
      icon: Target,
      color: "blue"
    }
  ]

  const recommendations = [
    {
      phase: "Fase 1 - Preparação",
      duration: "60 dias",
      actions: [
        "Aprovação política pelo Prefeito",
        "Constituição de equipe técnica multidisciplinar",
        "Contato inicial com BIRD",
        "Preparação de documentação técnica"
      ]
    },
    {
      phase: "Fase 2 - Negociação",
      duration: "120 dias",
      actions: [
        "Elaboração de proposta formal detalhada",
        "Negociação de condições financeiras",
        "Estruturação jurídica da operação",
        "Aprovações internas municipais"
      ]
    },
    {
      phase: "Fase 3 - Aprovação",
      duration: "180 dias",
      actions: [
        "Tramitação junto à STN para garantia",
        "Aprovação pelo Senado Federal (se necessário)",
        "Cumprimento de condições precedentes",
        "Análise técnica do BIRD"
      ]
    },
    {
      phase: "Fase 4 - Implementação",
      duration: "60 dias",
      actions: [
        "Assinatura do contrato com BIRD",
        "Liquidação das operações existentes",
        "Início da nova estrutura de pagamentos",
        "Monitoramento e controle"
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      red: "border-red-500 bg-red-50 text-red-700",
      orange: "border-orange-500 bg-orange-50 text-orange-700",
      blue: "border-blue-500 bg-blue-50 text-blue-700"
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Justificativa Técnica</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fundamentos econômicos e técnicos que sustentam a necessidade urgente de reperfilamento
          </p>
        </div>

        {/* Justificativas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {justifications.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className={`border-2 ${getColorClasses(item.color)}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{item.description}</p>
                  <div className="font-semibold text-sm">
                    Impacto: {item.impact}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Estrutura Operacional Recomendada */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Estrutura Operacional Recomendada</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">USD 200-250M</div>
                <div className="text-sm text-gray-600">Valor da Operação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25 anos</div>
                <div className="text-sm text-gray-600">Prazo com 5 anos carência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">SOFR + 1,5-2,5%</div>
                <div className="text-sm text-gray-600">Indexação estimada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Garantia União</div>
                <div className="text-sm text-gray-600">Conforme STN</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cronograma de Implementação */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Cronograma de Implementação</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recommendations.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {phase.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < recommendations.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-400 mt-2" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefícios Esperados */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Benefícios Esperados do Reperfilamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Benefícios Fiscais Imediatos</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Redução do custo médio de 13,40% para 6-9%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Economia anual de R$ 26 milhões</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Alívio de R$ 110 milhões/ano no fluxo de caixa</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Benefícios Estruturais</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Melhoria da classificação CAPAG</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Simplificação da gestão da dívida</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Preservação da capacidade de investimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-blue-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Próximo Passo: Aprovação Política</h3>
            <p className="mb-4">
              A janela de oportunidade é limitada. O início imediato das tratativas é essencial 
              para implementar a solução antes que a pressão fiscal se torne insustentável.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                // Criar link para download do documento
                const link = document.createElement('a');
                link.href = '/diagnostico_divida_belem.md';
                link.download = 'Diagnostico_Tecnico_Financeiro_Belem_PA.md';
                link.click();
              }}
            >
              <FileText className="h-4 w-4 mr-2" />
              Baixar Diagnóstico Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

