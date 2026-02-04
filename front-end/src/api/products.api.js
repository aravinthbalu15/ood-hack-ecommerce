import { mockDb } from "./mockDb"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const matchesFilter = (value, filterValue) => {
  if (!filterValue || filterValue.length === 0) return true
  return filterValue.includes(value)
}

export async function getProducts(filters = {}) {
  await delay(700)
  const {
    category = [],
    gender = [],
    material = [],
    color = [],
    priceRange = "",
    inStock = false,
  } = filters

  const [minPrice, maxPrice] = priceRange
    ? priceRange.split("-").map((item) => Number(item))
    : [null, null]

  const items = mockDb.products.filter((product) => {
    if (!product.published) return false
    if (!matchesFilter(product.category, category)) return false
    if (!matchesFilter(product.gender, gender)) return false
    if (!matchesFilter(product.material, material)) return false
    if (!matchesFilter(product.color, color)) return false
    if (inStock && !product.inStock) return false
    if (minPrice !== null && product.price < minPrice) return false
    if (maxPrice !== null && product.price > maxPrice) return false
    return true
  })

  return { items }
}

export async function getProductById(id) {
  await delay(500)
  const product = mockDb.products.find((item) => item.id === id)
  if (!product) {
    throw new Error("Product not found")
  }
  return product
}
