import { ArrowRight, MapPin, UserRound } from 'lucide-react'
import StatusBadge from '../common/StatusBadge'

export default function TrackCard({ track }) {
  return (
    <div className="track-card">
      <div className="track-card__avatar"><UserRound size={21} /></div>
      <div className="track-card__main">
        <div className="track-card__title">
          <strong>{track.id}</strong>
          <StatusBadge value={track.status} />
        </div>
        <span><MapPin size={14} /> Current: {track.currentCamera}</span>
        <div className="track-history">
          {track.history.map((camera, index) => (
            <span key={`${camera}-${index}`}>
              {camera}{index < track.history.length - 1 && <ArrowRight size={12} />}
            </span>
          ))}
        </div>
      </div>
      <div className="track-card__confidence">
        <strong>{Math.round(track.confidence * 100)}%</strong>
        <span>confidence</span>
      </div>
    </div>
  )
}
