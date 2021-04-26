import React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from "gatsby"

// import styles from '../components/css/products.module.css'


const getData = graphql`
query retrieveServices {
  allContentfulServices {
    nodes {
      id
      title
      price
      slug
      shortDescription
    }
  }
}
`

const Services = () => {
  const data = useStaticQuery(getData);
  console.log(data)
    const {
        allContentfulServices: {nodes:services}
    } = data
    console.log(services)
    return <>
        <section 
        //className={styles.page} 
        id="services">
          <h2> My Services</h2>
          <div className="wrapper">
          {
            services.map( (service) => {
                const {title, price, slug, id, shortDescription} = service
                return <article key={id}>
                    {/* <Image fluid={image.fluid} alt={title}></Image> */}
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
