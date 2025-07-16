import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { TrendingDown, AlertTriangle, Target } from 'lucide-react'

// Importar imagens dos gráficos gerados
import concentracaoVencimentos from '../assets/grafico_concentracao_vencimentos.png'
import custosCorrigido from '../assets/grafico_custos_corrigido.png'
import impactoCusto from '../assets/grafico_impacto_custo_reperfilamento.png'

export default function ChartsSection() {
  // Dados para gráficos interativos
  const vencimentosData = [
    { periodo: '12 meses', valor: 164.90, percentual: 11.48 },
    { periodo: '1-2 anos', valor: 161.95, percentual: 11.28 },
    { periodo: '2-3 anos', valor: 153.39, percentual: 10.68 },
    { periodo: '3-4 anos', valor: 146.02, percentual: 10.17 },
    { periodo: '4-5 anos', valor: 136.74, percentual: 9.52 },
    { periodo: '+5 anos', valor: 673.11, percentual: 46.87 }
  ]

  const credoresData = [
    { name: 'BID', value: 2, color: '#2ca02c' },
    { name: 'Banco do Brasil', value: 2, color: '#d62728' },
    { name: 'FONPLATA', value: 1, color: '#ff7f0e' }
  ]

  const cenariosCusto = [
    { cenario: 'Atual', custo: 13.40 },
    { cenario: 'Conservador', custo: 9.50 },
    { cenario: 'Otimista', custo: 7.80 }
  ]

  const COLORS = ['#2ca02c', '#d62728', '#ff7f0e']

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Análise Visual dos Dados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visualizações que evidenciam a concentração crítica de vencimentos e os benefícios do reperfilamento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfico de Vencimentos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span>Concentração de Vencimentos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vencimentosData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="periodo" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [`R$ ${value}M`, 'Valor']} />
                  <Bar dataKey="valor" fill={(entry, index) => index < 5 ? '#d62728' : '#2ca02c'} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
                <p className="text-sm text-red-800">
                  <strong>53,13%</strong> da dívida (R$ 763M) vence em 5 anos - situação crítica!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gráfico de Credores */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Credor</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={credoresData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value} contratos`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {credoresData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span className="text-sm">BID: Melhores condições (6-8% a.a.)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-600 rounded"></div>
                  <span className="text-sm">Banco do Brasil: Alto custo (~14,5% a.a.)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-600 rounded"></div>
                  <span className="text-sm">FONPLATA: Intermediário (7-9% a.a.)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico de Impacto do Reperfilamento */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <span>Impacto do Reperfilamento no Custo Médio</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cenariosCusto}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cenario" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Custo Médio']} />
                <Bar dataKey="custo" fill={(entry, index) => {
                  if (index === 0) return '#d62728'
                  if (index === 1) return '#ff7f0e'
                  return '#2ca02c'
                }} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-red-100 border border-red-300 rounded text-center">
                <div className="font-bold text-red-800">Atual: 13,40%</div>
                <div className="text-sm text-red-600">Insustentável</div>
              </div>
              <div className="p-3 bg-orange-100 border border-orange-300 rounded text-center">
                <div className="font-bold text-orange-800">Conservador: 9,50%</div>
                <div className="text-sm text-orange-600">Economia: 3,9 p.p.</div>
              </div>
              <div className="p-3 bg-green-100 border border-green-300 rounded text-center">
                <div className="font-bold text-green-800">Otimista: 7,80%</div>
                <div className="text-sm text-green-600">Economia: 5,6 p.p.</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gráficos Estáticos Gerados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>"Muro de Amortização" - Análise Detalhada</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={concentracaoVencimentos} 
                alt="Concentração Crítica de Vencimentos" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-2">
                Visualização da concentração crítica que justifica o reperfilamento urgente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparação de Custos por Credor</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={custosCorrigido} 
                alt="Comparação de Custos de Financiamento" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-2">
                BID oferece as melhores condições, seguido do BIRD e FONPLATA
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-green-100 border border-green-400 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Target className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Benefícios Quantificados do Reperfilamento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-700">
                <div>
                  <div className="font-bold text-xl">R$ 26M/ano</div>
                  <div className="text-sm">Economia com redução de custos</div>
                </div>
                <div>
                  <div className="font-bold text-xl">R$ 110M/ano</div>
                  <div className="text-sm">Alívio no fluxo de caixa</div>
                </div>
                <div>
                  <div className="font-bold text-xl">15-20 anos</div>
                  <div className="text-sm">Novo prazo médio adequado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

