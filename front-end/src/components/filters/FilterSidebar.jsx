const filterOptions = {
  category: ["Shirt", "Pant", "Kurta", "Blazer", "Sweater"],
  gender: ["Men", "Women", "Kids"],
  material: ["Cotton", "Linen", "Wool Blend", "Merino", "Twill"],
  color: ["White", "Black", "Navy", "Sand", "Grey", "Blue"],
  priceRange: ["0-100", "100-150", "150-250", "250-500"],
}

export default function FilterSidebar({ filters, onChange }) {
  const toggleValue = (key, value) => {
    const current = filters[key] || []
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value]
    onChange({ ...filters, [key]: next })
  }

  const setPriceRange = (value) => {
    onChange({ ...filters, priceRange: value })
  }

  return (
    <aside className="rounded-xl border border-default bg-surface p-5">
      <h3 className="text-base font-semibold text-primary">Filters</h3>

      <div className="mt-6 space-y-6 text-sm text-secondary">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Category
          </p>
          <div className="mt-3 space-y-2">
            {filterOptions.category.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.category || []).includes(item)}
                  onChange={() => toggleValue("category", item)}
                  className="h-4 w-4 rounded border-default text-secondary"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Gender
          </p>
          <div className="mt-3 space-y-2">
            {filterOptions.gender.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.gender || []).includes(item)}
                  onChange={() => toggleValue("gender", item)}
                  className="h-4 w-4 rounded border-default text-secondary"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Material
          </p>
          <div className="mt-3 space-y-2">
            {filterOptions.material.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.material || []).includes(item)}
                  onChange={() => toggleValue("material", item)}
                  className="h-4 w-4 rounded border-default text-secondary"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Color
          </p>
          <div className="mt-3 space-y-2">
            {filterOptions.color.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.color || []).includes(item)}
                  onChange={() => toggleValue("color", item)}
                  className="h-4 w-4 rounded border-default text-secondary"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Price Range
          </p>
          <div className="mt-3 space-y-2">
            {filterOptions.priceRange.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={filters.priceRange === item}
                  onChange={() => setPriceRange(item)}
                  className="h-4 w-4 rounded border-default text-secondary"
                />
                ${item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(event) =>
                onChange({ ...filters, inStock: event.target.checked })
              }
              className="h-4 w-4 rounded border-default text-secondary"
            />
            In stock only
          </label>
        </div>
      </div>
    </aside>
  )
}
