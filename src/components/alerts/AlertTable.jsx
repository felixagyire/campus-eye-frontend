import { Eye } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'

export default function AlertTable({ alerts, onReview }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Camera</th>
            <th>Track ID</th>
            <th>Confidence</th>
            <th>Severity</th>
            <th>Time</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>
                <div className="table-primary">{alert.type}</div>
                <div className="table-secondary">{alert.id}</div>
              </td>
              <td>{alert.camera}</td>
              <td className="mono">{alert.trackId}</td>
              <td>{Math.round(alert.confidence * 100)}%</td>
              <td><StatusBadge value={alert.severity} /></td>
              <td>{alert.timestamp}</td>
              <td>
                <button className="table-action" onClick={() => onReview(alert)} title="Review">
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
