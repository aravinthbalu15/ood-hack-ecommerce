import { useCart } from "../../context/CartContext"
import CartItem from "./CartItem"
import CartEmpty from "./CartEmpty"

export default function CartList() {
  const { cart } = useCart()

  if (cart.length === 0) return <CartEmpty />

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}
