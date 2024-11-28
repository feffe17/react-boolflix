import React, { useContext } from 'react';
import { MovieContext } from "../Context/MovieContext";

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <h3>{movie.original_title}</h3>
                    <p>Lingua: {movie.original_language}</p>
                    <p>Voto: {movie.vote_average}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
