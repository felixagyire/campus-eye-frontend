const styles = {
  online: 'status status--online',
  active: 'status status--online',
  low: 'status status--low',
  medium: 'status status--medium',
  high: 'status status--high',
  critical: 'status status--critical',
  maintenance: 'status status--maintenance',
  offline: 'status status--offline',
  reviewed: 'status status--reviewed',
  new: 'status status--new',
  inactive: 'status status--offline'
}

export default function StatusBadge({ value, label }) {
  return <span className={styles[value] || 'status'}>{label || value}</span>
}
