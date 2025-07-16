import { Building2, Calendar, FileText, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-bold">ENCIBRA S.A.</h3>
                <p className="text-gray-400 text-sm">Encibra S/A Estudos e Projetos de Engenharia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Diagnóstico técnico-financeiro elaborado para fundamentar a estruturação
              de operação de reperfilamento da dívida garantida junto ao BIRD.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informações do Documento</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Elaborado em: Julho 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Versão: 1.0 - Final</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Elaborado por: ENCIBRA S.A.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Dados Principais</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Exposição Total:</span>
                <span className="font-semibold">R$ 954,40 milhões</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Custo Médio Atual:</span>
                <span className="font-semibold text-red-400">13,40% a.a.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Meta BIRD:</span>
                <span className="font-semibold text-green-400">6-9% a.a.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Economia Anual:</span>
                <span className="font-semibold text-green-400">R$ 26 milhões</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Encibra S/A Estudos e Projetos de Engenharia. Documento técnico para uso institucional.
          </p>
        </div>
      </div>
    </footer>
  )
}

