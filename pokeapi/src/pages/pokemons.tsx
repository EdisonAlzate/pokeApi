import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Pokemons = () => {

    const [query, setQuery] = useState("")
    return (
        <>
        <Header query={query} setQuery={setQuery}/>
            <main>
                <h1>POKEMOS</h1>
            </main>
            <Footer/>
        </>
    )
}

export default Pokemons
