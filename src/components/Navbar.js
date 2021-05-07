import React, {useState} from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql, Link } from "gatsby"

import * as styles from './css/navbar.module.css'

const getData = graphql`
query getMenu {
    contentfulHomepage {
        logo {
            gatsbyImageData(
                placeholder: BLURRED
                layout: FIXED
            )
        }
    }
}
`

const Navbar = () => {
    const data = useStaticQuery(getData);
    const { contentfulHomepage: { logo } } = data;
    const image = getImage(logo);

    // setShowMenu is the method that will change the variable showMenu. Initially you have to set a state.
    // which is currently false, because you don't want to display when loading.

    const [showMenu, setShowMenu] = useState(false)

    let mobileNavbar, desktopNavbar

    if(showMenu) {
        mobileNavbar = 
        <div className={styles.mobile}>
            <ul onClick={ () => setShowMenu(!showMenu)}>
                <li>
                    <button onClick={ () => scrollTo('#header')}>home</button>
                </li>
                <li>
                    <button onClick={ () => scrollTo('#services')}>products</button>
                </li>
                <li>
                    <button onClick={ () => scrollTo('#aboutme')}>about me</button>
                </li>
                <li>
                    <button onClick={ () => scrollTo('#instagram')}>instagram</button>
                </li>
            </ul>
        </div>
    } 
    
    else {
        desktopNavbar =
        <ul>
            <li>
                <button onClick={ () => scrollTo('#header')}>home</button>
            </li>
            <li>
                <button onClick={ () => scrollTo('#services')}>products</button>
            </li>
            <li>
                <button onClick={ () => scrollTo('#aboutme')}>about me</button>
            </li>
            <li>
                <button onClick={ () => scrollTo('#instagram')}>instagram</button>
            </li>
        </ul>
    }
        

    return (
        <nav className={styles.page}>
            
            <Link to='/'>
                <GatsbyImage image={image} alt='Amsterdam Nanny logo' />
            </Link>

            {desktopNavbar}

            {mobileNavbar}

            <span className={` ${styles.hamburger}`} aria-hidden="true" onClick={() => setShowMenu(!showMenu)}>
                =
            </span>
        </nav>
    )
}

export default Navbar
