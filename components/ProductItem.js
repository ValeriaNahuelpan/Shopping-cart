import React from 'react'
import { Container } from 'react-bootstrap'

export default function ProductItem({product}) {
  return (
    <Container>
        <div className='col'>
          <div className='card'>
              <img src= {product.image} className='imagen-card' />
        </div>
      </div>
    </Container>
  )
}
