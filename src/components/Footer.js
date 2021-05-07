import React from 'react'
import * as styles from './css/footer.module.css'
import { useStaticQuery, graphql } from "gatsby"
import MarkdownView from 'react-showdown';

const getData = graphql`
query GetFooterContent {
    contentfulHomepage {
      footer {
        disclaimer: childContentfulFooterDisclaimerTextNode {
          text: disclaimer
        }
      }
      logo {
        gatsbyImageData(
            placeholder: BLURRED
            layout: FIXED
        )
      }
    }
  }
`
const Footer = () => {
    const data = useStaticQuery(getData);
    const { contentfulHomepage: { footer: { disclaimer: { text }}} } = data 
    return (
        <footer className={styles.page}>
            <MarkdownView markdown={text}/>
        </footer>
    )
}

export default Footer

