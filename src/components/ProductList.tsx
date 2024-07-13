import React from 'react'
import Product from '../models/Product'
import './ProductList.css' // Import CSS for styling (if needed)

interface Props {
  data: Product[] | string // Adjusted to expect an array of Product
}

const ProductList: React.FC<Props> = ({ data }) => {
  return (
    <div className="product-list-container">
      {Array.isArray(data) ? (
        data.map((d) => (
          <div key={d.id} className="product-item">
            <h4>{d.name}</h4>
            <p>ID: {d.id}</p>
            <p>Price: {d.price}</p>
            <p>Instructor: {d.instructor}</p>
          </div>
        ))
      ) : (
        <p className="error-message">{data}</p> // Display error message if data is not an array
      )}
    </div>
  )
}

export default ProductList
