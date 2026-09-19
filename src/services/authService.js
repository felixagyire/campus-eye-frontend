export function isAuthenticated() {
  return Boolean(localStorage.getItem('campus_eye_session'))
}

export function startSession(user) {
  localStorage.setItem('campus_eye_session', JSON.stringify(user))
}

export function endSession() {
  localStorage.removeItem('campus_eye_session')
}
