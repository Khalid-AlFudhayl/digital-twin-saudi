import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import StatCard from './components/StatCard'
import AnalyticsChart from './components/AnalyticsChart'
import ActivityPanel from './components/ActivityPanel'
import SmartCityMap from './components/SmartCityMap'
import SystemStatus from './components/SystemStatus'
import NotificationsPanel from './components/NotificationsPanel'
import CityTable from './components/CityTable'
import AIInsights from './components/AIInsights'
import AutomationPanel from './components/AutomationPanel'
import PredictionPanel from './components/PredictionPanel'
import DecisionCenter from './components/DecisionCenter'
import AIAssistant from './components/AIAssistant'
import AIControlCenter from './components/AIControlCenter'
import AIAnalytics from './components/AIAnalytics'
import LiveFeed from './components/LiveFeed'
import CommandCenter from './components/CommandCenter'
import SecurityCenter from './components/SecurityCenter'
import EmergencyCenter from './components/EmergencyCenter'
import InfrastructureCenter from './components/InfrastructureCenter'
import NationalOperations from './components/NationalOperations'
import GovernanceCenter from './components/GovernanceCenter'
import IntelligenceCore from './components/IntelligenceCore'
import AIEcosystem from './components/AIEcosystem'

import { cityStats } from './data/dashboardData'

import Login from './pages/Login'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    const loginStatus =
      localStorage.getItem('isLoggedIn')

    if (loginStatus === 'true') {

      setIsLoggedIn(true)

    }

  }, [])

  const handleLogout = () => {

    localStorage.removeItem('isLoggedIn')

    setIsLoggedIn(false)

  }

  if (!isLoggedIn) {

    return (

      <Login
        onLogin={() => setIsLoggedIn(true)}
      />

    )

  }

  return (

    <div className="flex min-h-screen bg-[#0A0F1C] text-white">

      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">

        <Navbar onLogout={handleLogout} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {cityStats.map((stat, index) => (

            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              color={stat.color}
            />

          ))}

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

          <div className="xl:col-span-2">
            <AnalyticsChart />
          </div>

          <ActivityPanel />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

          <div className="xl:col-span-2">
            <SmartCityMap />
          </div>

          <SystemStatus />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

          <div className="xl:col-span-2">
            <CityTable />
          </div>

          <NotificationsPanel />

        </div>

        <div className="mt-10">
          <AIInsights />
        </div>

        <div className="mt-10">
          <AutomationPanel />
        </div>

        <div className="mt-10">
          <PredictionPanel />
        </div>

        <div className="mt-10">
          <DecisionCenter />
        </div>

        <div className="mt-10">
          <AIControlCenter />
        </div>

        <div className="mt-10">
          <AIAnalytics />
        </div>

        <div className="mt-10">
          <LiveFeed />
        </div>

        <div className="mt-10">
          <CommandCenter />
        </div>

        <div className="mt-10">
          <SecurityCenter />
        </div>

        <div className="mt-10">
          <EmergencyCenter />
        </div>

        <div className="mt-10">
          <InfrastructureCenter />
        </div>

        <div className="mt-10">
          <NationalOperations />
        </div>

        <div className="mt-10">
          <GovernanceCenter />
        </div>

        <div className="mt-10">
          <IntelligenceCore />
        </div>

        <div className="mt-10">
          <AIEcosystem />
        </div>

        <div className="mt-10 mb-10">
          <AIAssistant />
        </div>

      </div>

    </div>

  )

}

export default App