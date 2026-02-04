import { mockDb } from "./mockDb"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getInvoices() {
  await delay(600)
  return mockDb.invoices
}

export async function downloadInvoice(id) {
  await delay(500)
  const invoice = mockDb.invoices.find((item) => item.id === id)
  if (!invoice) {
    throw new Error("Invoice not found")
  }
  return invoice.url
}
