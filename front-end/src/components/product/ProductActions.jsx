import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Heart, Loader2, ShoppingBag } from "lucide-react"
import QuantitySelector from "../common/QuantitySelector"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { useToast } from "../../context/ToastContext"
import { setPendingAction } from "../../utils/pendingAction"

export default function ProductActions({ product }) {
  const [qty, setQty] = useState(1)
  const { isAuthenticated } = useAuth()
  const { add, registerProduct, isInCart, isPendingAdd } = useCart()
  const {
    add: addWishlist,
    remove: removeWishlist,
    registerProduct: registerWishlistProduct,
    isWishlisted,
    isPending,
  } = useWishlist()
  const { pushToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    registerProduct(product)
    registerWishlistProduct(product)
  }, [product, registerProduct, registerWishlistProduct])

  useEffect(() => {
    setQty(1)
  }, [product?.id])

  const handleAuthRedirect = (action) => {
    setPendingAction({
      ...action,
      redirect: `${location.pathname}${location.search}`,
    })
    navigate("/login")
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      return handleAuthRedirect({ type: "cart", productId: product.id, qty })
    }
    if (isInCart(product.id)) {
      navigate("/cart")
      return
    }
    try {
      await add(product.id, qty)
      pushToast({
        type: "success",
        title: "Added to cart",
        message: "Item has been added to your cart.",
      })
    } catch (error) {
      pushToast({
        type: "error",
        title: "Unable to add",
        message: "Please try again.",
      })
    }
  }

  const handleToggleWishlist = async () => {
    if (!isAuthenticated) {
      return handleAuthRedirect({ type: "wishlist", productId: product.id })
    }
    try {
      if (isWishlisted(product.id)) {
        await removeWishlist(product.id)
        pushToast({
          type: "info",
          title: "Removed from wishlist",
        })
      } else {
        const result = await addWishlist(product.id)
        if (result?.status === "exists") {
          pushToast({
            type: "info",
            title: "Already in wishlist",
          })
        } else {
          pushToast({
            type: "success",
            title: "Added to wishlist",
          })
        }
      }
    } catch (error) {
      pushToast({
        type: "error",
        title: "Wishlist failed",
        message: "Please try again.",
      })
    }
  }

  return (
    <div className="mt-6 space-y-6">
      <div>
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">
          Quantity
        </p>
        <div className="mt-2">
          <QuantitySelector
            value={qty}
            onChange={setQty}
            disabled={isPendingAdd(product.id)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleAddToCart}
          disabled={(!product.inStock && !isInCart(product.id)) || isPendingAdd(product.id)}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black transition disabled:opacity-60"
        >
          {isPendingAdd(product.id) ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ShoppingBag size={16} />
          )}
          {isInCart(product.id) ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          onClick={handleToggleWishlist}
          disabled={isPending(product.id)}
          className="flex items-center justify-center gap-2 rounded-lg border border-default px-6 py-3 text-sm font-semibold text-primary hover:bg-slate-100 disabled:opacity-60"
        >
          {isPending(product.id) ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Heart size={16} />
          )}
          {isWishlisted(product.id) ? "Remove Wishlist" : "Add to Wishlist"}
        </button>
      </div>

      {!product.inStock && (
        <p className="text-sm text-error">This item is currently out of stock.</p>
      )}
    </div>
  )
}
