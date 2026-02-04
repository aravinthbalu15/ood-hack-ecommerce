const KEY = "appareldesk_pending_action"

export const setPendingAction = (payload) => {
  sessionStorage.setItem(KEY, JSON.stringify(payload))
}

export const getPendingAction = () => {
  const stored = sessionStorage.getItem(KEY)
  return stored ? JSON.parse(stored) : null
}

export const clearPendingAction = () => {
  sessionStorage.removeItem(KEY)
}
