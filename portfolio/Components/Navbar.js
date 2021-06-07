import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);

    return (    
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.wrapper}>
                    <button
                        className={"nav-toggle"}
                        aria-label="Open the menu"
                        type="button"
                        onClick={() => setNavVisible(!isNavVisible)}
                        className={isNavVisible ? `${styles.navToggle} ${styles.navToggleClose}` : styles.navToggle}>
                    </button>
                </div>
                <ul
                    onClick={() => setNavVisible(false)}
                    id="navbar"
                    className={isNavVisible? `${styles.classOpen} ${styles.menu}` : styles.menu}
                >
                    <li className={styles.navMenu}><Link href="/">Home</Link></li>
                    <li className={styles.navMenu}><Link href="/projects">Projects</Link></li>
                    <li className={styles.navMenu}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar;