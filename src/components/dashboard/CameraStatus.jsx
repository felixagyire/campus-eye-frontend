import { Camera } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'

export default function CameraStatus({ cameras }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <div>
          <h2>Camera Network</h2>
          <p>Current camera service status.</p>
        </div>
        <Camera size={18} />
      </div>
      <div className="camera-status-list">
        {cameras.map((camera) => (
          <div className="camera-status-row" key={camera.id}>
            <div className="camera-status-row__icon"><Camera size={17} /></div>
            <div className="camera-status-row__main">
              <strong>{camera.name}</strong>
              <span>{camera.id} · {camera.location}</span>
            </div>
            <StatusBadge value={camera.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
