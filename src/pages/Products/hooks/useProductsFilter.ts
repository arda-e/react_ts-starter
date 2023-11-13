import { useState } from 'react'
import { ProductWithIdAndTimeStamp } from '../../../entities'

interface ProductFilterHook {
  products: ProductWithIdAndTimeStamp[] | undefined
  filter: string
  setFilter: (filter: string) => void
  applyFilter: () => void
}

type useProductFilter = (initialProducts: ProductWithIdAndTimeStamp[] | undefined) => ProductFilterHook

const useProductFilter: useProductFilter = (initialProducts) => {
  const [products, setProducts] = useState<ProductWithIdAndTimeStamp[] | undefined>(initialProducts)
  const [filter, setFilter] = useState<string>('')

  const applyFilter = () => {
    if (!filter) {
      setProducts(initialProducts)
    } else {
      const filteredProducts = initialProducts?.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )
      setProducts(filteredProducts)
    }
  }

  return {
    products,
    filter,
    setFilter,
    applyFilter,
  }
}

export default useProductFilter
