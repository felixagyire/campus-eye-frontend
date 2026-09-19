import { useState } from 'react'
import { Check, FileSearch, ShieldCheck } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import EvidenceViewer from '../../components/evidence/EvidenceViewer'
import StatusBadge from '../../components/common/StatusBadge'
import { evidence } from '../../data/mockData'

export default function Evidence() {
  const [selected, setSelected] = useState(evidence[0])
  const [reviewed, setReviewed] = useState(selected?.reviewed)

  const select = (item) => {
    setSelected(item)
    setReviewed(item.reviewed)
  }

  return (
    <>
      <PageHeader title="Evidence Review" description="Inspect event evidence while preserving uncertainty and human review." />
      <div className="evidence-layout">
        <div className="panel evidence-list">
          <div className="panel__header"><div><h2>Evidence queue</h2><p>{evidence.length} items</p></div><FileSearch size={18} /></div>
          {evidence.map((item) => (
            <button className={`evidence-item ${selected?.id === item.id ? 'evidence-item--active' : ''}`} key={item.id} onClick={() => select(item)}>
              <div><div className="evidence-item__title"><strong>{item.event}</strong><StatusBadge value={item.reviewed ? 'reviewed' : 'new'} /></div><span>{item.id} · {item.camera}</span></div>
              <time>{item.timestamp}</time>
            </button>
          ))}
        </div>

        <div className="panel evidence-detail">
          <EvidenceViewer item={selected} />
          {selected && (
            <div className="evidence-details">
              <div className="detail-grid">
                <div><span>Evidence ID</span><strong>{selected.id}</strong></div>
                <div><span>Camera</span><strong>{selected.camera}</strong></div>
                <div><span>Track ID</span><strong className="mono">{selected.trackId}</strong></div>
                <div><span>Confidence</span><strong>{Math.round(selected.confidence * 100)}%</strong></div>
              </div>
              <p className="evidence-description">{selected.description}</p>
              <div className="verification-note"><ShieldCheck size={17} /><span>Interpretation should remain subject to authorized human review.</span></div>
              <button className="primary-button" onClick={() => setReviewed(true)} disabled={reviewed}><Check size={16} /> {reviewed ? 'Marked as reviewed' : 'Mark as reviewed'}</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
