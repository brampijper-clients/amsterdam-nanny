import React from 'react'
import { graphql, Link } from "gatsby"
// import Image from 'gatsby-image'

import Layout from '../components/layout'
// import styles from '../components/css/single-product.module.css'
// import Button from '../components/button'

const productTemplate = ({ data: {product: {title, price, longDescription:{longDescription}}}}) => {
    return (
        <Layout>
            <section 
                // className={styles.page}
            >
                <article>
                    {/* <Image fixed={fixed} alt={title} /> */}
                    <Link to="/">back to Home</Link>
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{longDescription}</p>
                    {/* <Button secondary> Get this service </Button> */}
                </article>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug:String) {
        product: contentfulServices(slug: {eq: $slug}) {
          title
          price
          longDescription {
            longDescription
          }
        }
      }      
`

export default productTemplate
