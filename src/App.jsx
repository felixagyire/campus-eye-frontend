import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import LiveMonitoring from './pages/LiveMonitoring/LiveMonitoring'
import Alerts from './pages/Alerts/Alerts'
import Evidence from './pages/Evidence/Evidence'
import PeopleTracks from './pages/PeopleTracks/PeopleTracks'
import SystemHealth from './pages/SystemHealth/SystemHealth'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/people-tracks" element={<PeopleTracks />} />
        <Route path="/system-health" element={<SystemHealth />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
