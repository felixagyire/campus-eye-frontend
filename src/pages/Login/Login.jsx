import { ShieldCheck, LockKeyhole, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-visual">
        <div className="login-visual__grid" />
        <div className="login-visual__content">
          <div className="brand brand--large">
            <div className="brand__mark"><ShieldCheck size={25} /></div>
            <div><strong>Campus Eye</strong><span>Intelligent Monitoring Platform</span></div>
          </div>
          <div>
            <span className="eyebrow">SECURITY OPERATIONS</span>
            <h1>Observe. Review. Respond.</h1>
            <p>A controlled interface for monitoring campus activity and reviewing computer-vision event candidates.</p>
          </div>
        </div>
      </div>

      <div className="login-panel">
        <form className="login-form" onSubmit={submit}>
          <div className="login-heading">
            <div className="mobile-brand"><ShieldCheck size={24} /></div>
            <span className="eyebrow">Authorized access</span>
            <h2>Sign in to Campus Eye</h2>
            <p>Use your assigned account to continue to the monitoring workspace.</p>
          </div>

          <label>
            Email address
            <input type="email" placeholder="name@campus.edu" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" required />
          </label>

          <button className="primary-button primary-button--full" type="submit">
            Continue <ArrowRight size={17} />
          </button>

          <div className="login-security">
            <LockKeyhole size={15} />
            <span>Access is restricted to authorized personnel.</span>
          </div>
        </form>
      </div>
    </div>
  )
}
