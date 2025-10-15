import { searchMoviesByTitle } from "../services/movieService";
import { useEffect, useState } from "react";

export function useMovies(initialQuery = ""){
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function runSearch(q) {
        try{
            setLoading(true);
            setError("");
            const term = q?.trim() || initialQuery;
            const res = await searchMoviesByTitle(term);
            setMovies(res);
        }catch(e){
            setError(String(e));
            setMovies([]);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        runSearch(initialQuery);
    }, []);

    return {
        searchTerm,
        setSearchTerm,
        movies,
        loading,
        error,
        runSearch,
    };
}