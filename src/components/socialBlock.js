import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import Image from 'gatsby-image'

import * as styles from './css/social-block.module.css'

// const getData = graphql`
// query getImages {
//     allInstagramContent {
//       nodes {
//         media_url
//         id
//         localImage {
//           childImageSharp {
//             fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
//                 ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

const getData = graphql`
query getInstagramTitle {
    content: contentfulHomepage {
        title: instagramTitle
    }
}
`

const ContentBlock = () => {
    const data = useStaticQuery(getData);
    const { content: {title}} = data
    // const {
    //     allInstagramContent: {nodes}
    // } = data
    // console.log(nodes)

    return (
        <section className={styles.page} id="instagram">
            <div className={styles.headlinebg}>
                <h2>{title}</h2>
            </div>
            <div className={styles.gallery}>
                {/* {
                    nodes.map( (image) => {
                        const { localImage: {childImageSharp: {fluid}} } = image
                        return <Image key={image.id} fluid={fluid}></Image>
                    })
                } */}
            </div>
      </section>
    )
}

export default ContentBlock

