import React, { FC, ReactNode } from 'react'

interface ProductPageLayoutProps {
  children: ReactNode
}

const ProductPageLayout: FC<ProductPageLayoutProps> = (props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  )
}

export default ProductPageLayout
