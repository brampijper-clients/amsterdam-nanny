import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import * as styles from './css/bg-component.module.css'

const getData = graphql`
query getBackgroudImage {
    contentfulHomepage {
        backgroundImage {
          gatsbyImageData(
              placeholder: BLURRED
          )
        }
    }
}
`
const BgComponent = () => {
    const data = useStaticQuery(getData);
    const {
        contentfulHomepage: { backgroundImage }
    } = data
    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image)

    return (
        <BackgroundImage
            className={styles.page}
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
            style={{position: `absolute`}}
            >
                <GatsbyImage image={image} alt={"testimage"}/>
        </BackgroundImage>
    )
 
}

export default BgComponent