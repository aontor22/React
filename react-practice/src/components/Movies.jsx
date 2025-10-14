import React from 'react'
import { useEffect } from 'react';

// movie api : 23eea695
const Api_Url = 'http://www.omdbapi.com/?apikey=23eea695'

const Movies = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${Api_Url}&s=${title}`);

        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);
    return (
        <div>

        </div>
    )
}

export default Movies
