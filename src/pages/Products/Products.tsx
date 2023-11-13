import React, { useEffect } from 'react'
import { ProductsPageLayout, ProductsGrid, ProductFilter } from './components'
import { useApi } from '../../hooks'
import { ProductApi } from '../../entities'
import { useProductsFilter } from './hooks'

const Products = () => {
  const [getProductsResponse, getProducts] = useApi(ProductApi.findAll)
  const { products, filter, setFilter, applyFilter } = useProductsFilter(getProductsResponse.result)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    applyFilter()
  }, [filter])

  return (
    <>
      <ProductsPageLayout>
        <ProductFilter
          filter={filter}
          setFilter={setFilter}
        />
        <ProductsGrid products={products} />
      </ProductsPageLayout>
    </>
  )
}

export default Products
