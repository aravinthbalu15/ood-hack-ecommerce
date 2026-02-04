import { mockDb } from "./mockDb"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getOrders() {
  await delay(600)
  return mockDb.orders
}
