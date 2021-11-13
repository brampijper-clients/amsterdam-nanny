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
        buttonEmailText
        buttonWhatsappText
      }
    }
`

const Header = () => {
    const data = useStaticQuery(getData)
    const {
        contentfulHeader: {headline, headlineSubtitle, subtitle, buttonEmailText, buttonWhatsappText}
    } = data

    return (
        <section className={styles.page} id="header">
            <div className="container">
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
                <div className={styles.buttons}>
                    <Button email="info@thenannyamsterdam.com">
                        {buttonEmailText}
                    </Button>
                    <Button mobile="31648740662">
                        {buttonWhatsappText}
                    </Button>
                </div>
            </div>
      </section>
    )
}

export default Header