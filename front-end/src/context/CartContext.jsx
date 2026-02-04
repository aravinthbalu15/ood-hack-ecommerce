import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import {
  addToCart,
  applyCoupon,
  getAppliedCoupon,
  getCart,
  removeCartItem,
  updateCartItem,
} from "../api/cart.api"

const CartContext = createContext()

const TAX_RATE = 0.1

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [pendingAddIds, setPendingAddIds] = useState([])
  const [pendingUpdateIds, setPendingUpdateIds] = useState([])
  const [pendingRemoveIds, setPendingRemoveIds] = useState([])
  const [couponState, setCouponState] = useState({
    status: "idle",
    code: "",
    discountPercent: 0,
  })
  const productCache = useRef(new Map())

  useEffect(() => {
    let mounted = true
    const init = async () => {
      setLoading(true)
      const cartItems = await getCart()
      const coupon = await getAppliedCoupon()
      if (mounted) {
        setItems(cartItems)
        if (coupon) {
          setCouponState({
            status: "valid",
            code: coupon.code,
            discountPercent: coupon.discountPercent,
          })
        }
        setLoading(false)
      }
    }
    init()
    return () => {
      mounted = false
    }
  }, [])

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const discount = Math.round(
      (subtotal * couponState.discountPercent) / 100
    )
    const tax = Math.round((subtotal - discount) * TAX_RATE)
    const total = subtotal - discount + tax
    return { subtotal, discount, tax, total }
  }, [items, couponState.discountPercent])

  const registerProduct = useCallback((product) => {
    if (!product?.id) return
    productCache.current.set(product.id, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image,
    })
  }, [])

  const markPending = (setter, id, isPending) => {
    setter((prev) =>
      isPending ? Array.from(new Set([...prev, id])) : prev.filter((item) => item !== id)
    )
  }

  const add = async (productId, qty = 1) => {
    const previous = items
    const cached = productCache.current.get(productId)
    if (cached) {
      setItems((prev) => {
        const existing = prev.find((item) => item.id === productId)
        if (existing) {
          return prev.map((item) =>
            item.id === productId ? { ...item, qty: item.qty + qty } : item
          )
        }
        return [...prev, { ...cached, qty }]
      })
    }
    markPending(setPendingAddIds, productId, true)
    try {
      const updated = await addToCart(productId, qty)
      setItems(updated)
      return { status: "success" }
    } catch (error) {
      setItems(previous)
      throw error
    } finally {
      markPending(setPendingAddIds, productId, false)
    }
  }

  const updateQty = async (id, qty) => {
    if (qty < 1) return
    const previous = items
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    )
    markPending(setPendingUpdateIds, id, true)
    try {
      const updated = await updateCartItem(id, qty)
      setItems(updated)
    } catch (error) {
      setItems(previous)
      throw error
    } finally {
      markPending(setPendingUpdateIds, id, false)
    }
  }

  const remove = async (id) => {
    const previous = items
    setItems((prev) => prev.filter((item) => item.id !== id))
    markPending(setPendingRemoveIds, id, true)
    try {
      const updated = await removeCartItem(id)
      setItems(updated)
    } catch (error) {
      setItems(previous)
      throw error
    } finally {
      markPending(setPendingRemoveIds, id, false)
    }
  }

  const apply = async (code) => {
    setCouponState((prev) => ({ ...prev, status: "loading", code }))
    const result = await applyCoupon(code)
    setCouponState({
      status: result.status,
      code,
      discountPercent: result.discountPercent,
    })
    return result
  }

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0)
  const isInCart = useCallback(
    (productId) => items.some((item) => item.id === productId),
    [items]
  )
  const isPendingAdd = useCallback(
    (productId) => pendingAddIds.includes(productId),
    [pendingAddIds]
  )
  const isPendingUpdate = useCallback(
    (productId) => pendingUpdateIds.includes(productId),
    [pendingUpdateIds]
  )
  const isPendingRemove = useCallback(
    (productId) => pendingRemoveIds.includes(productId),
    [pendingRemoveIds]
  )

  return (
    <CartContext.Provider
      value={{
        items,
        loading,
        summary,
        totalItems,
        couponState,
        add,
        updateQty,
        remove,
        apply,
        registerProduct,
        isInCart,
        isPendingAdd,
        isPendingUpdate,
        isPendingRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
