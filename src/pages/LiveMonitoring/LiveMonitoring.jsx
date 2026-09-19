import { Camera, RefreshCw } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import CameraCard from '../../components/monitoring/CameraCard'
import { cameras } from '../../data/mockData'

export default function LiveMonitoring() {
  return (
    <>
      <PageHeader
        title="Live Monitoring"
        description="View connected camera feeds and monitoring metadata."
        action={<button className="secondary-button"><RefreshCw size={16} /> Refresh feeds</button>}
      />
      <div className="monitoring-toolbar">
        <span><Camera size={16} /> {cameras.length} camera feeds</span>
        <span className="toolbar-status"><i /> Live connection active</span>
      </div>
      <div className="camera-grid">
        {cameras.map((camera) => <CameraCard key={camera.id} camera={camera} />)}
      </div>
      <div className="info-banner">
        <strong>Frontend integration point:</strong>
        <span>Live video can later be supplied by the backend through WebRTC/HLS while detection metadata can arrive through an API or WebSocket.</span>
      </div>
    </>
  )
}
