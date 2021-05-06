import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout'
import Button from '../components/button'
import * as styles from '../components/css/single-product.module.css'

const productTemplate = ({ data: {product: {title, price, image,  longDescription:{longDescription}}}}) => {
    const productImage = getImage(image);
    return (
        <Layout>
            <section 
                className={styles.page}
            >
                <article>
                    <GatsbyImage image={productImage} alt={`${title} image`} />
                    <Link to="/">back to Home</Link>
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{longDescription}</p>
                    <Button secondary> Get this service </Button>
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
          image {
              gatsbyImageData
          }
        }
      }      
`

export default productTemplate
