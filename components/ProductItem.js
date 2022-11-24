import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
export default function ProductItem({product}) {
  return (
    <Container>
      <div className='col'>
        <div className='card'>
          <img src= {product.image} className='imagen-card' />
          <div className='card-body'>
            <h5>{product.name}</h5>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <Link href={`/product/${product.slug}`}>
              <button className='btn btn-primary'> View product </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
