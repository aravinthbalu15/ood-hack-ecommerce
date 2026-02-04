import { mockDb } from "./mockDb"

const CART_KEY = "appareldesk_cart"
const COUPON_KEY = "appareldesk_coupon"
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const readCart = () => {
  const stored = localStorage.getItem(CART_KEY)
  if (stored) return JSON.parse(stored)
  localStorage.setItem(CART_KEY, JSON.stringify(mockDb.cart))
  return mockDb.cart
}

const writeCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export async function getCart() {
  await delay(400)
  return readCart()
}

export async function addToCart(productId, qty = 1) {
  await delay(400)
  const product = mockDb.products.find((item) => item.id === productId)
  if (!product) {
    throw new Error("Product not found")
  }
  const current = readCart()
  const exists = current.find((item) => item.id === productId)
  const updated = exists
    ? current.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + qty } : item
      )
    : [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images?.[0],
          qty,
        },
      ]
  writeCart(updated)
  return updated
}

export async function updateCartItem(productId, qty) {
  await delay(300)
  const current = readCart()
  const updated = current.map((item) =>
    item.id === productId ? { ...item, qty } : item
  )
  writeCart(updated)
  return updated
}

export async function removeCartItem(productId) {
  await delay(300)
  const current = readCart()
  const updated = current.filter((item) => item.id !== productId)
  writeCart(updated)
  return updated
}

export async function applyCoupon(code) {
  await delay(500)
  const coupon = mockDb.coupons.find(
    (item) => item.code.toLowerCase() === code.toLowerCase()
  )
  if (!coupon) {
    return { status: "invalid", discountPercent: 0 }
  }
  if (coupon.status !== "valid") {
    return { status: coupon.status, discountPercent: 0 }
  }

  localStorage.setItem(COUPON_KEY, JSON.stringify(coupon))
  return { status: "valid", discountPercent: coupon.discountPercent }
}

export async function getAppliedCoupon() {
  await delay(200)
  const stored = localStorage.getItem(COUPON_KEY)
  return stored ? JSON.parse(stored) : null
}
