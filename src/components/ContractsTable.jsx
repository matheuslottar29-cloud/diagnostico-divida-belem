import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, Calendar, DollarSign, TrendingUp } from 'lucide-react'

export default function ContractsTable() {
  const contracts = [
    {
      name: "FONPLATA BRA-37/2022",
      creditor: "FONPLATA",
      value: "USD 60.000.000",
      currency: "USD",
      term: "15 anos",
      grace: "4,0 anos",
      indexer: "SOFR + 2,60%/2,10%",
      status: "Carência até ~2028",
      statusType: "grace",
      system: "SAC Semestral"
    },
    {
      name: "Banco do Brasil 40/00020-6",
      creditor: "Banco do Brasil",
      value: "R$ 200.000.000",
      currency: "BRL",
      term: "9 anos",
      grace: "1,0 ano",
      indexer: "CDI + 1,48%",
      status: "Em amortização",
      statusType: "active",
      system: "SAC Mensal"
    },
    {
      name: "Banco do Brasil 40/00041-9",
      creditor: "Banco do Brasil",
      value: "R$ 200.000.000",
      currency: "BRL",
      term: "9 anos",
      grace: "1,0 ano",
      indexer: "CDI + 1,62%",
      status: "Inicia set/2025",
      statusType: "imminent",
      system: "SAC Mensal"
    },
    {
      name: "BID PROMABEN I",
      creditor: "BID",
      value: "USD 68.750.000",
      currency: "USD",
      term: "25 anos",
      grace: "5,5 anos",
      indexer: "SOFR + 1,2-1,6%",
      status: "Em amortização",
      statusType: "active",
      system: "SAC Semestral"
    },
    {
      name: "BID PROMABEN II",
      creditor: "BID",
      value: "USD 71.802.000",
      currency: "USD",
      term: "25 anos",
      grace: "5,5 anos",
      indexer: "SOFR + 1,4-1,8%",
      status: "Inicia 2025",
      statusType: "imminent",
      system: "SAC Semestral"
    }
  ]

  const getStatusBadge = (status, statusType) => {
    const variants = {
      active: "destructive",
      imminent: "destructive",
      grace: "secondary"
    }
    return <Badge variant={variants[statusType]}>{status}</Badge>
  }

  const getCreditorIcon = (creditor) => {
    if (creditor.includes("Banco")) return <Building className="h-4 w-4 text-red-600" />
    return <Building className="h-4 w-4 text-green-600" />
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contratos Ativos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Análise detalhada dos cinco contratos que compõem a carteira de dívida garantida
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5" />
              <span>Carteira de Dívida Garantida - R$ 954,40 milhões</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Contrato</th>
                    <th className="text-left py-3 px-4 font-semibold">Credor</th>
                    <th className="text-left py-3 px-4 font-semibold">Valor</th>
                    <th className="text-left py-3 px-4 font-semibold">Prazo</th>
                    <th className="text-left py-3 px-4 font-semibold">Indexador</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((contract, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">{contract.name}</div>
                        <div className="text-sm text-gray-500">{contract.system}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {getCreditorIcon(contract.creditor)}
                          <span className="font-medium">{contract.creditor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{contract.value}</div>
                        <div className="text-sm text-gray-500">{contract.currency}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{contract.term}</div>
                        <div className="text-sm text-gray-500">Carência: {contract.grace}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{contract.indexer}</div>
                        {contract.creditor === "BID" && (
                          <div className="text-xs text-green-600 font-medium">MELHOR CONDIÇÃO</div>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(contract.status, contract.statusType)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-800">Operações Domésticas</span>
                </div>
                <div className="text-2xl font-bold text-red-900">R$ 400 milhões</div>
                <div className="text-sm text-red-700">Custo: ~14,5% a.a. (CDI + spread)</div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Operações Multilaterais</span>
                </div>
                <div className="text-2xl font-bold text-green-900">USD 271 milhões</div>
                <div className="text-sm text-green-700">Custo: 6-9% a.a. (SOFR + spread)</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Convergência Temporal</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">3 contratos</div>
                <div className="text-sm text-blue-700">Iniciam amortização 2024-2025</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

