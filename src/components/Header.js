import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import * as styles from './css/header.module.css'
import Button from '../components/button'

const getData = graphql`
query getHeadline {
    contentfulHeader {
        headline
        headlineSubtitle
        subtitle
        headlineButtonText
      }
    }
`

const Header = () => {
    const data = useStaticQuery(getData)
    const {
        contentfulHeader: {headline, headlineSubtitle, subtitle, headlineButtonText: btnText}
    } = data

    //friendly nanny
    //
    //around your corner in Amsterdam
    return (
        <section className={styles.page} id="header">
            <div>
                <h1>
                    <span className="bitthai-script">
                        {headline}
                    </span>
                    <span className="headline-subtitle">
                        {headlineSubtitle}    
                    </span>
                    <span className="subtitle">
                        {subtitle}   
                    </span>
                </h1>
                <Button email="sarah.thenannyamsterdam@gmail.com">
                    {btnText}
                </Button>
            </div>
      </section>
    )
}

export default Header