import React from 'react'

const SearchBar = ({ value, onChange, onSearch, iconSrc }) => {
    return (
        <div className="search">
            <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search for movies" />
            <img src={iconSrc} alt="search" onClick={onSearch} />
        </div>
    );
}

export default SearchBar
