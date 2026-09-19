import { useEffect, useState } from 'react'
import { getAlerts } from '../services/alertService'

export function useAlerts() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    getAlerts()
      .then((result) => active && setData(result))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))

    return () => { active = false }
  }, [])

  return { data, loading, error }
}
