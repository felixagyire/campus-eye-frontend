import { NavLink } from 'react-router-dom'
import {
  Activity, Bell, Camera, FileSearch, LayoutDashboard, Radio,
  ShieldCheck, Users, HeartPulse
} from 'lucide-react'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/live-monitoring', label: 'Live Monitoring', icon: Radio },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/evidence', label: 'Evidence', icon: FileSearch },
  { to: '/people-tracks', label: 'People & Tracks', icon: Users },
  { to: '/system-health', label: 'System Health', icon: HeartPulse }
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand__mark"><ShieldCheck size={22} /></div>
        <div>
          <strong>Campus Eye</strong>
          <span>Monitoring Platform</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        <p className="nav-label">Workspace</p>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="system-pill">
          <span className="pulse-dot" />
          <div>
            <strong>System operational</strong>
            <small>All core services responding</small>
          </div>
        </div>
      </div>
    </aside>
  )
}
