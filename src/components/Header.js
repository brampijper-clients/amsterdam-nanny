import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as styles from './css/header.module.css'
import Button from '../components/button'

const getData = graphql`
query getHeadline {
    contentfulHeader {
        headline
        headlineSubtitle
        headlineButtonText
      }
    }
`

const Header = () => {
    const data = useStaticQuery(getData)
    const {
        contentfulHeader: {headline, headlineSubtitle, headlineButtonText: btnText}
    } = data

    return (
        <section className={styles.page} id="header">
            <div>
                <h1>
                    <span className="bitthai-script">
                        {headline}
                    </span>
                    <span>
                        {headlineSubtitle}    
                    </span>
                </h1>
                <Button email="info@thenannyamsterdam.com">
                    {btnText}
                </Button>
            </div>
      </section>
    )
}

export default Header