import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, TrendingUp, Clock, DollarSign, Target, Calendar } from 'lucide-react'

export default function ExecutiveDashboard() {
  const indicators = [
    {
      title: "Exposição Total Garantida",
      value: "R$ 954,40 milhões",
      status: "alto",
      icon: DollarSign,
      description: "Estoque total da dívida garantida"
    },
    {
      title: "Concentração 5 Anos",
      value: "53,13%",
      status: "critico",
      icon: AlertTriangle,
      description: "R$ 763 milhões vencem até 2030"
    },
    {
      title: "Custo Médio",
      value: "13,40% a.a.",
      status: "critico",
      icon: TrendingUp,
      description: "Muito acima do mercado multilateral"
    },
    {
      title: "Vida Média (ATM)",
      value: "6,3 anos",
      status: "critico",
      icon: Clock,
      description: "Inadequado para infraestrutura"
    },
    {
      title: "Meta Reperfilamento",
      value: "6-9% a.a.",
      status: "meta",
      icon: Target,
      description: "Redução de 4-7 pontos percentuais"
    },
    {
      title: "Economia Anual",
      value: "R$ 26 milhões",
      status: "meta",
      icon: Calendar,
      description: "Apenas com substituição dos contratos BB"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'critico': return 'border-red-500 bg-red-50'
      case 'alto': return 'border-orange-500 bg-orange-50'
      case 'meta': return 'border-green-500 bg-green-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const getIconColor = (status) => {
    switch (status) {
      case 'critico': return 'text-red-600'
      case 'alto': return 'text-orange-600'
      case 'meta': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Executivo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Indicadores críticos que fundamentam a necessidade urgente de reperfilamento da dívida garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <Card key={index} className={`${getStatusColor(indicator.status)} border-2 hover:shadow-lg transition-shadow`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      {indicator.title}
                    </CardTitle>
                    <Icon className={`h-5 w-5 ${getIconColor(indicator.status)}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {indicator.value}
                  </div>
                  <p className="text-sm text-gray-600">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 bg-red-100 border border-red-400 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Situação Crítica: "Muro de Amortização"
              </h3>
              <p className="text-red-700">
                <strong>53,13% da dívida</strong> (R$ 763 milhões) vence nos próximos 5 anos, criando pressão fiscal 
                insustentável. <strong>Três contratos</strong> iniciam amortização simultaneamente entre 2024-2025, 
                comprometendo a capacidade de investimento municipal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

