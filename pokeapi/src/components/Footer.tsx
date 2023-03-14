import React from 'react'
import { Link } from 'react-router-dom'
import pokemonPic from "./../assets/001.png"
import pokemonTwo from "./../assets/002.png"
import pokemonThree from "./../assets/003.png"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img className={styles.footerIcon} src={pokemonPic} alt="pokeball" />
                pokemons
            </Link>
            <Link
                to="/items"
                className={styles.footerLink}
                onClick={(event) => event.preventDefault()}>
                <img className={styles.footerIcon} src={pokemonTwo} alt="pokeball" />
                Items
            </Link>
            <Link to="/location" className={styles.footerLink} onClick={(event) => event.preventDefault()}>
                <img className={styles.footerIcon} src={pokemonThree} alt="pokeball" />
                map
            </Link>
        </footer>
    )
}

export default Footer
