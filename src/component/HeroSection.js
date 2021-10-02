import React from 'react'
import SearchBar from './SearchBar'

function HeroSection({term, searchText}) {
    return (
        <div className="hero-section">
            <p>Viewing Articles About {term}</p>
            <SearchBar searchText={searchText}/>
        </div>
    )
}

export default HeroSection
