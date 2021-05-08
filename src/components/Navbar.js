import React, {useState} from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import NavigationHamburger from './NavigationHamburger';

import * as styles from './css/navbar.module.css'

const getData = graphql`
query getLogo {
    contentfulHomepage {
        logo {
            gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
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
    
    else if (!hideMenu) {
        desktopNavbar =
        <ul className={styles.navbar}>
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