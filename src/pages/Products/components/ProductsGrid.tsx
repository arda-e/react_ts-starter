import React, { FC } from 'react'
import {
  // ProductApi,
  ProductWithIdAndTimeStamp,
} from '../../../entities'
import ProductCard from './ProductCard'
// import { useApi } from '../../../hooks'
// import { useProductsFilter } from '../hooks'/

interface ProductsGridProps {
  products?: ProductWithIdAndTimeStamp[]
}

const ProductsGrid: FC<ProductsGridProps> = (props) => {
  const { products } = props

  // const [deleteProductResponse, deleteProduct] = useApi(ProductApi.delete)

  const deleteProduct = () => {}

  //TODO: Trigger toastify on succ or error

  if (products?.length === 0) {
    return (
      <div className="products-grid">
        <h1>No products found</h1>
      </div>
    )
  }

  return (
    <div className="products-grid">
      {products?.map((product: ProductWithIdAndTimeStamp) => {
        return (
          <>
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          </>
        )
      })}
    </div>
  )
}

export default ProductsGrid
