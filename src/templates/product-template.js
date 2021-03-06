import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MarkdownView from 'react-showdown';

import Layout from '../components/layout'
import Button from '../components/button'
import * as styles from '../components/css/single-product.module.css'

const productTemplate = ({ data: {product: {title, price, buttonEmailText, buttonWhatsappText, image,  description:{text}}}}) => {
    const productImage = getImage(image);
    return (
        <Layout hideMenu={true}>
            <section className={styles.page}>
                <article>
                    <GatsbyImage style={{maxHeight: `350px`, maxWidth: `500px`}} image={productImage} alt={`${title} image`} />
                    <div>
                        <Link to="/">back to Home</Link>
                    </div>
                </article>
                <article>
                    <div className={styles.wrap}>
                        <h1>{title}</h1>
                        <h3>&euro;{price}/hour</h3>
                    </div>
                    <MarkdownView markdown={text} />

                    <div className={styles.buttons}>
                    <Button secondary email="info@thenannyamsterdam.com">
                        {buttonEmailText} 
                    </Button>
                    <Button secondary mobile="31648740662">
                        {buttonWhatsappText}
                    </Button>
                    </div>
                </article>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug:String) {
        product: contentfulService(slug: {eq: $slug}) {
          title
          price
          buttonEmailText
          buttonWhatsappText
          description: childContentfulServiceLongDescriptionTextNode {
            text: longDescription
          }
          image {
              gatsbyImageData
          }
        }
      }      
`

export default productTemplate
