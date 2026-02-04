import { useLocation, useNavigate } from "react-router-dom"
import WishlistItem from "./WishlistItem"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { useToast } from "../../context/ToastContext"
import { setPendingAction } from "../../utils/pendingAction"

export default function WishlistItemContainer({ item }) {
  const { isAuthenticated } = useAuth()
  const { isPendingAdd } = useCart()
  const { remove, moveToCart, isPending } = useWishlist()
  const { pushToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAuthRedirect = (action) => {
    setPendingAction({
      ...action,
      redirect: `${location.pathname}${location.search}`,
    })
    navigate("/login")
  }

  const handleMoveToCart = async () => {
    if (!isAuthenticated) {
      return handleAuthRedirect({ type: "moveToCart", productId: item.id })
    }
    try {
      await moveToCart(item.id)
      pushToast({
        type: "success",
        title: "Moved to cart",
        message: "Item added to your cart.",
      })
    } catch (error) {
      pushToast({
        type: "error",
        title: "Unable to move",
        message: "Please try again.",
      })
    }
  }

  const handleRemove = async () => {
    try {
      await remove(item.id)
      pushToast({
        type: "info",
        title: "Removed from wishlist",
      })
    } catch (error) {
      pushToast({
        type: "error",
        title: "Unable to remove",
        message: "Please try again.",
      })
    }
  }

  return (
    <WishlistItem
      item={item}
      onMoveToCart={handleMoveToCart}
      onRemove={handleRemove}
      loading={isPending(item.id) || isPendingAdd(item.id)}
    />
  )
}
