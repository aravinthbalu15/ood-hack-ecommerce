import { useEffect, useState } from "react"
import { getProducts } from "../../api/products.api"
import ProductCardContainer from "../../components/product/ProductCardContainer"
import Skeleton from "../../components/common/Skeleton"

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      const data = await getProducts()
      if (mounted) {
        setProducts(data.items.slice(0, 8))
        setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-primary">Featured Products</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-default bg-surface p-4"
              >
                <Skeleton className="h-40 w-full" />
                <Skeleton className="mt-4 h-4 w-3/4" />
                <Skeleton className="mt-2 h-4 w-1/2" />
                <Skeleton className="mt-4 h-8 w-full" />
              </div>
            ))
          : products.map((product) => (
              <ProductCardContainer key={product.id} product={product} />
            ))}
      </div>
    </section>
  )
}
