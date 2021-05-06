import React, {useState} from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './css/navbar.module.css'

const Navbar = () => {

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

            <StaticImage
                src="../images/logo.png"
                alt="Nanny logo Amsterdam"
                placeholder="blurred"
                height={100}
            />

            {desktopNavbar}

            {mobileNavbar}

            <span className={` ${styles.hamburger}`} aria-hidden="true" onClick={() => setShowMenu(!showMenu)}>
                =
            </span>
        </nav>
    )
}

export default Navbar
