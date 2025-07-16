import { Building2, Calendar, FileText } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building2 className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold">Diagnóstico Técnico-Financeiro</h1>
              <p className="text-blue-200 text-lg">Dívida Garantida do Município de Belém/PA</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-blue-200">
              <Calendar className="h-5 w-5" />
              <span>Julho 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200 mt-1">
              <FileText className="h-5 w-5" />
              <span>Estruturação de Reperfilamento - BIRD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

