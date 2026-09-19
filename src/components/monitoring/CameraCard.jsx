import { Maximize2, MoreHorizontal, Users } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'

export default function CameraCard({ camera }) {
  return (
    <div className="camera-card">
      <div className="camera-card__feed">
        <div className="feed-placeholder">
          <div className="scan-line" />
          <span>LIVE FEED</span>
        </div>
        <div className="camera-card__top">
          <span className="live-indicator"><span /> LIVE</span>
          <button className="feed-action"><Maximize2 size={15} /></button>
        </div>
        <div className="camera-card__bottom">
          <span>{camera.id}</span>
          <span><Users size={14} /> {camera.viewers}</span>
        </div>
      </div>
      <div className="camera-card__info">
        <div>
          <strong>{camera.name}</strong>
          <span>{camera.location}</span>
        </div>
        <StatusBadge value={camera.status} />
        <button className="icon-button icon-button--small"><MoreHorizontal size={17} /></button>
      </div>
    </div>
  )
}
