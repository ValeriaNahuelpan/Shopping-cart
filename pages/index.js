import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'
import { Container } from 'react-bootstrap'
export default function Home() {
  return (
    <div>
      <Layout title={"home shopping"}>
        
        <Container>
          <h2 className='mb-5 ms-auto'>Products</h2>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            { data.products.map( (product) => (
                   <ProductItem key={product.slug} product={product}/>
            ))
            }

          </div>
        </Container>
      </Layout>
    </div>
  )
}
