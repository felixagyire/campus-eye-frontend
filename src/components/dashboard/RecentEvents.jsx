import { ArrowUpRight } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'

export default function RecentEvents({ alerts, onReview }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <div>
          <h2>Recent Events</h2>
          <p>Latest event candidates requiring review or monitoring.</p>
        </div>
        <button className="text-button" onClick={onReview}>View all <ArrowUpRight size={15} /></button>
      </div>
      <div className="event-list">
        {alerts.map((alert) => (
          <button className="event-row" key={alert.id} onClick={onReview}>
            <div className="event-row__marker" />
            <div className="event-row__main">
              <strong>{alert.type}</strong>
              <span>{alert.camera} · {alert.trackId}</span>
            </div>
            <StatusBadge value={alert.severity} />
            <time>{alert.timestamp}</time>
          </button>
        ))}
      </div>
    </div>
  )
}
