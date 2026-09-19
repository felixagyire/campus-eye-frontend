import { useNavigate } from 'react-router-dom'
import { Activity, Bell, Camera, Users, ArrowUpRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PageHeader from '../../components/layout/PageHeader'
import StatCard from '../../components/dashboard/StatCard'
import RecentEvents from '../../components/dashboard/RecentEvents'
import CameraStatus from '../../components/dashboard/CameraStatus'
import { activityData, alerts, cameras } from '../../data/mockData'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <>
      <PageHeader
        title="Campus Overview"
        description="A real-time summary of monitoring activity, events and service health."
        action={<button className="secondary-button" onClick={() => navigate('/live-monitoring')}>Open live view <ArrowUpRight size={16} /></button>}
      />

      <section className="stats-grid">
        <StatCard icon={Camera} label="Active Cameras" value="3 / 4" detail="1 maintenance" tone="blue" />
        <StatCard icon={Bell} label="Open Alerts" value="04" detail="1 high" tone="amber" />
        <StatCard icon={Users} label="Active Tracks" value="28" detail="+12% today" tone="violet" />
        <StatCard icon={Activity} label="System Availability" value="99.2%" detail="Last 24 hours" tone="green" />
      </section>

      <section className="dashboard-grid">
        <div className="panel chart-panel">
          <div className="panel__header">
            <div><h2>Monitoring Activity</h2><p>Detection and event activity by hour.</p></div>
            <span className="panel-period">Today</span>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={activityData}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} width={30} />
                <Tooltip />
                <Line type="monotone" dataKey="detections" stroke="currentColor" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="alerts" stroke="currentColor" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-legend"><span><i /> Detections</span><span><i className="dashed" /> Alerts</span></div>
        </div>

        <CameraStatus cameras={cameras} />
      </section>

      <RecentEvents alerts={alerts} onReview={() => navigate('/alerts')} />
    </>
  )
}
