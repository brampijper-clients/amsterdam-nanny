import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './css/layout.css'

const layout = ({children, hideMenu}) => {
    return (
        <>
            <Navbar hideMenu={hideMenu}/>
            <main>
                {children}
            </main>
            <Footer/>  
        </>
    )
}

export default layout
