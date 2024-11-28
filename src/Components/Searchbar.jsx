import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

const SearchBar = () => {
    const { query, setQuery, setMovies } = useContext(MovieContext);

    const handleSearch = async () => {
        const API_KEY = 'a508a837fab14f25520704b50ed45c8c';
        try {
            const [moviesResponse, tvResponse] = await Promise.all([
                fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
                ),
                fetch(
                    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`
                )
            ]);

            const moviesData = await moviesResponse.json();
            const tvData = await tvResponse.json();

            const combinedResults = [
                ...moviesData.results.map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    original_title: movie.original_title,
                    original_language: movie.original_language,
                    vote_average: movie.vote_average,
                })),
                ...tvData.results.map((tv) => ({
                    id: tv.id,
                    title: tv.name,
                    original_title: tv.original_name,
                    original_language: tv.original_language,
                    vote_average: tv.vote_average,
                }))
            ];

            setMovies(combinedResults);
        } catch (error) {
            console.error("Errore durante la ricerca:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un film o una serie TV..."
            />
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
};

export default SearchBar;
