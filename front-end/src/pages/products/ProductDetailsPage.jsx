import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProductById } from "../../api/products.api"
import Loader from "../../components/common/Loader"
import EmptyState from "../../components/common/EmptyState"
import ProductActions from "../../components/product/ProductActions"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState("")

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      try {
        const data = await getProductById(id)
        if (mounted) {
          setProduct(data)
          setActiveImage(data.images?.[0] || "")
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader size={32} />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <EmptyState
          title="Product not found"
          description="We couldn't find the product you're looking for."
          action={
            <Link
              to="/products"
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-black transition"
            >
              Browse products
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-default bg-surface">
            <img
              src={activeImage}
              alt={product.name}
              className="h-[420px] w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex gap-3">
            {product.images?.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`h-20 w-20 overflow-hidden rounded-xl border ${
                  activeImage === image
                    ? "border-primary"
                    : "border-default"
                }`}
              >
                <img src={image} alt={product.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-primary">
            {product.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-primary">
            ${product.price.toFixed(2)}
            <span className="ml-2 text-sm font-normal text-secondary">
              (Includes tax)
            </span>
          </p>
          <p className="mt-3 text-sm text-secondary">
            Stock status:{" "}
            <span className="text-primary">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
              Color
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-default px-3 py-1 text-sm text-secondary">
              {product.color}
            </div>
          </div>

          <ProductActions product={product} />

          <div className="mt-8 space-y-4 text-sm text-secondary">
            <div>
              <h3 className="text-base font-medium text-primary">
                Product Description
              </h3>
              <p className="mt-2">{product.description}</p>
            </div>
            <div>
              <h3 className="text-base font-medium text-primary">Material</h3>
              <p className="mt-2">{product.material}</p>
            </div>
            <div>
              <h3 className="text-base font-medium text-primary">
                Care Instructions
              </h3>
              <p className="mt-2">{product.care}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
