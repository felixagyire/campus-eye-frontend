import { Bell, ChevronDown, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__context">
        <ShieldCheck size={18} />
        <span>Security Operations</span>
      </div>

      <div className="navbar__actions">
        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>
        <div className="user-menu">
          <div className="avatar">FA</div>
          <div className="user-menu__text">
            <strong>Felix A.</strong>
            <span>Administrator</span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  )
}
