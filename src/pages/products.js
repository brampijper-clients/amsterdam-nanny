import React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from "gatsby"

import * as styles from '../components/css/products.module.css';

const getData = graphql`
query retrieveServices {
  allContentfulService {
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
    const {
        allContentfulService: {nodes:services}
    } = data
    return <>
        <section className={styles.page} id="services">
          <h2> My Services</h2>
          <div className="wrapper">
          {
            services.map( (service) => {
                const {title, price, slug, id, shortDescription} = service
                const image = getImage(service.image);
                return <Link key={id} to={`/products/${slug}`}>
                  <article>
                    <GatsbyImage image={image} alt={`${title} image`} />
                      <h3>
                        {title}
                        <span>&euro;{price}/hour</span>
                      </h3>
                      <p>{shortDescription}</p>
                </article>
                </Link>
            })
          }
          </div>
        </section>
    </>
}

export default Services
