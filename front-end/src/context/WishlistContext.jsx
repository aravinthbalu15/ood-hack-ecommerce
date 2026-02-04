import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../api/wishlist.api"
import { useCart } from "./CartContext"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [pendingIds, setPendingIds] = useState([])
  const productCache = useRef(new Map())
  const { add } = useCart()

  useEffect(() => {
    let mounted = true
    const init = async () => {
      setLoading(true)
      const data = await getWishlist()
      if (mounted) {
        setItems(data)
        setLoading(false)
      }
    }
    init()
    return () => {
      mounted = false
    }
  }, [])

  const registerProduct = useCallback((product) => {
    if (!product?.id) return
    productCache.current.set(product.id, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image,
    })
  }, [])

  const markPending = (id, isPending) => {
    setPendingIds((prev) =>
      isPending ? Array.from(new Set([...prev, id])) : prev.filter((item) => item !== id)
    )
  }

  const addItem = async (productId) => {
    const previous = items
    if (items.some((item) => item.id === productId)) {
      return { status: "exists" }
    }
    const cached = productCache.current.get(productId)
    if (cached) {
      setItems((prev) => [...prev, cached])
    }
    markPending(productId, true)
    try {
      const updated = await addToWishlist(productId)
      setItems(updated)
      return { status: "added" }
    } catch (error) {
      setItems(previous)
      throw error
    } finally {
      markPending(productId, false)
    }
  }

  const removeItem = async (id) => {
    const previous = items
    setItems((prev) => prev.filter((item) => item.id !== id))
    markPending(id, true)
    try {
      const updated = await removeFromWishlist(id)
      setItems(updated)
      return { status: "removed" }
    } catch (error) {
      setItems(previous)
      throw error
    } finally {
      markPending(id, false)
    }
  }

  const moveToCart = async (productId) => {
    await add(productId, 1)
    await removeItem(productId)
  }

  const isWishlisted = useCallback(
    (productId) => items.some((item) => item.id === productId),
    [items]
  )
  const isPending = useCallback(
    (productId) => pendingIds.includes(productId),
    [pendingIds]
  )

  return (
    <WishlistContext.Provider
      value={{
        items,
        loading,
        count: items.length,
        add: addItem,
        remove: removeItem,
        moveToCart,
        registerProduct,
        isWishlisted,
        isPending,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
