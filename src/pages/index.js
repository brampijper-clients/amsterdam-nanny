// arrow based functional component
import React from "react"

import Layout from '../components/layout' 
import Header from '../components/Header'
import Services from './products'
import AboutMe from '../components/aboutMe'
import SocialBlock from '../components/socialBlock'
import BgComponent from '../components/bgComponent'

const Home = () => (
  <Layout hideMenu={false}>
  <BgComponent />

    <div className="page-wrap">
      <Header />
      <Services />
      <AboutMe />
    </div>

    <SocialBlock />

  </Layout>
)

export default Home