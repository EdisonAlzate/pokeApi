import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

import pokemonPic from "./../assets/001.png"
import styles from './pokemons.module.css'

const Pokemons = () => {

    const [query, setQuery] = useState("")
    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav>
                    <Link className={styles.listItem} to="/">                        
                    </Link>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={pokemonPic} alt="BULBASAUR" />
                        <div className={styles.listItemText} >
                            <span>Bulbasaur</span>
                            <span>001</span>
                        </div>
                    </Link>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={pokemonPic} alt="BULBASAUR" />
                        <div className={styles.listItemText} >
                            <span>Ivisaur</span>
                            <span>002</span>
                        </div>
                    </Link>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={pokemonPic} alt="BULBASAUR" />
                        <div className={styles.listItemText} >
                            <span>Velbuasaur</span>
                            <span>003</span>
                        </div>
                    </Link>
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons
