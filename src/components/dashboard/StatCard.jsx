export default function StatCard({ icon: Icon, label, value, detail, tone = 'default' }) {
  return (
    <div className={`stat-card stat-card--${tone}`}>
      <div className="stat-card__top">
        <div className="stat-card__icon"><Icon size={19} /></div>
        {detail && <span className="stat-card__detail">{detail}</span>}
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  )
}
