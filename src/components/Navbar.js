import React, {useState} from 'react'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import NavigationHamburger from './NavigationHamburger'

import * as styles from './css/navbar.module.css'

const getData = graphql`
query getLogo {
    contentfulHomepage {
        logo {
            gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height: 94
            )
        }
    }
}
`

const Navbar = ({hideMenu}) => {
    const data = useStaticQuery(getData);
    const { contentfulHomepage: { logo } } = data;
    const image = getImage(logo);

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    let mobileNavbar, desktopNavbar, hamburgerIcon

    if(showMenu && !hideMenu) {
        mobileNavbar = 
            <ul  className={styles.mobile} onClick={ () => setShowMenu(!showMenu)}>
                <li>
                    <AnchorLink to="/#header" title="home" />
                </li>
                <li>
                    <AnchorLink to="/#services" title="services" />
                </li>
                <li>
                    <AnchorLink to="/#aboutme" title="about me" />
                </li>
                <li>
                    <AnchorLink to="/#instagram" title="instagram" />
                </li>
            </ul>
    } 
    
    else if (!hideMenu) {
        desktopNavbar =
        <ul className={styles.navbar}>
            <li>
                <AnchorLink to="/#header" title="home" />
            </li>
            <li>
                <AnchorLink to="/#services" title="services" />
            </li>
            <li>
                <AnchorLink to="/#aboutme" title="about me" />
            </li>
            <li>
                <AnchorLink to="/#instagram" title="instagram" />
            </li>
        </ul>
    }

    if (!hideMenu) {
        hamburgerIcon =
        <div className={styles.hamburger}>
            <NavigationHamburger showMenu={showMenu} onClick={handleClick} />
        </div>
    }
        

    return (
        <nav className={styles.page}>
            
            <Link to='/' >
                <GatsbyImage className={styles.image} image={image} alt='Amsterdam Nanny logo' />
            </Link>
            
            {desktopNavbar}
            {mobileNavbar}
            {hamburgerIcon}

        </nav>
    )
}
export default Navbar