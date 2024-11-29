import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { MovieContext } from '../Context/MovieContext';
import { getFlag } from "../Utility/getFlag";
import { getPosterUrl } from '../Utility/getPosterUrl';
import { getStarRating } from '../Utility/getStarRating';

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                    <h3>{movie.original_title}</h3>
                    <p>Lingua: {movie.original_language}
                        <img
                            src={getFlag(movie.original_language)}
                            alt={movie.original_language}
                            style={{ width: '20px', marginLeft: '5px' }}
                        />
                    </p>
                    <div>
                        {Array.from({ length: 5 }, (_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={index < getStarRating(movie.vote_average) ? solidStar : regularStar}
                                style={{ color: index < getStarRating(movie.vote_average) ? "#ffc107" : "#ddd" }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default MovieList;
