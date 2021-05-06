import React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from "gatsby"

import * as styles from '../components/css/products.module.css';

const getData = graphql`
query retrieveServices {
  allContentfulServices {
    nodes {
      id
      title
      price
      slug
      shortDescription
      image {
        gatsbyImageData
      }
    }
  }
}
`

const Services = () => {
  const data = useStaticQuery(getData);
  // console.log(data)
    const {
        allContentfulServices: {nodes:services}
    } = data
    return <>
        <section className={styles.page} id="services">
          <h2> My Services</h2>
          <div className="wrapper">
          {
            services.map( (service) => {
                const {title, price, slug, id, shortDescription} = service
                const image = getImage(service.image);
                return <article key={id}>
                    <GatsbyImage image={image} alt={`${title} image`} />
                      <h3>{title}
                          <span>${price}/hour</span>
                      </h3>
                      <p>{shortDescription}</p>
                    <Link to={`/products/${slug}`}>More details</Link>
                </article>
            })
          }
          </div>
        </section>
    </>
}

export default Services
