import React, { useContext } from 'react';
import { MovieContext } from "../Context/MovieContext";
import { getFlag } from "../Utility/getFlag"; // Importa la funzione getFlag

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <h3>{movie.original_title}</h3>
                    <p>
                        Lingua:
                        <img
                            src={getFlag(movie.original_language)}
                            alt={movie.original_language}
                            style={{ width: '20px', marginLeft: '5px' }}
                        />
                    </p>
                    <p>Voto: {parseFloat(movie.vote_average).toFixed(1)}</p>

                </div>
            ))}
        </div>
    );
};

export default MovieList;

