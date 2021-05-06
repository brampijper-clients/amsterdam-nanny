// arrow based functional component
import React from "react"

import Layout from '../components/layout' 
import Header from '../components/Header'
import Services from './products'
import ContentBlock from '../components/contentBlock'
import SocialBlock from '../components/socialBlock'


const Home = () => (
  <Layout>

    <div className="page-wrap">
      <Header />
      <Services />
      <ContentBlock />
    </div>

    <SocialBlock />

  </Layout>
)

export default Home