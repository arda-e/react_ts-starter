import React, { ReactElement } from 'react'
import { ProductWithIdAndTimeStamp } from '../../../entities'

interface ProductCardProps {
  product: ProductWithIdAndTimeStamp
  deleteProduct: (id: string) => void
}

const ProductCard = (props: ProductCardProps): ReactElement => {
  const { createdAt, updatedAt, name, description, price, id } = props.product

  return (
    <div
      id="product-card"
      className="border p-4 rounded shadow-md"
    >
      <div
        id="product-card__text"
        className="text-xl font-semibold mb-2"
      >
        {name}
      </div>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-green-600 font-semibold mb-2">${price}</p>
      <p className="text-gray-600 text-sm">Created: {createdAt}</p>
      <p className="text-gray-600 text-sm">Updated: {updatedAt}</p>
      <div
        id="product-card__actions"
        className="mt-4 flex justify-between"
      >
        <div
          id="product-card__actions__edit"
          className="text-blue-600"
        >
          <button className="hover:underline">Edit</button>
        </div>
        <div
          id="product-card__actions__delete"
          className="text-red-600"
        >
          <button onClick={() => props.deleteProduct(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
