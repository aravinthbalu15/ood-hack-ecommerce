import { mockDb } from "./mockDb"

const WISHLIST_KEY = "appareldesk_wishlist"
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const readWishlist = () => {
  const stored = localStorage.getItem(WISHLIST_KEY)
  if (stored) return JSON.parse(stored)
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(mockDb.wishlist))
  return mockDb.wishlist
}

const writeWishlist = (items) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items))
}

export async function getWishlist() {
  await delay(400)
  return readWishlist()
}

export async function addToWishlist(productId) {
  await delay(300)
  const product = mockDb.products.find((entry) => entry.id === productId)
  if (!product) {
    throw new Error("Product not found")
  }
  const current = readWishlist()
  if (current.find((entry) => entry.id === productId)) return current
  const updated = [
    ...current,
    {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0],
    },
  ]
  writeWishlist(updated)
  return updated
}

export async function removeFromWishlist(productId) {
  await delay(300)
  const current = readWishlist()
  const updated = current.filter((entry) => entry.id !== productId)
  writeWishlist(updated)
  return updated
}
