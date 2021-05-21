import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as styles from './css/header.module.css'
import Button from '../components/button'

const getData = graphql`
query getHeadline {
    contentfulHeader {
        headline
        headlineButtonText
      }
    }
`

const Header = () => {
    const data = useStaticQuery(getData)
    const {
        contentfulHeader: {headline, headlineButtonText: btnText}
    } = data

    return (
        <section className={styles.page} id="header">
            <div>
                <h1>{headline}</h1>
                <Button email="info@thenannyamsterdam.com">
                    {btnText}
                </Button>
            </div>
      </section>
    )
}

export default Header