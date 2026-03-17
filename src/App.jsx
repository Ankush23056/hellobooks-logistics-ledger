import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardView from './components/DashboardView'
import ExpenseForm from './components/ExpenseForm'
import AIQueryInterface from './components/AIQueryInterface'

const views = ['dashboard', 'expenses', 'vehicles', 'ai-query']

export default function App() {
  const [activeView, setActiveView] = useState('dashboard')

  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      <Sidebar activeView={activeView} onNavigate={setActiveView} />
      <main className="flex-1 overflow-y-auto">
        {activeView === 'dashboard' && <DashboardView />}
        {activeView === 'expenses' && <ExpenseForm />}
        {activeView === 'ai-query' && <AIQueryInterface />}
        {activeView === 'vehicles' && <DashboardView />}
      </main>
    </div>
  )
}
