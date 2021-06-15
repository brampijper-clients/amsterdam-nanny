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

    function splitHeadline() {
        if(headline.startsWith('Flexibel Nanny')) {
            const headlineArr = headline.split(' ');
            const firstTwoWords = headlineArr[0].concat(' ', headlineArr[1]);    
            const restOfHeadline = headlineArr.slice(2).join(' ');
            return (
                <h1 className="title">
                    <span className="bitthai-script">{firstTwoWords}</span>
                    <span>{restOfHeadline}</span>
                </h1>
            )
        }
    }



    return (
        <section className={styles.page} id="header">
            <div>
                {splitHeadline()}
                <Button email="info@thenannyamsterdam.com">
                    {btnText}
                </Button>
            </div>
      </section>
    )
}

export default Header