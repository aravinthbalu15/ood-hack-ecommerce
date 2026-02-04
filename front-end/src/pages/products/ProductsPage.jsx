import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getProducts } from "../../api/products.api"
import FilterSidebar from "../../components/filters/FilterSidebar"
import ProductCardContainer from "../../components/product/ProductCardContainer"
import Skeleton from "../../components/common/Skeleton"
import EmptyState from "../../components/common/EmptyState"

const defaultFilters = {
  category: [],
  gender: [],
  material: [],
  color: [],
  priceRange: "",
  inStock: false,
}

export default function ProductsPage() {
  const [filters, setFilters] = useState(defaultFilters)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const gender = searchParams.get("gender")
    if (gender) {
      setFilters((prev) => ({ ...prev, gender: [gender] }))
    }
  }, [searchParams])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      const data = await getProducts(filters)
      if (mounted) {
        setProducts(data.items)
        setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [filters])

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/4">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-primary">Products</h1>
            <span className="text-sm text-secondary">
              {products.length} items
            </span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              Array.from({ length: 9 }).map((_, index) => (
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
            ) : products.length === 0 ? (
              <div className="col-span-full">
                <EmptyState
                  title="No products found"
                  description="Try adjusting filters to see more results."
                />
              </div>
            ) : (
              products.map((product) => (
                <ProductCardContainer key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
