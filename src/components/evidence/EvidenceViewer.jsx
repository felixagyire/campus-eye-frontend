import { FileSearch, ShieldCheck } from 'lucide-react'

export default function EvidenceViewer({ item }) {
  if (!item) return <div className="evidence-preview"><FileSearch size={28} /><span>Select an evidence item to review.</span></div>

  return (
    <div className="evidence-preview">
      <div className="evidence-preview__visual">
        <div className="evidence-placeholder">
          <span>Evidence Preview</span>
          <small>{item.camera} · {item.timestamp}</small>
        </div>
        <div className="evidence-box" />
      </div>
      <div className="evidence-preview__meta">
        <div>
          <span className="eyebrow">Event</span>
          <h2>{item.event}</h2>
        </div>
        <div className="verification-note">
          <ShieldCheck size={17} />
          <span>Evidence is presented for authorized human review.</span>
        </div>
      </div>
    </div>
  )
}
