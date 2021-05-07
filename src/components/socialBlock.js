import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './css/social-block.module.css'

const getData = graphql`
query getInstagramContent {
    content: contentfulHomepage {
        title: instagramTitle
    }
    instagram: allInstaNode(limit: 12) {
        nodes {
          id
          localFile {
            childImageSharp {
              gatsbyImageData
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
        instagram: {nodes}
    } = data
    return (
        <section className={styles.page} id="instagram">
            <div className={styles.headlinebg}>
                <h2>{title}</h2>
            </div>
            <div className={styles.gallery}>
                {
                    nodes.map( ({id, localFile} ) => {
                        const image = getImage(localFile);
                        return <GatsbyImage image={image} alt={id} key={id} />
                    })
                }
            </div>
        </section>
    )
}

export default ContentBlock

