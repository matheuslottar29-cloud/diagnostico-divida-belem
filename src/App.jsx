import './App.css'
import Header from './components/Header'
import ExecutiveDashboard from './components/ExecutiveDashboard'
import ContractsTable from './components/ContractsTable'
import ChartsSection from './components/ChartsSection'
import TechnicalJustification from './components/TechnicalJustification'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ExecutiveDashboard />
        <ContractsTable />
        <ChartsSection />
        <TechnicalJustification />
      </main>
      <Footer />
    </div>
  )
}

export default App
