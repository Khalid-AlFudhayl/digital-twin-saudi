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

        <div className="mt-10 mb-10">

          <AIAssistant />

        </div>

      </div>

    </div>

  )

}

export default App