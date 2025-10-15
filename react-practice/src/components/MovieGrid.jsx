import Movies from "./Movies"

import React from 'react'

const MovieGrid = ({ movies }) => {
    if (!movies?.length) {
        return (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        );
    }
    return (
        <div className="container">
            {movies.map((m) => (
                <Movies key={m.imdbID} movie={m} />
            ))}
        </div>
    );
}

export default MovieGrid
