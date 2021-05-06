import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as styles from './css/header.module.css'
import Button from '../components/button'

const getData = graphql`
query getHeadline {
    contentfulHeader {
        headline
      }
    }
`

const Header = () => {
    const data = useStaticQuery(getData)
    const {
        contentfulHeader: {headline}
    } = data

    return (
        <section className={styles.page} id="header">
            <div>
                <h1>{headline}</h1>
                <Button>Contact me for more info</Button>
            </div>
      </section>
    )
}

export default Header