import React, { useState } from 'react'
import Header from '../components/Header'

const Pokemons = () => {

    const [query, setQuery] = useState("")
    return (
        <>
        <Header query={query} setQuery={setQuery}/>
            <main>
                <h1>POKEMOS</h1>
            </main>
            <footer>FOOTER</footer>
        </>
    )
}

export default Pokemons
