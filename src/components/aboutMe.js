import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import MarkdownView from 'react-showdown';

import * as styles from './css/about-me.module.css'


const getData = graphql`
query getAboutMeContent {
    contentfulHomepage {
        about {
            title
            story: childContentfulAboutTextTextNode {
                text
            }
        }
    }
}
`
const AboutMe = () => {
    const data = useStaticQuery(getData);
    const { contentfulHomepage: {about: {title, story }} } = data;
    
    return (
        <section className={styles.page} id="aboutme">
                <h2>{title}</h2>
                <article> 
                    <MarkdownView markdown={story.text} />
                </article>
      </section>
    )
}

export default AboutMe

