import React, { FC, useState } from 'react'

interface ProductFilterProps {
  filter: string
  setFilter: (filter: string) => void
}

const ProductFilter: FC<ProductFilterProps> = ({ filter, setFilter }) => {
  const [inputFilter, setInputFilter] = useState(filter)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilter(event.target.value)
  }

  const handleSearchClick = () => {
    setFilter(inputFilter)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Filter Products"
        value={inputFilter}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </>
  )
}

export default ProductFilter
