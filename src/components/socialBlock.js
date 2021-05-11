import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './css/social-block.module.css'

const getData = graphql`
query getInstaContent {
content: contentfulHomepage {
    title: instagramTitle
}
instagram: allInstagramContent(limit: 12) {
    edges {
     node {
      permalink
      id
       localImage {
         childImageSharp {
           gatsbyImageData(
               layout: CONSTRAINED
               placeholder: BLURRED
           )
         }
       }
     }
   }
  }
}
`

const ContentBlock = () => {
    const data = useStaticQuery(getData);
    const { 
        content: {title},
        instagram: {edges}
    } = data
    return (
        <section className={styles.page} id="instagram">
            <div className={styles.headlinebg}>
                <h2>{title}</h2>
            </div>
            <div className={styles.gallery}>
                {
                    edges.map( ({node} ) => {
                        const image = getImage(node.localImage);
                        return (
                            <a href={node.permalink} target='_blank' rel="noreferrer">
                                <GatsbyImage image={image} alt={node.id} key={node.id} />
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ContentBlock

