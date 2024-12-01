import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import style from "./Searchbar.module.css"

const SearchBar = () => {
    const { query, setQuery, setMovies } = useContext(MovieContext);

    const handleSearch = async () => {
        const API_KEY = import.meta.env.VITE_API_KEY;
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
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    release_date: movie.release_date

                })),
                ...tvData.results.map((tv) => ({
                    id: tv.id,
                    title: tv.name,
                    original_title: tv.original_name,
                    original_language: tv.original_language,
                    vote_average: tv.vote_average,
                    poster_path: tv.poster_path,
                    overview: tv.overview,
                    release_date: tv.first_air_date

                }))
            ];

            setMovies(combinedResults);
        } catch (error) {
            console.error("Errore durante la ricerca:", error);
        }
    };

    return (
        <div className={style.InputContainer}>
            <input
                className={style.StyledInput}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un film o una serie TV..."
            />
            <button
                className={style.SubmitBtn}
                onClick={handleSearch}>
                Cerca
            </button>
        </div>
    );
};

export default SearchBar;
