const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const DEMO_USER = {
  id: "user-001",
  name: "Aarav Mehta",
  email: "demo@appareldesk.com",
}

export async function login(payload) {
  await delay(600)
  if (!payload?.email || !payload?.password) {
    throw new Error("Email and password are required")
  }
  return {
    token: "mock-jwt-token",
    user: { ...DEMO_USER, email: payload.email },
  }
}

export async function signup(payload) {
  await delay(700)
  if (!payload?.email || !payload?.password || !payload?.name) {
    throw new Error("All fields are required")
  }
  return {
    token: "mock-jwt-token",
    user: { id: "user-002", name: payload.name, email: payload.email },
  }
}

export async function logout() {
  await delay(300)
  return { success: true }
}

export async function getProfile() {
  await delay(300)
  return DEMO_USER
}
