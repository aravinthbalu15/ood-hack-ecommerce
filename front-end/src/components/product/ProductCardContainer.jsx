import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { useToast } from "../../context/ToastContext"
import { setPendingAction } from "../../utils/pendingAction"

export default function ProductCardContainer({ product }) {
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

  const handleAuthRedirect = (action) => {
    setPendingAction({
      ...action,
      redirect: `${location.pathname}${location.search}`,
    })
    navigate("/login")
  }

  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      return handleAuthRedirect({ type: "cart", productId, qty: 1 })
    }
    if (isInCart(productId)) {
      navigate("/cart")
      return
    }
    try {
      await add(productId, 1)
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

  const handleToggleWishlist = async (productId) => {
    if (!isAuthenticated) {
      return handleAuthRedirect({ type: "wishlist", productId })
    }
    try {
      if (isWishlisted(productId)) {
        await removeWishlist(productId)
        pushToast({
          type: "info",
          title: "Removed from wishlist",
        })
      } else {
        const result = await addWishlist(productId)
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
    <ProductCard
      product={product}
      onAddToCart={handleAddToCart}
      onToggleWishlist={handleToggleWishlist}
      isWishlisted={isWishlisted(product.id)}
      isAdding={isPendingAdd(product.id)}
      isWishlistLoading={isPending(product.id)}
      inCart={isInCart(product.id)}
      disabled={!product.inStock && !isInCart(product.id)}
    />
  )
}
