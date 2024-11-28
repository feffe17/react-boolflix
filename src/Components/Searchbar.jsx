import React, { useContext } from 'react';
import { MovieContext } from "../Context/MovieContext" // Assicurati di importare il MovieContext correttamente


const SearchBar = () => {
    const { query, setQuery, setMovies } = useContext(MovieContext);

    const handleSearch = async () => {
        const API_KEY = 'a508a837fab14f25520704b50ed45c8c';
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
        );
        const data = await response.json();
        setMovies(data.results);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un film..."
            />
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
};

export default SearchBar;
