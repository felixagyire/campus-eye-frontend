import { CheckCircle2, CircleAlert } from 'lucide-react'

export default function ServiceStatus({ name, detail, status = 'online' }) {
  const online = status === 'online'
  return (
    <div className="service-row">
      <div className={`service-icon ${online ? 'service-icon--online' : 'service-icon--warning'}`}>
        {online ? <CheckCircle2 size={18} /> : <CircleAlert size={18} />}
      </div>
      <div>
        <strong>{name}</strong>
        <span>{detail}</span>
      </div>
      <span className={`service-state ${online ? 'service-state--online' : 'service-state--warning'}`}>
        {online ? 'Operational' : 'Attention'}
      </span>
    </div>
  )
}
