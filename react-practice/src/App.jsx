import SearchIcon from "./assets/search.svg";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import MovieGrid from "./components/MovieGrid";
import SearchBar from "./components/SearchBar";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const {searchTerm, setSearchTerm, movies, loading, error, runSearch } = useMovies("Spiderman");

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} onSearch={() => runSearch(searchTerm)} iconSrc={SearchIcon}/>

      {loading && <p style={{color: "#f9d3d4"}}>Loading....</p>}

      {error && <p style={{color: "tomato"}}>{error}</p>}

      <MovieGrid movies={movies}/>
    </div>
  );
};

export default App;