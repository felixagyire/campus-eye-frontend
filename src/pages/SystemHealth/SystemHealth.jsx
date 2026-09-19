import { Activity, Database, Radio, Server, ShieldCheck, Wifi } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import ServiceStatus from '../../components/system/ServiceStatus'

const services = [
  ['Camera Gateway', '4 camera endpoints registered', 'online'],
  ['Detection Service', 'Object detection pipeline responding', 'online'],
  ['Tracking Service', 'Multi-frame tracking operational', 'online'],
  ['ReID Service', 'Embedding and association service responding', 'online'],
  ['Event Service', 'Event candidate generation operational', 'online'],
  ['Evidence Store', 'Evidence metadata storage responding', 'online'],
  ['API Gateway', 'REST service responding normally', 'online'],
  ['WebSocket Gateway', 'Real-time metadata channel available', 'online']
]

export default function SystemHealth() {
  return (
    <>
      <PageHeader title="System Health" description="Operational status of services supporting the Campus Eye interface." />
      <div className="health-overview">
        <div className="health-score"><div className="health-score__ring">99<span>%</span></div><div><strong>Operational</strong><p>Core services are responding.</p></div></div>
        <div className="health-metrics"><div><span>API latency</span><strong>84 ms</strong></div><div><span>Active connections</span><strong>16</strong></div><div><span>Camera uptime</span><strong>99.4%</strong></div></div>
      </div>
      <div className="panel">
        <div className="panel__header"><div><h2>Service status</h2><p>Last checked moments ago.</p></div><Activity size={18} /></div>
        <div className="service-list">
          {services.map(([name, detail, status]) => <ServiceStatus key={name} name={name} detail={detail} status={status} />)}
        </div>
      </div>
      <div className="health-footnote"><Server size={16} /><span>Backend health values are currently represented by mock data and are ready to be replaced with API responses.</span></div>
    </>
  )
}
